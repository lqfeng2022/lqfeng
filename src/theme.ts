import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const breakpoints = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const theme = extendTheme({
  breakpoints,
  config,
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Source Serif Pro', sans-serif`,
  },
});

export default theme;
