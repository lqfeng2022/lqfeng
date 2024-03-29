import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import simon from "../../assets/lqfeng.jpeg";
import { useTranslation } from "react-i18next";

const Introduce = ({ jp }: { jp: boolean }) => {
  const [t] = useTranslation("global");

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} maxW="1000px" spacing="40px">
      <Box>
        <Image src={simon} />
        <Box hideBelow="md" h="100px" />
      </Box>
      <Box>
        <Box hideBelow="md" h="180px" />
        {jp ? (
          <Text fontSize="md">{t("simon.intro.head")}</Text>
        ) : (
          <Heading fontSize="md" style={{ letterSpacing: "1px" }}>
            {t("simon.intro.head")}
          </Heading>
        )}
        <Text
          pt={6}
          fontSize={jp ? "md" : "2xl"}
          style={jp ? { letterSpacing: "1px" } : {}}
        >
          {t("simon.intro.body")}
        </Text>
      </Box>
    </SimpleGrid>
  );
};

export default Introduce;
