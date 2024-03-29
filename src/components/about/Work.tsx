import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import ai from "../../assets/ai.jpeg";

const Work = ({ jp }: { jp: boolean }) => {
  const [t] = useTranslation("global");

  return (
    <Stack>
      <SimpleGrid columns={[1, null, 2]} maxW="1000px" spacing="40px">
        <Box maxW="500px">
          <Text fontSize="xl" className="fst-italic">
            {t("simon.job.quest")}
          </Text>
          {jp ? (
            <Text fontSize="md" style={{ letterSpacing: "1px" }}>
              {t("simon.job.answ")}
            </Text>
          ) : (
            <Heading fontSize="md" className="fw-lighter lh-lg">
              {t("simon.job.answ")}
            </Heading>
          )}
        </Box>
      </SimpleGrid>
      <Box maxW="1000px">
        <Image src={ai} />
      </Box>
    </Stack>
  );
};

export default Work;
