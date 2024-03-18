import { HStack, Heading, Icon } from "@chakra-ui/react";
import { HiLanguage } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const links = [
    { id: 0, name: "W O R K", url: "/" },
    { id: 1, name: "P R O D U C T", url: "/product" },
    { id: 2, name: "M E", url: "/about-me" },
  ];

  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link to="/">
        <Heading fontSize="2xl" marginY="8px">
          LI QIUFENG
        </Heading>
      </Link>
      <HStack spacing="25px">
        {links.map((link) => (
          <Link
            className={
              location.pathname === `${link.url}`
                ? "border-bottom border-dark"
                : ""
            }
            to={link.url}
          >
            <Heading fontSize="xs" marginY="5px" className="fw-lighter">
              {link.name}
            </Heading>
          </Link>
        ))}
        <Icon as={HiLanguage} boxSize="20px" color="gray.600" />
      </HStack>
    </HStack>
  );
};

export default NavBar;
