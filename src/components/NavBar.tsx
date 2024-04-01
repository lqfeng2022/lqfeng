import {
  Button,
  HStack,
  Heading,
  Icon,
  useColorMode,
  Text,
} from "@chakra-ui/react";
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
  const jp = i18n.language === "jp";

  const { colorMode } = useColorMode();
  const lightDarkSwitch =
    colorMode === "light" ? "border-bottom border-dark" : "border-bottom";

  return (
    <HStack justifyContent="space-between" p="20px" pr="10px">
      <Link to="/">
        <Heading hideFrom="md" fontSize="4xl" my="8px" className="fw-lighter">
          <Text as="span" fontSize="xl">
            秋
          </Text>
          楓
        </Heading>
        <Heading hideBelow="md" fontSize="2xl" my="8px" className="fw-lighter">
          LI_QIUFENG
        </Heading>
      </Link>
      <HStack spacing="15px">
        <HStack spacing="25px">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.url}
              className={l.pathname === `${link.url}` ? lightDarkSwitch : ""}
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
        </HStack>
        <Button
          colorScheme="gray"
          variant="link"
          onClick={() => handleLanguage(jp ? "en" : "jp")}
        >
          <Icon as={HiLanguage} boxSize="20px" />
        </Button>
      </HStack>
    </HStack>
  );
};

export default NavBar;
