import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import ai2 from "../assets/ai2.jpeg";

const Course = () => {
  const [t, i18n] = useTranslation("global");
  const jp = i18n.language === "jp";

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} maxW="1200px" spacing="20px">
      <Box maxW="708px">
        <Image src={ai2} />
      </Box>
      <Box maxW="700px" pr="40px">
        <Text fontSize={jp ? "xl" : "3xl"}>{t("hp.ai.head")}</Text>
        {jp ? (
          <>
            <Text fontSize="md" style={{ letterSpacing: "1px" }}>
              {t("hp.ai.body")}
            </Text>
            <Text py={3} fontSize="md" style={{ letterSpacing: "1px" }}>
              {t("hp.ai.foot")}
            </Text>
          </>
        ) : (
          <>
            <Heading fontSize="md" className="fw-lighter lh-lg">
              {t("hp.ai.body")}
            </Heading>
            <Heading py={3} fontSize="md" className="fw-lighter lh-lg">
              {t("hp.ai.foot")}
            </Heading>
          </>
        )}
      </Box>
    </SimpleGrid>
  );
};

export default Course;
