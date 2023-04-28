import { Avatar, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import MainPatientDetails from "../Components/PatientDetails/PersonalDetails/MainPatientDetails";
import AppointmentReport from "../Components/PatientDetails/Appointments&Report";

function PatientDetails() {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
          height: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#c9c9c9",
          borderRadius: "24px",
        },
      }}
      p="2"
      maxH={"68vh"}
      overflow={"auto"}
      flexBasis={"60%"}
      dir="rtl"
      align={"start"}
      w={{ base: "100%", lg: "auto" }}
    >
      <MainPatientDetails />
      <AppointmentReport />
    </Flex>
  );
}

export default PatientDetails;
