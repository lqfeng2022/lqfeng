import {
  Box,
  Center,
  Container,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoHeart } from "react-icons/io5";
import { FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Stack>
      <Center pt="80px" pb="10px">
        <Container w="180px" h="50px" bg="gray.600" color="white">
          <Center>
            <Heading textAlign="center" fontSize="sm" px="15px" my="7px">
              Let's Talk About Your Plan
            </Heading>
          </Center>
        </Container>
      </Center>
      <Center pb="10px">
        <Heading my={1} pr={1} fontSize="sm" className="fw-lighter">
          You can also watch my channel in:
        </Heading>
        <Box px={3}>
          <Icon as={FaYoutube} boxSize="20px" color="gray.600" />
        </Box>
        <Icon as={FaTiktok} boxSize="15px" color="gray.600" />
      </Center>
      <Center>
        <Heading as="i" fontSize="sm" className="fw-lighter">
          Here you can choose other languges:
        </Heading>
      </Center>
      <Center>
        <Heading as="i" fontSize="sm" className="fw-lighter">
          <b>Le français / 日本語 / 中文</b>
        </Heading>
      </Center>
      <Center p={5}>
        <Text pr={1} as="i" fontSize="sm">
          Design and Code by LI QIUFENG with
        </Text>
        <Icon as={IoHeart} color="red.400" />
      </Center>
    </Stack>
  );
};

export default Footer;
