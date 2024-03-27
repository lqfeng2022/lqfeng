import { HStack, Heading, Icon, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { HiLanguage } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const l = useLocation();
  const links = [
    { name: "WORK", url: "/" },
    { name: "PRODUCT", url: "/product" },
    { name: "ME", url: "/about-me" },
  ];

  const [t, i18n] = useTranslation("global");
  const handleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <HStack justifyContent="space-between" p="20px">
      <Link to="/">
        <Heading
          display={{ base: "flex", md: "none" }}
          fontSize="4xl"
          className="fw-lighter"
        >
          楓<Text fontSize="sm">.STUDIO</Text>
        </Heading>
        <Heading
          display={{ base: "none", md: "flex" }}
          fontSize="2xl"
          my="8px"
          className="fw-lighter"
        >
          LI_QIUFENG<Text fontSize="sm">.STUDIO</Text>
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
        <Icon
          as={HiLanguage}
          boxSize="18px"
          color="gray.600"
          onClick={() => handleLanguage("jp")}
        />
      </HStack>
    </HStack>
  );
};

export default NavBar;
