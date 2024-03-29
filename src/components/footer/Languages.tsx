import { Button, Center, Heading, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Languages = ({ jp }: { jp: boolean }) => {
  const [t, i18n] = useTranslation("global");
  const handleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
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
  );
};

export default Languages;
