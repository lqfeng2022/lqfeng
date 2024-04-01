import { Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const DlearningDetail = () => {
  const [t] = useTranslation("global");

  return (
    <Box p="20px" py={5} maxW="1200px">
      <div>{t("hp.dlearn.detail")}</div>
    </Box>
  );
};

export default DlearningDetail;
