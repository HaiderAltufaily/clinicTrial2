import {
  Button,
  Container,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ImageUpload from "../Components/Initialization/ImageUpload";
import Logo from "../assets/logo2.svg";
import CustomProgressBar from "../Components/Initialization/CustomProgressBar";
import SystemInfo from "../Components/Initialization/SystemInfo";
import CreateSection from "../Components/Initialization/CreateSection";

function Initialization() {
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
  ];
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
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
      <Stack h="90vh" bg="white" align="center">
        <Container mt="10" dir="rtl" maxW={"4xl"} py="10px">
          <CustomProgressBar
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
          <Stack mb="6" justify={"center"} align="center" mt="6">
            <Image w="100%" h="110" src={Logo} />
            <Text fontSize={"40px"} fontWeight={"bold"}>
              مرحباً بك في برنامج الطبيب
            </Text>
            <Text color="mediumGray" fontSize={"28px"}>
              نحن هنا لمساعدتك , {steps[currentStep - 1].info}
            </Text>
          </Stack>
          <Container overflow={"auto"} maxW={"400px"}>
            {steps[currentStep - 1].renderComponent()}
          </Container>
        </Container>
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
