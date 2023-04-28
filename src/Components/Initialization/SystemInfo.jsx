import { FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import ImageUpload from "../Shared/ImageUpload";
function Initialization() {
  const [selectedImage, setSelectedImage] = useState("");
  return (
    <Stack spacing="4" align="center">
      <ImageUpload
        selectedFile={selectedImage}
        setSelectedFile={setSelectedImage}
        text
        icon="imageIcon"
      />
      <FormControl>
        <FormLabel>اسم المستشفى</FormLabel>
        <Input variant={"primary"} placeholder="مستشفى الحياة" />
      </FormControl>
    </Stack>
  );
}

export default Initialization;
