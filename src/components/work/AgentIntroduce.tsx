import { Box, Heading, Text } from "@chakra-ui/react";
import { TFunction } from "i18next";

interface Props {
  jp: boolean;
  t: TFunction;
  oneSpace: Object;
}
const AgentIntroduce = ({ jp, t, oneSpace }: Props) => {
  return (
    <>
      <Heading fontSize="sm" pb={5} style={oneSpace}>
        {t("hp.intro.head")}
      </Heading>
      <Text fontSize={jp ? "lg" : "2xl"} style={oneSpace}>
        {t("hp.intro.body")}
      </Text>
      <Box hideFrom="md" h="30px" />
    </>
  );
};

export default AgentIntroduce;
