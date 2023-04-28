import {
  Avatar,
  Box,
  HStack,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import CardMenu from "./CardMenu";
import { Link } from "react-router-dom";

function PatientCard({
  name,
  phoneNumber,
  address,
  gender,
  imageUrl,
  birthdate,
  id,
}) {
  const details = [
    {
      title: "العنوان",
      content: address,
    },
    {
      title: "الجنس",
      content: gender,
    },
    {
      title: "تاريخ الميلاد",
      //temporary
      content: birthdate || "1992/7/2",
    },
    {
      title: "الملاحظات",
      content: "لاتوجد",
    },
  ];
  return (
    <LinkBox
      as={Stack}
      borderRadius={"12px"}
      p="16px"
      bg="white "
      flexGrow={1}
      minW="200px"
      boxShadow={"card"}
      spacing="8px"
      position={"relative"}
      _hover={{
        bg: "veryLightGray",
        border: "1px solid stroke",
      }}
      overflow={"hidden"}
    >
      <HStack align={"flex-start"} justify={"space-between"}>
        <HStack align={"center"}>
          <Avatar
            src={imageUrl}
            bg="primary "
            name={name}
            color="white"
            boxSize={"70px"}
            borderRadius={"28px"}
          />

          <Stack wordBreak={"break-word"}>
            <LinkOverlay as={Link} to={`/patients/${id}`}>
              {" "}
              <Box>
                <Text color="#4A5568" fontFamily={"dinMedium"} fontSize={"lg"}>
                  {" "}
                  {name}{" "}
                </Text>
              </Box>
            </LinkOverlay>
            <Text textAlign={"right"} dir="ltr" color="lightText">
              +964 {phoneNumber}
            </Text>
          </Stack>
        </HStack>
      </HStack>
      <Box top="-2" left="3" position={"absolute"}>
        <CardMenu
          patient={{
            name,
            address,
            phoneNumber,
            gender,
            imageUrl,
            birthdate,
            id,
          }}
        />
      </Box>

      <Stack spacing="8px" flexWrap="wrap">
        {details.map((detail) => (
          <HStack key={detail.title} maxW="100%">
            <Text color="lightText" minWidth="80px">
              {detail.title}:
            </Text>
            <Box wordBreak="break-word">
              <Text>{detail.content}</Text>
            </Box>
          </HStack>
        ))}
      </Stack>
    </LinkBox>
  );
}

export default PatientCard;
