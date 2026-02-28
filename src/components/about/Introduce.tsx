import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import simon from "@/assets/simon.jpeg";
import { TFunction } from "i18next";

interface Props {
  t: TFunction;
  jp: boolean;
  oneSpace: Object;
}
const Introduce = ({ t, jp, oneSpace }: Props) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} maxW="1000px" spacing="40px">
      <Box>
        <Image src={simon} />
        <Box hideBelow="md" h="50px" />
      </Box>
      <Box>
        <Box hideBelow="md" h="100px" />
        {jp ? (
          <Text fontSize="md">
            {t("simon.intro.head")}
          </Text>
        ) : (
          <Heading 
            fontSize="md" 
            className="fw-lighter" 
            style={oneSpace}
          >
            {t("simon.intro.head")}
          </Heading>
        )}
        <Text 
          pt={6} 
          fontSize={jp ? "md" : "2xl"} 
          style={jp ? oneSpace : {}} 
          className="fw-light"
        >
          {t("simon.intro.body")}
        </Text>
      </Box>
    </SimpleGrid>
  );
};

export default Introduce;
