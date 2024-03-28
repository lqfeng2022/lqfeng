import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import ai2 from "../../assets/ai2.jpeg";
import { useTranslation } from "react-i18next";

const Course = () => {
  const [t, i18n] = useTranslation("global");
  const jp = i18n.language === "jp";

  return (
    <Center>
      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        maxW="1200px"
        p="20px"
        spacing="20px"
      >
        <Box maxW="708px">
          <Image src={ai2} />
        </Box>
        <Flex>
          <Box maxW="500px">
            {!jp && <Text fontSize="3xl">{t("hp.ai.head")}</Text>}
            {jp && (
              <Text fontSize="xl" className="fst-italic">
                {t("hp.ai.head")}
              </Text>
            )}
            {!jp && (
              <Heading fontSize="md" className="fw-lighter lh-lg">
                {t("hp.ai.body")}
              </Heading>
            )}
            {jp && (
              <Text fontSize="md" style={{ letterSpacing: "1px" }}>
                {t("hp.ai.body")}
              </Text>
            )}
            {!jp && (
              <Heading py={3} fontSize="md" className="fw-lighter lh-lg">
                {t("hp.ai.foot")}
              </Heading>
            )}
            {jp && (
              <Text py={3} fontSize="md" style={{ letterSpacing: "1px" }}>
                {t("hp.ai.foot")}
              </Text>
            )}
          </Box>
          <Box hideBelow="md" w="5px" pr="30px" />
        </Flex>
      </SimpleGrid>
    </Center>
  );
};

export default Course;
