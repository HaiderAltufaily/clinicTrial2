import {
  Avatar,
  Box,
  Collapse,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Calender } from "../../../assets";
import SingleAppointment from "./SingleAppointment";
import SingleSession from "./SingleSession";
function SingleVisit() {
  const [showAppointmentDetails, setShowAppointmentDetails] = useState(false);
  return (
    <Stack
      border="1px solid"
      borderColor={"stroke"}
      spacing="18px"
      boxShadow={"softShadow"}
      bg="white"
    >
      <HStack
        p={{ md: "12px", xl: "16px" }}
        cursor={"pointer"}
        onClick={() => setShowAppointmentDetails((prev) => !prev)}
        justify={"space-between"}
      >
        <Flex
          w="100%"
          flexDir={{ base: "column", md: "column", xl: "row" }}
          spacing={"6"}
          textAlign={"right"}
        >
          <HStack align="center">
            <Box w="22px" h="24px">
              <Calender />
            </Box>

            <Stack wordBreak={"break-word"} spacing="0">
              <Text color="lightText">تاريخ المراجعة</Text>
              <Text fontSize={{ base: "md", xl: "lg" }}>December 1 , 2021</Text>
            </Stack>
          </HStack>
          <HStack mr="6" align={"center"}>
            <Avatar
              src={`https://randomuser.me/api/portraits/med/men/66.jpg`}
              name="نور محمد"
              color="white"
              boxSize={"45px"}
              borderRadius={"18px"}
            />
            <Stack wordBreak={"break-word"} spacing="0">
              <Text color="lightText"> الطبيب المعالج </Text>
              <Text textAlign={"right"} fontSize={{ base: "md", xl: "lg" }}>
                د.سارة احمد
              </Text>
            </Stack>
          </HStack>
        </Flex>
        <Box
          w="0"
          h="0"
          borderBottom="14px solid #ddd"
          borderLeft="11px solid transparent"
          borderRight="11px solid transparent"
          borderBottomLeftRadius="3px"
          borderBottomRightRadius="3px"
          transform={!showAppointmentDetails && "rotate(180deg)"}
          justifySelf={"flex-end"}
          transition={"0.3s ease-in-out"}
        />
      </HStack>
      <Collapse in={showAppointmentDetails}>
        <Stack p={{ md: "12px", xl: "16px" }}>
          <SingleAppointment />
          <SingleSession />
        </Stack>
      </Collapse>
    </Stack>
  );
}

export default SingleVisit;
