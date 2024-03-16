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
      <Box paddingX={10} paddingY={5} maxW="500px">
        <Heading fontSize="sm" paddingBottom={5}>
          HI, WELCOM TO MY HOMEPAGE.
        </Heading>
        <Text fontSize="xl" as="i">
          I'm Simon, a web developer. And I'm passionate about languages,
          whatever human nature languages or programming languages. One day I
          suppose we can really understand animal languages and even communicate
          with them using AI soon.
        </Text>
      </Box>
      <Center>
        <Box paddingX="60px" paddingY={5} maxW="1200px">
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
          paddingX="60px"
          spacing={2}
          maxW="1200px"
        >
          <CourseCard course={courses[0]} />
          <CourseCard course={courses[1]} />
        </SimpleGrid>
      </Center>
      <Center>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          paddingX="60px"
          spacing={2}
          maxW="1200px"
        >
          <CourseCard course={courses[2]} />
          <CourseCard course={courses[3]} />
        </SimpleGrid>
      </Center>
      <Center>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          paddingX="60px"
          spacing={2}
          maxW="1200px"
        >
          <CourseCard course={courses[4]} />
          <CourseCard course={courses[5]} />
        </SimpleGrid>
      </Center>
    </>
  );
};