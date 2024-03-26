import { Box, Center, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Python = () => {
  const pyCourse = {
    title: " PYTHON",
    subTitle: "Everything you need to program in Python is here.",
    image: "src/assets/python_log.jpeg",
    url: "/work/python",
  };

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
        <Heading fontSize="sm" my="6px">
          <Link
            to={pyCourse.url}
            className="border-bottom border-dark"
            style={{ letterSpacing: "1px" }}
          >
            {pyCourse.title}
          </Link>
        </Heading>
        <Heading fontSize="sm" className="fw-lighter fst-italic">
          {pyCourse.subTitle}
        </Heading>
      </Box>
    </Center>
  );
};

export default Python;
