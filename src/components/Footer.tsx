import {
  Center,
  Container,
  Heading,
  HStack,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";

const Footer = () => {
  return (
    <Stack>
      <Center pt="80px" pb="10px">
        <Container w="200px" h="50px" bg="gray.600" color="white">
          <Center>
            <Heading textAlign="center" fontSize="sm" px="15px" my="7px">
              Let's Talk About Your Plan : )
            </Heading>
          </Center>
        </Container>
      </Center>
      <Center>
        <Heading my={1} pr={1} fontSize="sm" className="fw-lighter">
          You can also watch my channel in:
        </Heading>
        <HStack spacing="15px" pl="10px">
          <Icon as={FaYoutube} boxSize="20px" color="gray.600" />
          <Icon as={FaTiktok} boxSize="20px" color="gray.600" />
        </HStack>
      </Center>
      <Center p={3}>
        <Heading pr={1} as="i" fontSize="sm" className="fw-lighter">
          Code and Share by LI QIUFENG with
        </Heading>
        <Icon as={IoHeart} color="red.400" />
      </Center>
    </Stack>
  );
};

export default Footer;
