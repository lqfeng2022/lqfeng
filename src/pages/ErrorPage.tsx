import { Box, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box paddingX="10px" paddingY="25px">
        <Text fontSize="xl" paddingBottom={5} style={{ letterSpacing: "1px" }}>
          Oops
        </Text>
        <Text as="i" fontSize="2xl">
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occured.."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;