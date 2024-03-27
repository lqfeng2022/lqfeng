import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import project from "../../assets/project.jpeg";
import { useTranslation } from "react-i18next";

const Project = () => {
  const [t, i18n] = useTranslation("global");
  const jp = i18n.language === "jp";

  return (
    <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
      <Box maxW="700px">
        <Image src={project} />
      </Box>
      <Box maxW="700px" pr="40px">
        {!jp && <Text fontSize="3xl">{t("product.app.head")}</Text>}
        {jp && <Text fontSize="xl">{t("product.app.head")}</Text>}
        <Text fontSize="lg" style={{ letterSpacing: "1px" }}>
          {t("product.app.body")}
        </Text>
        {!jp && (
          <Heading py={3} fontSize="md" className="fw-lighter lh-lg">
            {t("product.app.foot")}
          </Heading>
        )}
        {jp && (
          <Text py={3} fontSize="md" style={{ letterSpacing: "1px" }}>
            {t("product.app.foot")}
          </Text>
        )}
        {!jp && (
          <Heading pt="50px" fontSize="sm">
            {t("product.app.toe")}
          </Heading>
        )}
        {jp && (
          <Text pt="50px" fontSize="md" style={{ letterSpacing: "1px" }}>
            {t("product.app.toe")}
          </Text>
        )}
      </Box>
    </SimpleGrid>
  );
};

export default Project;
