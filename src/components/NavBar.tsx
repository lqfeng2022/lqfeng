import { HStack, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding={5}>
      <Text fontSize="2xl" marginY="8px">LI QIUFENG</Text>
      <HStack>
        <Text marginY="8px">WORK</Text>
        <Text marginY="8px" paddingX="16px">
          PROJECT
        </Text>
        <Text marginY="8px">ME</Text>
      </HStack>
    </HStack>
  );
};

export default NavBar;
