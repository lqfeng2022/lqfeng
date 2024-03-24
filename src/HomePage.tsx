import { Box, Center, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import CourseCard from "./components/CourseCard";
import Python from "./components/courses/Python";
import courses from "./data/courses";

function HomePage() {
  const oneSpace = { letterSpacing: "1px" };

  return (
    <>
      <Box px="10px" py="25px" maxW="550px">
        <Heading fontSize="sm" pb={5} style={oneSpace}>
          HI, WELCOM TO MY HOMEPAGE.
        </Heading>
        <Text fontSize="2xl">
          I'm Simon, a full-stack developer. I'm passionate about helping people
          understand what is AI and how it works in a visual way. So I'm gonna
          build a serial Deep Learning Models code by code. Let's do it!
        </Text>
      </Box>
      <Python />
      <Center>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          px="30px"
          spacing="20px"
          maxW="1200px"
        >
          {courses.map((c) => (
            <CourseCard key={c.title} course={c} />
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
}

export default HomePage;
