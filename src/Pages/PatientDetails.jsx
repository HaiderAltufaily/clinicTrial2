import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import MainPatientDetails from "../Components/PatientDetails/PersonalDetails/MainPatientDetails";
import AppointmentReport from "../Components/PatientDetails/Appointments&Report";

function PatientDetails() {
  return (
    <HStack
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
      pl="2"
      maxH={"68vh"}
      overflow={"auto"}
      flexBasis={"58%"}
      align="start"
    >
      <MainPatientDetails />
      <AppointmentReport />
    </HStack>
  );
}

export default PatientDetails;
