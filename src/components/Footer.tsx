import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  const jp = i18n.language === "jp";
  const handleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Stack>
      {/* 1)contact box */}
      <Center pt="80px" pb="10px">
        <Container w="200px" h="60px" bg="gray.600" color="white">
          <Center>
            <Heading textAlign="center" fontSize="sm" px="15px" my="11px">
              {t("footer.contact")}
            </Heading>
          </Center>
        </Container>
      </Center>
      {/* 2)social media */}
      <Center px="20px" py="6px">
        <Stack>
          {jp ? (
            <Text textAlign="center" my={1} pr={1} fontSize="sm">
              {t("footer.channels")}
            </Text>
          ) : (
            <Heading
              textAlign="center"
              my={1}
              pr={1}
              fontSize="sm"
              className="fw-lighter"
            >
              {t("footer.channels")}
            </Heading>
          )}
          <Center>
            <HStack spacing="15px" pl="10px">
              <Icon as={FaYoutube} boxSize="20px" color="gray.600" />
              <Icon as={FaTiktok} boxSize="20px" color="gray.600" />
            </HStack>
          </Center>
        </Stack>
      </Center>
      {/* 3)languages switch */}
      <Center p="6px">
        <Stack>
          <Center>
            {jp ? (
              <Text as="i" fontSize="sm">
                {t("footer.languages")}
              </Text>
            ) : (
              <Heading as="i" fontSize="sm" className="fw-lighter">
                {t("footer.languages")}
              </Heading>
            )}
          </Center>
          <Center>
            <Button variant="link" onClick={() => handleLanguage("en")}>
              <Heading as="i" fontSize="sm" pr={1}>
                English
              </Heading>
            </Button>
            <Text as="i" fontSize="sm">
              /
            </Text>
            <Button variant="link" onClick={() => handleLanguage("jp")}>
              <Text as="i" pr={1} fontSize="sm" pl={1}>
                日本語
              </Text>
            </Button>
          </Center>
        </Stack>
      </Center>
      {/* 4)hp introduce.. */}
      <Center px="20px" py="6px">
        <Box maxW="600px">
          <Center>
            {jp ? (
              <Text textAlign="center" as="i" fontSize="sm">
                {t("footer.intro")}
              </Text>
            ) : (
              <Heading
                textAlign="center"
                as="i"
                fontSize="sm"
                className="fw-lighter"
              >
                {t("footer.intro")}
              </Heading>
            )}
          </Center>
        </Box>
      </Center>
      {/* 5)copyright */}
      <Center px="20px" pt="6px" pb="10px">
        {jp ? (
          <Text textAlign="center" as="i" fontSize="sm">
            {t("footer.copyright")}
            <Icon boxSize="18px" mb="3px" as={IoHeart} color="red.400" />
          </Text>
        ) : (
          <Heading
            textAlign="center"
            pr={1}
            as="i"
            fontSize="sm"
            className="fw-lighter"
          >
            {t("footer.copyright")}
            <Icon boxSize="18px" mb="3px" as={IoHeart} color="red.400" />
          </Heading>
        )}
      </Center>
    </Stack>
  );
};

export default Footer;
