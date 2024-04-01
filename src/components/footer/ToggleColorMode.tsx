import { Heading, Icon, Text, useColorMode } from "@chakra-ui/react";
import { TFunction } from "i18next";
import { FiMoon, FiSun } from "react-icons/fi";

const ToggleColorMode = ({ t, jp }: { t: TFunction; jp: boolean }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {jp ? (
        <Text textAlign="center" pr={3} as="i" fontSize="sm">
          {t("footer.colormode")}
        </Text>
      ) : (
        <Heading
          textAlign="center"
          pr={3}
          as="i"
          fontSize="sm"
          className="fw-lighter"
        >
          {t("footer.colormode")}
        </Heading>
      )}
      <Icon
        boxSize="25px"
        color="gray.600"
        as={colorMode == "light" ? FiMoon : FiSun}
        onClick={toggleColorMode}
      />
    </>
  );
};

export default ToggleColorMode;
