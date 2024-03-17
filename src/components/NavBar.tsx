import { HStack, Heading, Icon } from "@chakra-ui/react";
import { HiLanguage } from "react-icons/hi2";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Heading fontSize="2xl" marginY="8px">
        LI QIUFENG
      </Heading>
      <HStack>
        <a className="border-bottom border-dark">
          <Heading fontSize="xs" marginY="5px" className="fw-lighter">
            W O R K
          </Heading>
        </a>
        <Heading
          fontSize="xs"
          marginY="5px"
          paddingLeft="18px"
          className="fw-lighter"
        >
          P R O D U C T
        </Heading>
        <Heading
          fontSize="xs"
          marginY="5px"
          paddingX="18px"
          className="fw-lighter"
        >
          M E
        </Heading>
        <Icon as={HiLanguage} boxSize="20px" color="gray.600" />
      </HStack>
    </HStack>
  );
};

export default NavBar;
