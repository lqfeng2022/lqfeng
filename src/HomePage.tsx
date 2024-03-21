import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import python_log from "./assets/python_log.jpg";
import CourseCard from "./components/CourseCard";
import courses from "./data/courses";

function HomePage() {
  const oneSpace = { letterSpacing: "1px" };

  return (
    <>
      <Box px="30px" py="25px" maxW="550px">
        <Heading fontSize="sm" paddingBottom={5} style={oneSpace}>
          HI, WELCOM TO MY HOMEPAGE.
        </Heading>
        <Text fontSize="2xl">
          I'm Simon, a full-stack developer. I'm passionate about nature
          languages, mathematic and AI. Recently I'm building a serial of
          projects(courses/apps) with programming tools to help people
          understand what is AI and how to get it quickly.
        </Text>
      </Box>
      <Center>
        <Box px="30px" py={5} maxW="1200px">
          <Image src={python_log} pb="10px" />
          <Heading fontSize="sm" mb="2px">
            <a href="#" className="border-bottom border-dark" style={oneSpace}>
              PYTHON
            </a>
          </Heading>
          <Heading fontSize="sm" className="fw-lighter fst-italic">
            Everything you need to program in Python is here.
          </Heading>
        </Box>
      </Center>
      <Center>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          px="30px"
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
}

export default HomePage;
