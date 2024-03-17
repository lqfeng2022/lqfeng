import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import python_log from "../assets/python_log.jpg";
import CourseCard from "./CourseCard";
import courses from "../data/courses";

export const Body = () => {
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        padding="20px"
        spacing={2}
        maxW="1200px"
      >
        <Box maxW="580px">
          <Heading fontSize="sm" paddingBottom={5}>
            HI, WELCOM TO MY HOMEPAGE.
          </Heading>
          <Text fontSize="xl" as="i">
            I'm Simon, a full-stack developer. I'm passionate about languages,
            whatever Nature languages or Programming languages. One day I
            suppose we can even understand animal languages and communicate with
            them using AI soon..
          </Text>
        </Box>
      </SimpleGrid>
      <Center>
        <Box paddingX="30px" paddingY={5} maxW="1200px">
          <Image src={python_log} paddingY="5px" />
          <Heading as="u" fontSize="sm" paddingY="10px">
            <a href="#">PYTHON</a>
          </Heading>
          <Text fontSize="sm" className="fw-lighter fst-italic">
            Everything you need to program in Python is here
          </Text>
        </Box>
      </Center>
      <Center>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          paddingX="30px"
          spacing="10px"
          maxW="1200px"
        >
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
};
