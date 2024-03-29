import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const WebIntroduce = ({ jp }: { jp: boolean }) => {
  const [t] = useTranslation("global");

  return (
    <Box maxW="500px">
      <Center>
        {jp ? (
          <Text textAlign="center" as="i" fontSize="sm">
            {t("footer.intro")}
          </Text>
        ) : (
          <Heading
            as="i"
            textAlign="center"
            fontSize="sm"
            className="fw-lighter"
          >
            {t("footer.intro")}
          </Heading>
        )}
      </Center>
    </Box>
  );
};

export default WebIntroduce;
