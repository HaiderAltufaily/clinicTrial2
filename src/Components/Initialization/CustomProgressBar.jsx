import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Progress,
  Button,
  useColorModeValue,
  HStack,
  Container,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ImageUpload from "./ImageUpload";

const steps = [
  { id: 1, label: "معلومات النظام" },
  { id: 2, label: "إنشاء قسم" },
  { id: 3, label: "إدخال مستخدمين" },
  { id: 4, label: "إنشاء طوابير" },
  { id: 5, label: "إستيراد الأدوية" },
  { id: 6, label: "الدليل المحاسبي" },
];

const CustomProgressBar = ({ currentStep, setCurrentStep }) => {
  const activeColor = "primary";
  const inactiveColor = "#E8ECF8 ";

  return (
    <Box>
      <HStack spacing={"-0.5"}>
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {index > 0 && (
              <Box bg="#E8ECF8" width="100%" mr="2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: currentStep >= step.id ? "100%" : "0%",
                    transition: { duration: 0.5 },
                  }}
                  exit={{ width: 0, transition: { duration: 0.5 } }}
                >
                  <Progress
                    height="2px"
                    value={currentStep >= step.id ? 100 : 0}
                    colorScheme="primary"
                    borderRadius="0"
                    bg="primary"
                  />
                </motion.div>
              </Box>
            )}
            <Stack
              align={"center"}
              position="relative"
              justify={"center"}
              width="60px"
              textAlign="center"
            >
              <HStack
                w="15px"
                h="15px"
                borderRadius="50%"
                borderColor={
                  currentStep >= step.id ? activeColor : inactiveColor
                }
                bg={currentStep > step.id ? activeColor : "transparent"}
                borderWidth="3px"
                align={"center"}
                justify={"center"}
              ></HStack>
              <Text
                color={currentStep >= step.id ? activeColor : "lightText"}
                position="absolute"
                top="-40px"
                w="md"
              >
                {step.label}
              </Text>
            </Stack>
          </React.Fragment>
        ))}
      </HStack>
    </Box>
  );
};

export default CustomProgressBar;
