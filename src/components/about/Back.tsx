import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import book from "../../assets/book.jpg";

const Back = ({ jp }: { jp: boolean }) => {
  const [t] = useTranslation("global");

  return (
    <SimpleGrid columns={[1, null, 2]} maxW="1000px" spacing="40px">
      <Box>
        <Image src={book} />
      </Box>
      <Box>
        <Text fontSize="xl" className="fst-italic">
          {t("simon.educ.quest")}
        </Text>
        {jp ? (
          <Text fontSize="md" style={{ letterSpacing: "1px" }}>
            {t("simon.educ.answ")}
          </Text>
        ) : (
          <Heading fontSize="md" className="fw-lighter lh-lg">
            {t("simon.educ.answ")}
          </Heading>
        )}
        <Box paddingTop={4} my={5} className="border-bottom border-dark" />
        <Text fontSize="xl" pt={3} className="fst-italic">
          {t("simon.career.quest")}
        </Text>
        {jp ? (
          <Text fontSize="md" style={{ letterSpacing: "1px" }}>
            {t("simon.career.answ")}
          </Text>
        ) : (
          <Heading fontSize="md" className="fw-lighter lh-lg">
            {t("simon.career.answ")}
          </Heading>
        )}
      </Box>
    </SimpleGrid>
  );
};

export default Back;
