import {
  Button,
  Container,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CustomProgressBar from "../Components/Initialization/CustomProgressBar";
import SystemInfo from "../Components/Initialization/SystemInfo";
import CreateSection from "../Components/Initialization/CreateSection";
import { Logo2 } from "../assets";
import { useNavigate } from "react-router-dom";

function Initialization() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    {
      title: "معلومات النظام",
      renderComponent: () => <SystemInfo />,
      info: "يرجى ادخال معلومات المشفى / المركز",
    },
    {
      title: "إنشاء قسم",
      renderComponent: () => <CreateSection />,

      info: "يرجى ادخال القسم الطبي",
    },
    {
      title: "الدليل المحاسبي",
      renderComponent: () => <SystemInfo />,
      info: "يرجى ادخال معلومات المستخدم",
    },
    {
      title: "إستيراد الأدوية",
      renderComponent: () => <SystemInfo />,
      info: "إستيراد الأدوية من ملف اكسل",
    },
    {
      title: "الدليل المحاسبي",
      renderComponent: () => <SystemInfo />,
      info: "يرجى إختيار دليلك المحاسبي",
    },
    {
      title: "الدليل المحاسبي",
      renderComponent: () => <SystemInfo />,
      info: "يرجى إنشاء دليلك المحاسبي",
    },
  ];
  const handleNextStep = () => {
    if (currentStep === steps.length) {
      navigate("/patients");
    } else setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  return (
    <Stack
      h={"100vh"}
      overflow={"hidden"}
      bg="#F7F7FA"
      pt="24px"
      pb="2"
      px="30px"
    >
      <Stack spacing="10" align="center" pt="12" pb="4" h="90vh" bg="white">
        <CustomProgressBar
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        <Stack spacing="0" align="center">
          <Logo2 />
          <Text fontSize={"40px"} fontFamily={"dinMedium"}>
            مرحباً بك في برنامج الطبيب
          </Text>
          <Text color="mediumGray" fontSize={"28px"}>
            نحن هنا لمساعدتك , {steps[currentStep - 1].info}
          </Text>
        </Stack>
        <Stack
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#c9c9c9",
              borderRadius: "24px",
            },
          }}
          px="2"
          overflow={"auto"}
          w="400px"
        >
          {steps[currentStep - 1].renderComponent()}
        </Stack>
      </Stack>

      <HStack justify={currentStep > 1 ? "space-between" : "flex-end"}>
        {currentStep > 1 && (
          <Button onClick={handlePrevStep} variant={"primary"}>
            رجوع
          </Button>
        )}
        <HStack>
          <Button variant={"secondary"}>تخطي</Button>
          <Button onClick={handleNextStep} variant={"primary"}>
            تقدم
          </Button>
        </HStack>
      </HStack>
    </Stack>
  );
}

export default Initialization;
