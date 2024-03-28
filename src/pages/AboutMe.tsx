import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";
import ai from "../assets/ai.jpeg";
import book from "../assets/book.jpg";
import simon from "../assets/lqfeng.jpeg";
import quotation from "../assets/quotation.jpeg";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const [t, i18n] = useTranslation("global");
  const jp = i18n.language === "jp";

  return (
    <>
      {/* 1)Introduce myself */}
      <Center px="20px" py="35px">
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
      </Center>
      {/* 2)What's my work */}
      <Center p="20px" pt="0">
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
      </Center>
      {/* 3)My education background and career */}
      <Center p="20px">
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
      </Center>
      {/* 4)Who are you through others' eyes */}
      <Center p="20px">
        <SimpleGrid columns={{ base: 1, sm: 2 }} maxW="1000px" spacing="40px">
          <Center>
            <Box maxW="450px">
              <Text
                mb="10px"
                fontSize={jp ? "md" : "xl"}
                className={jp ? "" : "lh-md"}
                style={jp ? { letterSpacing: "1px" } : {}}
              >
                <Icon boxSize="25px" as={FaQuoteLeft} pr={2} pb={3} />
                {t("simon.view")}
              </Text>
              <Flex>
                <Heading fontSize="sm">SIMON </Heading>
                <Heading fontSize="sm" className="fw-lighter">
                  - CE0 @ 5Visual1Feel
                </Heading>
              </Flex>
            </Box>
          </Center>
          <Box maxW="450px">
            <Image src={quotation} />
          </Box>
        </SimpleGrid>
      </Center>
    </>
  );
};

export default AboutMe;
