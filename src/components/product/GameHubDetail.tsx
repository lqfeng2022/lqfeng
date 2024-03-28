import { Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const GameHubDetail = () => {
  const [t] = useTranslation("global");

  return (
    <Box p="20px" py={5} maxW="1200px">
      <div>{t("product.detail.games")}</div>
    </Box>
  );
};

export default GameHubDetail;
