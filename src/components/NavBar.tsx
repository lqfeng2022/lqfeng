import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" paddingX={8} paddingY={5}>
      <Text fontSize="2xl" marginY="8px">
        SIMON LEE
      </Text>
      <HStack>
        <Text fontSize="sm" marginY="8px">
          WORK
        </Text>
        <Text fontSize="sm" marginY="8px" paddingX="10px">
          RPOJECT
        </Text>
        <Text fontSize="sm" marginY="8px" paddingRight="10px">
          ABOUT
        </Text>
        <Box paddingRight="10px">
          <Icon as={FaYoutube} boxSize="20px" color="red.500" />
        </Box>
        <Icon as={FaTiktok} boxSize="15px" />
      </HStack>
    </HStack>
  );
};

export default NavBar;
