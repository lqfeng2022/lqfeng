import { Box, Center, SimpleGrid, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import AI from "./components/work/AI";
import CourseCard from "./components/work/CourseCard";
import Dlearning from "./components/work/Dlearning";
import HpIntroduce from "./components/work/HpIntroduce";
import courses from "./data/courses";

function HomePage() {
  const [t, i18n] = useTranslation("global");
  const jp = i18n.language === "jp";
  const { colorMode } = useColorMode();
  const uline =
    colorMode === "light" ? "border-bottom border-dark" : "border-bottom";
  const oneSpace = { letterSpacing: "1px" };

  return (
    <>
      <Box px="5px" py="35px" maxW="500px">
        <HpIntroduce jp={jp} t={t} oneSpace={oneSpace} />
      </Box>
      <Box p="15px" pb="35px">
        <AI jp={jp} t={t} oneSpace={oneSpace} />
      </Box>
      <Center>
        <Box p="15px" pb={10} maxW="1200px">
          <Dlearning jp={jp} t={t} uline={uline} />
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
            <CourseCard key={c.title} course={c} jp={jp} uline={uline} />
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
}

export default HomePage;
