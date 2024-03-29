import { Box, Center, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import AI from "./components/work/AI";
import CourseCard from "./components/work/CourseCard";
import Python from "./components/work/Python";
import courses from "./data/courses";
import { useTranslation } from "react-i18next";

function HomePage() {
  const [t, i18n] = useTranslation("global");
  const jp = i18n.language === "jp";
  const oneSpace = { letterSpacing: "1px" };

  return (
    <>
      <Box px="10px" py="35px" maxW="500px">
        <Heading fontSize="sm" pb={5} style={oneSpace}>
          {t("hp.intro.head")}
        </Heading>
        <Text fontSize={jp ? "lg" : "2xl"} style={oneSpace}>
          {t("hp.intro.body")}
        </Text>
        <Box hideFrom="md" h="30px" />
      </Box>
      <Python />
      <AI />
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
