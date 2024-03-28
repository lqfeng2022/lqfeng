import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Python = () => {
  const pyCourse = {
    title: " PYTHON",
    image: "src/assets/python_log.jpeg",
    url: "/work/python",
  };

  const [t, i18n] = useTranslation("global");
  const jp = i18n.language === "jp";

  return (
    <Center>
      <Box p="20px" pb={10} maxW="1200px">
        <Box
          _hover={{
            transform: "scale(1.02)",
            transition: "transform .15s ease-in",
          }}
        >
          <Link to={pyCourse.url}>
            <Image src={pyCourse.image} />
          </Link>
        </Box>
        <Heading fontSize="sm" my="10px">
          <Link
            to={pyCourse.url}
            className="border-bottom border-dark"
            style={{ letterSpacing: "1px" }}
          >
            {pyCourse.title}
          </Link>
        </Heading>
        {!jp && (
          <Heading fontSize="sm" className="fw-lighter fst-italic">
            {t("hp.py.body")}
          </Heading>
        )}
        {jp && (
          <Text fontSize="sm" className="fst-italic">
            {t("hp.py.body")}
          </Text>
        )}
      </Box>
    </Center>
  );
};

export default Python;
