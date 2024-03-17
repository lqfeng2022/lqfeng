import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FaTiktok, FaYoutube } from "react-icons/fa";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" paddingX="30px" paddingY={5}>
      <Text fontSize="2xl" marginY="8px">
        LI QIUFENG
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
          <Icon as={FaTiktok} boxSize="15px" color="gray.600" />
        </Box>
        <Icon as={FaYoutube} boxSize="20px" color="gray.600" />
      </HStack>
    </HStack>
  );
};

export default NavBar;
