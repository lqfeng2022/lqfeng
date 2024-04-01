import { Box, Center, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import AI from "./components/AI";
import Dlearning from "./components/Dlearning";
import CourseCard from "./components/work/CourseCard";
import courses from "./data/courses";

function HomePage() {
  const [t, i18n] = useTranslation("global");
  const jp = i18n.language === "jp";
  const oneSpace = { letterSpacing: "1px" };

  return (
    <>
      {/* 1)hp introduction */}
      <Box px="10px" py="35px" maxW="500px">
        <Heading fontSize="sm" pb={5} style={oneSpace}>
          {t("hp.intro.head")}
        </Heading>
        <Text fontSize={jp ? "lg" : "2xl"} style={oneSpace}>
          {t("hp.intro.body")}
        </Text>
        <Box hideFrom="md" h="30px" />
      </Box>
      {/* 2)artificial intelligent */}
      <Box p="20px" pb="35px">
        <AI />
      </Box>
      {/* 3)Deep Learning */}
      <Center>
        <Box p="20px" pb={10} maxW="1200px">
          <Dlearning />
        </Box>
      </Center>
      {/* 4)Course list */}
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
