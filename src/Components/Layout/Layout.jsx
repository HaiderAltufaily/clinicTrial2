import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Flex, HStack, Stack } from "@chakra-ui/react";

function Layout({ children }) {
  return (
    <Flex
      maxH={{ base: "auto", lg: "100vh" }}
      overflow={"hidden"}
      w="100%"
      bg="#F7F7FA"
    >
      <Sidebar />
      <Stack w="100%">
        <Header />
        {children}
      </Stack>
    </Flex>
  );
}

export default Layout;
