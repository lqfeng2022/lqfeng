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
      <Box paddingX="30px" paddingY="25px" maxW="580px">
        <Heading fontSize="sm" paddingBottom={5} style={oneSpace}>
          HI, WELCOM TO MY HOMEPAGE.
        </Heading>
        <Text fontSize="2xl" as="i">
          I'm Simon, a full-stack developer. I'm passionate about languages,
          whatever Nature languages or Programming languages.
        </Text>
      </Box>
      <Center>
        <Box paddingX="60px" paddingY={5} maxW="1200px">
          <Image src={python_log} paddingBottom="10px" />
          <Heading fontSize="sm" marginBottom="2px">
            <a href="#" className="border-bottom border-dark" style={oneSpace}>
              PYTHON
            </a>
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
