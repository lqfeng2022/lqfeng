import { Center } from "@chakra-ui/react";
import Programming from "../components/courses/Programming";
import Python from "../components/courses/Python";

const Course = () => {
  return (
    <>
      <Center p="30px" py="50px">
        <Programming />
      </Center>
      <Center p="30px">
        <Python />
      </Center>
    </>
  );
};

export default Course;
