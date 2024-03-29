import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaQuoteLeft } from "react-icons/fa";
import quotation from "../../assets/quotation.jpeg";

const View = ({ jp }: { jp: boolean }) => {
  const [t, i18n] = useTranslation("global");

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
  );
};

export default View;
