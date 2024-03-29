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
  const jp = i18n.language === "jp";

  return (
    <Stack>
      <Center pt="50px" pb="10px">
        <ContactBox />
      </Center>
      <Center px="20px" py="6px">
        <Channels jp={jp} />
      </Center>
      <Center p="6px">
        <Languages jp={jp} />
      </Center>
      <Center px="20px" py="6px">
        <WebIntroduce jp={jp} />
      </Center>
      <Center px="20px" pt="6px" pb="10px">
        <ToggleColorMode jp={jp} />
      </Center>
      <Center px="20px" pt="6px" pb="10px">
        <CopyRight jp={jp} />
      </Center>
    </Stack>
  );
};

export default Footer;
