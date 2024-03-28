import { Box, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
  const error = useRouteError();
  const [t, i18n] = useTranslation("global");
  const jp = i18n.language === "jp";

  return (
    <>
      <NavBar />
      <Box p="20px" py={5}>
        <Text fontSize="xl" paddingBottom={5} style={{ letterSpacing: "1px" }}>
          {jp ? "困ったなあ。。" : "Oops"}
        </Text>
        {jp ? (
          <Text as="i" fontSize="xl">
            {isRouteErrorResponse(error)
              ? "すいません、このページがございませんでした。"
              : "ごめんごめん、予定しないエラーが起こりました。"}
          </Text>
        ) : (
          <Text as="i" fontSize="2xl">
            {isRouteErrorResponse(error)
              ? "This page does not exist."
              : "An unexpected error occured.."}
          </Text>
        )}
      </Box>
    </>
  );
};

export default ErrorPage;
