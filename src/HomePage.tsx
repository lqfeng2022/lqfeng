import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import python_log from "./assets/python_log.jpg";
import CourseCard from "./components/CourseCard";
import courses from "./data/courses";

function HomePage() {
  return (
    <Grid templateAreas={`"main"`}>
      <GridItem area="main">
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          paddingX="10px"
          paddingY="25px"
          spacing={2}
          maxW="1200px"
        >
          <Box maxW="580px">
            <Heading
              fontSize="sm"
              paddingBottom={5}
              style={{ letterSpacing: "1px" }}
            >
              HI, WELCOM TO MY HOMEPAGE.
            </Heading>
            <Text fontSize="2xl" as="i">
              I'm Simon, a full-stack developer. I'm passionate about languages,
              whatever Nature languages or Programming languages.
            </Text>
          </Box>
        </SimpleGrid>
        <Center>
          <Box paddingX="30px" paddingY={5} maxW="1200px">
            <Image src={python_log} paddingY="5px" />
            <Heading fontSize="sm" marginBottom="2px">
              <a
                href="#"
                className="border-bottom border-dark"
                style={{ letterSpacing: "1px" }}
              >
                PYTHON
              </a>
            </Heading>
            <Heading fontSize="sm" className="fw-lighter fst-italic">
              Everything you need to program in Python is here
            </Heading>
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
      </GridItem>
    </Grid>
  );
}

export default HomePage;
