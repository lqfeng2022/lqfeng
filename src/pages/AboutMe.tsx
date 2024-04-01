import { Center, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Back from "../components/about/Back";
import Introduce from "../components/about/Introduce";
import View from "../components/about/View";

const AboutMe = () => {
  const [t, i18n] = useTranslation("global");
  const jp = i18n.language === "jp";
  const { colorMode } = useColorMode();
  const uline =
    colorMode === "light" ? "border-bottom border-dark" : "border-bottom";
  const oneSpace = { letterSpacing: "1px" };

  return (
    <>
      <Center px="20px" py="35px">
        <Introduce t={t} jp={jp} oneSpace={oneSpace} />
      </Center>
      <Center p="20px">
        <Back t={t} jp={jp} uline={uline} oneSpace={oneSpace} />
      </Center>
      <Center p="20px">
        <View t={t} jp={jp} />
      </Center>
    </>
  );
};

export default AboutMe;
