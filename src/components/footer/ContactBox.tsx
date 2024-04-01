import { Center, Container, Heading, Link } from "@chakra-ui/react";
import { TFunction } from "i18next";

const ContactBox = ({ t }: { t: TFunction }) => {
  return (
    <Container w="200px" h="60px" bg="gray.600" color="white">
      <Center>
        <Link href="mailto: makinohuu@gmail.com">
          <Heading textAlign="center" fontSize="sm" px="15px" my="13px">
            {t("footer.contact")}
          </Heading>
        </Link>
      </Center>
    </Container>
  );
};

export default ContactBox;
