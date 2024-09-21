import { Button, Center, Heading, Stack, Text } from "@chakra-ui/react";
import { TFunction } from "i18next";

interface Props {
  t: TFunction;
  jp: boolean;
  handleLanguage: (lang: string) => void;
}
const Languages = ({ t, jp, handleLanguage }: Props) => {
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
            中文
          </Text>
        </Button>
      </Center>
    </Stack>
  );
};

export default Languages;
