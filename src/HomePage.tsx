import { Box, Center, SimpleGrid, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Course from "./components/work/Course";
import CourseCard from "./components/work/CourseCard";
import David from "./components/work/David";
import HpIntroduce from "./components/work/HpIntroduce";
import courses from "./data/courses";

function HomePage() {
  const [t, i18n] = useTranslation("global");
  const jp = i18n.language.startsWith("jp");

  const oneSpace = { letterSpacing: "1px" };
  
  const { colorMode } = useColorMode();
  const uline = (colorMode === "light") ? "border-bottom border-dark" : "border-bottom";

  return (
    <>
      <Box px="5px" py="35px" maxW="500px">
        <HpIntroduce jp={jp} t={t} oneSpace={oneSpace} />
      </Box>
      <Box p="15px" pb="35px">
        <Course jp={jp} t={t} oneSpace={oneSpace} />
      </Box>
      <Center>
        <Box p="15px" pb={10} maxW="1200px">
          <David jp={jp} t={t} uline={uline} />
        </Box>
      </Center>
      <Center>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          p="15px"
          spacing="20px"
          maxW="1200px"
        >
          {courses.map((c) => (
            <CourseCard key={c.title_en} course={c} jp={jp} uline={uline} />
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
}

export default HomePage;
