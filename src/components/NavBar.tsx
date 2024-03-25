import { HStack, Heading, Icon } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { IoLanguageOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const l = useLocation();
  const links = [
    { name: "W O R K", url: "/" },
    { name: "M E", url: "/about-me" },
    { name: "P R O D U C T", url: "/projects" },
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
      <HStack spacing="25px">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.url}
            className={
              l.pathname === `${link.url}` ? "border-bottom border-dark" : ""
            }
          >
            <Heading fontSize="xs" my="3px" className="fw-lighter">
              {link.name}
            </Heading>
          </Link>
        ))}
        <Icon
          as={IoLanguageOutline}
          boxSize="20px"
          color="gray.600"
          onClick={() => handleLanguage("jp")}
        />
      </HStack>
    </HStack>
  );
};

export default NavBar;
