import React from "react";
import { Avatar, Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";

function PersonalDetails({ name, address, phoneNumber, gender, imageUrl }) {
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
      content: "1992/7/2",
    },
    {
      title: "الملاحظات",
      content: "لاتوجد",
    },
  ];
  return (
    <Stack fontSize={"lg"}>
      <Flex align={"flex-start"} justify={"space-between"} flexWrap={"wrap"}>
        <HStack align={"center"}>
          <Avatar
            src={imageUrl}
            bg="        "
            name={name}
            color="white"
            boxSize={"120px"}
            borderRadius={"38px"}
          />
          <Stack wordBreak={"break-word"}>
            <Text fontFamily={"dinMedium"} fontSize={"lg"}>
              {" "}
              {name}{" "}
            </Text>
            <Text textAlign={"right"} dir="ltr" color="lightText">
              +964 {phoneNumber}
            </Text>
          </Stack>
        </HStack>
      </Flex>
      <Stack spacing="8px" flexWrap="wrap">
        {details.map((detail) => (
          <HStack key={detail.title} maxW="100%">
            <Text color="lightText" minWidth="90px">
              {detail.title}:
            </Text>
            <Box wordBreak="break-word">
              <Text>{detail.content}</Text>
            </Box>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
}

export default PersonalDetails;
