import React from "react";
import { Stack } from "@chakra-ui/react";
import PersonalDetails from "./PersonalDetails";
import NextAppointment from "./NextAppointments";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AssociatedDocuments from "./AssociatedDocuments";
function MainPatientDetails() {
  const { id } = useParams();

  const patients = useSelector((state) => state.patients.patients);
  const currentPatient = patients.find((p) => p.id === +id);
  return (
    <Stack
      minW={{ base: "100%", md: "300px" }}
      spacing="44px"
      flexGrow={1}
      mx="2px"
      ml={{ lg: "20px" }}
      p="16px"
      pl="8px"
      bg="white"
      my={{ base: "20px", lg: "0" }}
    >
      <PersonalDetails {...currentPatient} />
      <NextAppointment {...currentPatient} />
      <AssociatedDocuments />
    </Stack>
  );
}

export default MainPatientDetails;
