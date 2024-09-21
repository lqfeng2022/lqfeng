import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { TFunction } from "i18next";
import pytorch_cover from "../../assets/pytorch_cover.jpeg";
import { Link } from "react-router-dom";

interface Props {
  jp: boolean;
  t: TFunction;
  oneSpace: Object;
}
const Course = ({ jp, t, oneSpace }: Props) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} maxW="1200px" spacing="20px">
      <Box maxW="708px">
        <Link 
          to={ jp 
            ? "https://pytorch-ch.netlify.app/"
            : "https://pytorch-dom.vercel.app/" } 
          target='_blank'
        >
          <Image src={pytorch_cover} />
        </Link>
      </Box>
      <Box maxW="700px" pr="40px">
        <Text fontSize={jp ? "xl" : "3xl"}>{t("hp.ai.head")}</Text>
        {jp ? (
          <>
            <Text fontSize="md" style={oneSpace}>
              {t("hp.ai.body")}
            </Text>
            <Text py={3} fontSize="md" style={oneSpace}>
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
