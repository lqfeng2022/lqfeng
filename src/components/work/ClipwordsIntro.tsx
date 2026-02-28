import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { TFunction } from "i18next";
import clipwords_hp from "@/assets/clipwords-hp.jpeg";
import { Link } from "react-router-dom";

interface Props {
  jp: boolean;
  t: TFunction;
  oneSpace: Object;
}
const ClipwordsIntro = ({ jp, t, oneSpace }: Props) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} maxW="1200px" spacing="20px">
      <Box maxW="708px">
        <Link 
          to={"https://app.clipwords.me/"} 
          target='_blank'
        >
          <Image 
            src={clipwords_hp} 
            border="0.5px solid"
            borderColor="gray.600"
          />
        </Link>
      </Box>
      <Box maxW="700px" pr="40px">
        <Text fontSize={jp ? "xl" : "3xl"}>
          {t("work.ai.head")}
        </Text>
        {jp ? (
          <>
            <Text fontSize="md" style={oneSpace} className="fw-light">
              {t("work.ai.body")}
            </Text>
            <Text py={3} fontSize="md" style={oneSpace} className="fw-light">
              {t("work.ai.foot")}
            </Text>
          </>
        ) : (
          <>
            <Heading fontSize="md" className="fw-lighter lh-base">
              {t("work.ai.body")}
            </Heading>
            <Heading py={3} fontSize="md" className="fw-lighter lh-base">
              {t("work.ai.foot")}
            </Heading>
          </>
        )}
      </Box>
    </SimpleGrid>
  );
};

export default ClipwordsIntro;
