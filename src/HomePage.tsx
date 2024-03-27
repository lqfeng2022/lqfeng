import { Box, Center, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import AI from "./components/work/AI";
import CourseCard from "./components/work/CourseCard";
import Python from "./components/work/Python";
import courses from "./data/courses";

function HomePage() {
  return (
    <>
      {/* 0)hp introduce */}
      <Box px="10px" py="35px" maxW="500px">
        <Heading fontSize="sm" pb={5} style={{ letterSpacing: "1px" }}>
          HI, WELCOM TO MY HP.
        </Heading>
        <Text fontSize="2xl">
          I'm Simon, a web developer. I'm passionate about talking what is AI
          and how it works in a visualization approach. And I'm building a
          serial courses and apps to explain programming and AI's working
          process. Let's hit the road!
        </Text>
        <Box hideFrom="md" h="30px" />
      </Box>
      {/* 2)PYTHON course */}
      <Python />
      <AI />
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
