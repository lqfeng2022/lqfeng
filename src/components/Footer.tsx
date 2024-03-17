import { Box, Center, Container, Heading, Icon, Text } from "@chakra-ui/react";
import { IoHeart } from "react-icons/io5";
import { FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Center paddingY="50px">
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
      <Center paddingBottom={5}>
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
      <Center paddingBottom={5}>
        <Heading as="i" paddingRight={1} fontSize="sm" className="fw-lighter">
          Here you can choose other languges: 日本語 / 中文 / Le français
        </Heading>
      </Center>
      <Center paddingBottom={5}>
        <Text paddingRight={1} as="i" fontSize="sm">
          Design and Code by LI QIUFENG with Love &
        </Text>
        <Icon as={IoHeart} color="red.400" />
      </Center>
    </>
  );
};

export default Footer;
