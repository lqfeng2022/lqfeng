import { HStack, Heading, Text, useColorMode } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const pathname = useLocation().pathname;
  const links = [
    { name: "WORK", url: "/work" },
    { name: "PRODUCT", url: "/product" },
    { name: "ABOUT", url: "/about" },
  ];

  const { colorMode } = useColorMode();
  const lightDarkSwitch = (colorMode === "light")
    ? "border-bottom border-dark" : "border-bottom";

  return (
    <HStack justifyContent="space-between" p="15px" pr="10px">
      <Link to="/">
        <Text hideFrom="md" fontSize="4xl" my="8px" className="fw-lighter">
          楓
        </Text>
        <Heading hideBelow="md" fontSize="2xl" my="8px" className="fw-lighter">
          LI_QIUFENG
        </Heading>
      </Link>
      <HStack spacing="30px" mr={1}>
        {links.map((link) => {
          const isActive = pathname.startsWith(link.url);
          return (
            <Link
              key={link.name}
              to={link.url}
              className={isActive ? lightDarkSwitch : ""}
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
          )
        })}
      </HStack>
    </HStack>
  );
};

export default NavBar;
