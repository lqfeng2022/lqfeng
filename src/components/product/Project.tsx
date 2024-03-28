import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import project from "../../assets/project.jpeg";
import { useTranslation } from "react-i18next";

const Project = () => {
  const [t, i18n] = useTranslation("global");
  const jp = i18n.language === "jp";
  const oneSpace = { letterSpacing: "1px" };

  return (
    <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
      <Box maxW="700px">
        <Image src={project} />
      </Box>
      <Box maxW="700px" pr="40px">
        <Text fontSize={jp ? "2xl" : "3xl"}>{t("product.app.head")}</Text>
        <Text fontSize={jp ? "sm" : "xl"} style={jp ? oneSpace : {}}>
          {t("product.app.body")}
        </Text>
        {jp ? (
          <Text py={3} fontSize="sm" style={oneSpace}>
            {t("product.app.foot")}
          </Text>
        ) : (
          <Heading py={3} fontSize="md" className="fw-lighter lh-lg">
            {t("product.app.foot")}
          </Heading>
        )}
        {jp ? (
          <Text pt="50px" fontSize="sm" style={oneSpace}>
            {t("product.app.toe")}
          </Text>
        ) : (
          <Heading pt="50px" fontSize="sm">
            {t("product.app.toe")}
          </Heading>
        )}
      </Box>
    </SimpleGrid>
  );
};

export default Project;
