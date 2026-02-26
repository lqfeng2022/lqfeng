import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "@fontsource/open-sans";
import "@fontsource/source-serif-pro/300.css";
import "bootstrap/dist/css/bootstrap.css";
import i18next from "i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes";
import theme from "./theme";
import global_en from "./translations/en/global_en.json";
import global_jp from "./translations/jp/global_jp.json";

// `localStorage` is a built-in browser storage system
const getDefaultLanguage = () => {
  // If user manually selected before → use it
  const savedLang = localStorage.getItem("lang");
  if (savedLang) return savedLang;
  
  // Detect browser language
  const languages = navigator.languages || [navigator.language];
  
  const hasChinese = languages.some((lang) =>
    lang.toLowerCase().startsWith("zh")
  );

  // If Chinese → use jp
  return hasChinese ? "jp" : "en";
};

i18next.init({
  interpolation: { escapeValue: false },
  lng: getDefaultLanguage(),
  fallbackLng: "en",
  resources: {
    en: {
      global: global_en,
    },
    jp: {
      global: global_jp,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <I18nextProvider i18n={i18next}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
