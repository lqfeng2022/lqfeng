import { Box, Center, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import AI from "./components/work/AI";
import CourseCard from "./components/work/CourseCard";
import Python from "./components/work/Python";
import courses from "./data/courses";
import { useTranslation } from "react-i18next";

function HomePage() {
  const [t, i18n] = useTranslation("global");
  const jp = i18n.language === "jp";

  return (
    <>
      {/* 0)hp introduce */}
      <Box px="10px" py="35px" maxW="500px">
        {jp ? (
          <Heading fontSize="lg" pb={5}>
            {t("hp.intro.head")}
          </Heading>
        ) : (
          <Heading fontSize="sm" pb={5} style={{ letterSpacing: "1px" }}>
            {t("hp.intro.head")}
          </Heading>
        )}
        {jp ? (
          <Text fontSize="lg" style={{ letterSpacing: "1px" }}>
            {t("hp.intro.body")}
          </Text>
        ) : (
          <Text fontSize="2xl">{t("hp.intro.body")}</Text>
        )}
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
