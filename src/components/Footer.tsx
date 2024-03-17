import { Center, Container, Icon, Text } from "@chakra-ui/react";
import { IoHeart } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <Center paddingY={10}>
        <Container w="180px" h="50px" bg="gray.600" color="white">
          <Center>
            <Text
              as="b"
              textAlign="center"
              fontSize="sm"
              paddingX="15px"
              paddingY={1}
            >
              Let's Talk About Your Project
            </Text>
          </Center>
        </Container>
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
