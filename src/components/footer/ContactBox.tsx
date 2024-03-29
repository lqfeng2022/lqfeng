import { Center, Container, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const ContactBox = () => {
  const [t] = useTranslation("global");

  return (
    <Container w="200px" h="60px" bg="gray.600" color="white">
      <Center>
        <Heading textAlign="center" fontSize="sm" px="15px" my="13px">
          {t("footer.contact")}
        </Heading>
      </Center>
    </Container>
  );
};

export default ContactBox;
