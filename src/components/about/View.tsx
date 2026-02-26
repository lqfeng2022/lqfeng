import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { TFunction } from "i18next";
import book from "../../assets/book.jpg";

const View = ({ t, jp }: { t: TFunction; jp: boolean }) => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2 }} maxW="1000px" spacing="40px">
      {/* <Center> */}
        <Box maxW="450px">
          <Text as="i" fontSize="xl">
            {t("simon.view.question")}
          </Text>
          <Text my="10px" fontSize="md">
            {t("simon.view.answ.list-one")}
          </Text>
          <Text mb="10px" fontSize="md">
            {t("simon.view.answ.list-two")}
          </Text>
          <Text mb="10px" fontSize="md">
            {t("simon.view.answ.list-three")}
          </Text>
          <Text mb="10px" fontSize="md">
            {t("simon.view.answ.list-four")}
          </Text>
        </Box>
      {/* </Center> */}
      <Box maxW="450px">
        <Image src={book} />
      </Box>
    </SimpleGrid>
  );
};

export default View;
