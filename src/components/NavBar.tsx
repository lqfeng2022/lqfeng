import { HStack, Heading, Icon } from "@chakra-ui/react";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const l = useLocation();
  const links = [
    { name: "WORK", url: "/" },
    { name: "PRODUCT", url: "/product" },
    { name: "ME", url: "/about-me" },
  ];

  return (
    <HStack justifyContent="space-between" p="20px">
      <Link to="/">
        <Heading
          display={{ base: "flex", md: "none" }}
          fontSize="4xl"
          className="fw-lighter"
        >
          楓
        </Heading>
        <Heading
          display={{ base: "none", md: "flex" }}
          fontSize="2xl"
          my="8px"
          className="fw-lighter"
        >
          LI QIUFENG
        </Heading>
      </Link>
      <HStack spacing="22px">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.url}
            className={
              l.pathname === `${link.url}` ? "border-bottom border-dark" : ""
            }
          >
            <Heading
              fontSize="xs"
              my="3px"
              className="fw-lighter"
              style={{ letterSpacing: "1px" }}
            >
              {link.name}
            </Heading>
          </Link>
        ))}
        <Icon as={FaYoutube} boxSize="18px" color="gray.600" />
        <Icon as={FaTiktok} boxSize="18px" color="gray.600" />
      </HStack>
    </HStack>
  );
};

export default NavBar;
