import { HStack, Heading, Icon } from "@chakra-ui/react";
import { HiLanguage } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const l = useLocation();
  const links = [
    { id: 0, name: "W O R K", url: "/product" },
    { id: 1, name: "M E", url: "/about-me" },
  ];

  return (
    <HStack justifyContent="space-between" px="30px" py="20px">
      <Link to="/">
        <Heading fontSize="2xl" my="8px" className="fw-lighter">
          LI QIUFENG
        </Heading>
      </Link>
      <HStack spacing="25px">
        {links.map((link) => (
          <Link
            key={link.id}
            to={link.url}
            className={
              l.pathname === `${link.url}` ? "border-bottom border-dark" : ""
            }
          >
            <Heading fontSize="sm" my="3px" className="fw-lighter">
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
