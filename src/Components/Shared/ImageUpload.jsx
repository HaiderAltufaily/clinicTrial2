import React, { useCallback, useState } from "react";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import upload from "../../assets/upload.svg";
import { Camera, Close, ImageIcon, Profile } from "../../assets";

const ImageUpload = ({ setSelectedFile, selectedFile, icon, text }) => {
  const handleDrop = useCallback((acceptedFiles) => {
    setSelectedFile(
      Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0]),
      })
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: handleDrop,
  });

  function renderCenteredIcon() {
    if (icon === "profile" || !icon) {
      return <Profile />;
    } else if (icon === "imageIcon") {
      return (
        <Stack
          align="center"
          justify={"center"}
          bg="lightPurple"
          boxSize={"70px"}
          borderRadius={"full"}
        >
          <ImageIcon />
        </Stack>
      );
    }
  }
  return (
    <Box
      // boxSize={"125px"}
      borderRadius="42px"
      maxW={"10.25rem"}
      maxH={"9.813rem"}
      border={`2px dashed gray.200`}
      bg={"veryLightGray"}
      // p="10"
      cursor={"pointer"}
      position="relative"
    >
      {selectedFile ? (
        <>
          <Flex overflow={"hidden"}>
            <Image
              boxSize={"125px"}
              borderRadius="42px"
              objectFit={"cover"}
              src={selectedFile.preview || selectedFile}
              maxW="100%"
              maxH="100%"
            />
          </Flex>
          <Stack
            justify={"center"}
            align="center"
            boxSize={"30px"}
            borderRadius={"50%"}
            bg="primary"
            position={"absolute"}
            transform="translate(-50%, -50%)"
            left="50%"
            border="3px solid white"
          >
            <Camera />
          </Stack>
        </>
      ) : (
        <Flex
          p="36px"
          alignItems="center"
          justifyContent="center"
          w="100%"
          h="100%"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <Text>Drop the image here</Text>
          ) : (
            <Stack justify={"center"} align={"center"}>
              {renderCenteredIcon()}
              {text && (
                <Stack
                  align="center"
                  fontFamily={"dinMedium"}
                  fontSize={"sm"}
                  spacing="0"
                >
                  <Text>رفع صورة</Text>
                  <Text color="lightText">PNG , JPG</Text>
                </Stack>
              )}
            </Stack>
          )}
        </Flex>
      )}
      {selectedFile && (
        <Flex
          position={"absolute"}
          top="0"
          left="0"
          _hover={{ transform: "scale(1.3)" }}
          onClick={() => setSelectedFile(null)}
        >
          <Close width="11" height="11" />
        </Flex>
      )}
      {!selectedFile && (
        <Image position="absolute" right="-3" bottom="-2" src={upload} />
      )}
    </Box>
  );
};

export default ImageUpload;
