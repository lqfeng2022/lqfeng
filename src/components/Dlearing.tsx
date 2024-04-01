import { Box, Heading, Image, Text, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import dlearing from "../assets/dlearing.jpeg";

const Dlearning = () => {
  const [t, i18n] = useTranslation("global");
  const jp = i18n.language === "jp";

  const { colorMode } = useColorMode();
  const lightDarkSwitch =
    colorMode === "light" ? "border-bottom border-dark" : "border-bottom";
  const hover = {
    transform: "scale(1.02)",
    transition: "transform .15s ease-in",
  };

  return (
    <Box p="20px" pb={10} maxW="1200px">
      <Box _hover={hover}>
        <Link to="/work/dlearing">
          <Image src={dlearing} />
        </Link>
      </Box>
      <Heading fontSize="sm" my="10px">
        <Link
          to="/work/dlearing"
          className={lightDarkSwitch}
          style={{ letterSpacing: "1px" }}
        >
          {t("hp.dlearn.head")}
        </Link>
      </Heading>
      {jp ? (
        <Text fontSize="sm" className="fst-italic">
          {t("hp.dlearn.body")}
        </Text>
      ) : (
        <Heading fontSize="sm" className="fw-lighter fst-italic">
          {t("hp.dlearn.body")}
        </Heading>
      )}
    </Box>
  );
};

export default Dlearning;
