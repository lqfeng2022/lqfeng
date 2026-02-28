import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { TFunction } from "i18next";
import shape from "@/assets/scientific-mind.jpg";

interface Props {
  t: TFunction;
  jp: boolean;
  uline: string;
  oneSpace: Object;
}
const BackStory = ({ t, jp, uline, oneSpace }: Props) => {
  return (
    <SimpleGrid columns={[1, null, 2]} maxW="1000px" spacing="40px">
      <Box>
        <Image src={shape} />
      </Box>
      <Box>
        <Text fontSize="xl" className="fst-italic">
          {t("simon.educ.quest")}
        </Text>
        {jp ? (
          <Text fontSize="md" style={oneSpace} className="fw-light">
            {t("simon.educ.answ")}
          </Text>
        ) : (
          <Heading fontSize="md" className="fw-lighter lh-base">
            {t("simon.educ.answ")}
          </Heading>
        )}
        <Box paddingTop={4} my={5} className={uline} />
        <Text fontSize="xl" pt={3} className="fst-italic">
          {t("simon.career.quest")}
        </Text>
        {jp ? (
          <Text fontSize="md" style={oneSpace} className="fw-light">
            {t("simon.career.answ")}
          </Text>
        ) : (
          <Heading fontSize="md" className="fw-lighter lh-base">
            {t("simon.career.answ")}
          </Heading>
        )}
      </Box>
    </SimpleGrid>
  );
};

export default BackStory;
