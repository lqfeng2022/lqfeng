import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { TFunction } from "i18next";

const WebIntroduce = ({ t, jp }: { t: TFunction; jp: boolean }) => {
  return (
    <Box maxW="600px">
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
