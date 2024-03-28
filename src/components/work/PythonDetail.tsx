import { Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const PythonDetail = () => {
  const [t] = useTranslation("global");

  return (
    <Box px="20px" py={5} maxW="1200px">
      <div>{t("hp.py.detail")}</div>
    </Box>
  );
};

export default PythonDetail;
