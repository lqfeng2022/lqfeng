import { Box, Center, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import AI from "./components/work/AI";
import CourseCard from "./components/work/CourseCard";
import Python from "./components/work/Python";
import courses from "./data/courses";

function HomePage() {
  return (
    <>
      {/* 0)hp introduce */}
      <Box px="10px" py="25px" maxW="550px">
        <Heading fontSize="sm" pb={5} style={{ letterSpacing: "1px" }}>
          HI, WELCOM TO MY HOMEPAGE.
        </Heading>
        <Text fontSize="2xl">
          I'm Simon, a full-stack developer. I'm passionate about helping people
          understand what is AI and how it works in a visual way. So I'm gonna
          build a serial Deep Learning Models code by code. Let's do it!
        </Text>
        <Box hideFrom="md" h="50px" />
      </Box>
      {/* 1)talk about AI */}
      <AI />
      {/* 2)PYTHON course */}
      <Python />
      {/* 3)other courses */}
      <Center>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          p="20px"
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
