import { Heading, Box, Image, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import python_log from "../../assets/python_log.jpg";

const Python = () => {
  return (
    <Center>
      <Box px="30px" pb={10} maxW="1200px">
        <Box
          _hover={{
            transform: "scale(1.02)",
            transition: "transform .15s ease-in",
          }}
        >
          <Link to="/courses/python">
            <Image src={python_log} />
          </Link>
        </Box>
        <Heading fontSize="sm" my="5px">
          <Link
            to="/courses/python"
            className="border-bottom border-dark"
            style={{ letterSpacing: "1px" }}
          >
            PYTHON
          </Link>
        </Heading>
        <Heading fontSize="sm" className="fw-lighter fst-italic">
          Everything you need to program in Python is here.
        </Heading>
      </Box>
    </Center>
  );
};

export default Python;
