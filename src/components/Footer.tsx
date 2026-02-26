import { Center, Stack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Channels from "./footer/Channels";
import ContactBox from "./footer/ContactBox";
import CopyRight from "./footer/CopyRight";
import Languages from "./footer/Languages";
import ToggleColorMode from "./footer/ToggleColorMode";
import WebIntroduce from "./footer/WebIntroduce";

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  const jp = i18n.language.startsWith("jp");
  const handleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <Stack>
      <Center pt="50px" pb="10px">
        <ContactBox t={t} />
      </Center>
      <Center px="10px" py="6px">
        <Channels t={t} jp={jp} />
      </Center>
      <Center p="6px">
        <Languages t={t} jp={jp} handleLanguage={handleLanguage} />
      </Center>
      <Center px="10px" py="6px">
        <WebIntroduce t={t} jp={jp} />
      </Center>
      <Center px="10px" pt="6px" pb="10px">
        <ToggleColorMode t={t} jp={jp} />
      </Center>
      <Center px="10px" pt="6px" pb="10px">
        <CopyRight t={t} jp={jp} />
      </Center>
    </Stack>
  );
};

export default Footer;
