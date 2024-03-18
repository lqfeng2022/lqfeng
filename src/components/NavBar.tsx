import { HStack, Heading, Icon } from "@chakra-ui/react";
import { HiLanguage } from "react-icons/hi2";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link to="/">
        <Heading fontSize="2xl" marginY="8px">
          LI QIUFENG
        </Heading>
      </Link>
      <HStack spacing="25px">
        <Link className="border-bottom border-dark" to="/">
          <Heading fontSize="xs" marginY="5px" className="fw-lighter">
            W O R K
          </Heading>
        </Link>
        <Link to="product">
          <Heading fontSize="xs" marginY="5px" className="fw-lighter">
            P R O D U C T
          </Heading>
        </Link>
        <Link to="about-me">
          <Heading fontSize="xs" marginY="5px" className="fw-lighter">
            M E
          </Heading>
        </Link>
        <Icon as={HiLanguage} boxSize="20px" color="gray.600" />
      </HStack>
    </HStack>
  );
};

export default NavBar;
