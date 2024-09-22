import {
  Box,
  Center,
  Icon,
  Image,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import { TFunction } from "i18next";
import { FaQuoteLeft } from "react-icons/fa";
import book from "../../assets/book.jpg";

const View = ({ t, jp }: { t: TFunction; jp: boolean }) => {
  return (
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
        </Box>
      </Center>
      <Box maxW="450px">
        <Image src={book} />
      </Box>
    </SimpleGrid>
  );
};

export default View;
