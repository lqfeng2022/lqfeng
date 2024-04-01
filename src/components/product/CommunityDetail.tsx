import { useTranslation } from "react-i18next";
import { Box } from "@chakra-ui/react";

const CommunityDetail = () => {
  const [t] = useTranslation("global");

  return (
    <Box p="20px" py={5} maxW="1200px">
      <div>{t("product.detail.community")}</div>
    </Box>
  );
};

export default CommunityDetail;
