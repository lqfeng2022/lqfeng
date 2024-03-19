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
    <>
      <Center pt="100px">
        <Container w="180px" h="50px" bg="gray.600" color="white">
          <Center>
            <Heading
              textAlign="center"
              fontSize="sm"
              paddingX="15px"
              marginY="6px"
            >
              Let's Talk About Your Project
            </Heading>
          </Center>
        </Container>
      </Center>
      <Center py="50px" pb="20px">
        <Heading
          marginY={1}
          paddingRight={1}
          fontSize="sm"
          className="fw-lighter"
        >
          Or you can watch my channel:
        </Heading>
        <Box paddingX={4}>
          <Icon as={FaYoutube} boxSize="20px" color="red.500" />
        </Box>
        <Icon as={FaTiktok} boxSize="15px" color="gray.600" />
      </Center>
      <Stack>
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
      </Stack>
      <Center padding={5}>
        <Text paddingRight={1} as="i" fontSize="sm">
          Design and Code by LI QIUFENG with Love &
        </Text>
        <Icon as={IoHeart} color="red.400" />
      </Center>
    </>
  );
};

export default Footer;
