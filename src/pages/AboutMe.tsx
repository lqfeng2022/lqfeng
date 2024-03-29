import { Center } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Back from "../components/about/Back";
import Introduce from "../components/about/Introduce";
import View from "../components/about/view";
import Work from "../components/about/Work";

const AboutMe = () => {
  const [t, i18n] = useTranslation("global");
  const jp = i18n.language === "jp";

  return (
    <>
      <Center px="20px" py="35px">
        <Introduce jp={jp} />
      </Center>
      <Center p="20px" pt="0">
        <Work jp={jp} />
      </Center>
      <Center p="20px">
        <Back jp={jp} />
      </Center>
      <Center p="20px">
        <View jp={jp} />
      </Center>
    </>
  );
};

export default AboutMe;
