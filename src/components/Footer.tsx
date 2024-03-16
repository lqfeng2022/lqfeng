import { Center, Icon, Text } from "@chakra-ui/react";
import { IoHeart } from "react-icons/io5";

const Footer = () => {
  return (
    <Center paddingY={10}>
      <Text paddingRight={1} as="i" fontSize="sm">
        Design and code by SIMON Lee with love and
      </Text>
      <Icon as={IoHeart} color="red.400" />
    </Center>
  );
};

export default Footer;
