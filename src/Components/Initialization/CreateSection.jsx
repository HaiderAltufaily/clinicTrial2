import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { HStack, Stack, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Trash } from "../../assets";
import { Button, IconButton } from "@chakra-ui/button";

function CreateSection() {
  const [sectionList, setSectionList] = useState([]);
  const [sectionValue, setSectionValue] = useState("");
  function handleSubmitSection(e) {
    e.preventDefault();
    if (sectionList.find((u) => u === sectionValue) || !sectionValue) {
      return;
    } else {
      setSectionList((prev) => [...prev, sectionValue]);
      setSectionValue("");
    }
  }
  function handleDeleteSection(section) {
    const newSectionList = sectionList.filter((s) => s !== section);
    setSectionList(newSectionList);
  }
  return (
    <Stack spacing="16px">
      <form onSubmit={handleSubmitSection}>
        <Stack spacing="16px">
          <FormControl>
            <FormLabel>القسم</FormLabel>
            <Input
              value={sectionValue}
              onChange={(e) => setSectionValue(e.target.value)}
              placeholder="اسم القسم"
              variant={"primary"}
            />
          </FormControl>
          <Button
            type="submit"
            w="100%"
            borderRadius={"12px"}
            variant={"primary"}
          >
            إضافة
          </Button>
        </Stack>
      </form>
      {sectionList.length > 0 && (
        <Stack overflow={"auto"}>
          <Text fontSize={"lg"}>الاقسام</Text>
          <Stack>
            {sectionList.map((section) => (
              <HStack
                key={section}
                borderRadius={"12px"}
                p="8px"
                border="1px solid"
                borderColor={"lightText"}
                align="center"
                justify={"space-between"}
              >
                <Text> {section}</Text>
                <IconButton
                  onClick={() => handleDeleteSection(section)}
                  bg="transparent"
                  icon={<Trash fill="#7B61FF" />}
                />
              </HStack>
            ))}
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}

export default CreateSection;
