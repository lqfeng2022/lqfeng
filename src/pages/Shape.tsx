import { Center, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Back from "../components/shape/Back";
import Introduce from "../components/shape/Introduce";
import View from "../components/shape/View";

const Shape = () => {
  const [t, i18n] = useTranslation("global");
  const jp = i18n.language === "jp";
  const { colorMode } = useColorMode();
  const uline =
    colorMode === "light" ? "border-bottom border-dark" : "border-bottom";
  const oneSpace = { letterSpacing: "1px" };

  return (
    <>
      <Center px="15px" py="35px">
        <Introduce t={t} jp={jp} oneSpace={oneSpace} />
      </Center>
      <Center p="15px">
        <Back t={t} jp={jp} uline={uline} oneSpace={oneSpace} />
      </Center>
      <Center p="15px">
        <View t={t} jp={jp} />
      </Center>
    </>
  );
};

export default Shape;
