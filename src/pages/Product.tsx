import { Box, Center, SimpleGrid, useColorMode } from "@chakra-ui/react";
import Project from "../components/product/Project";
import ProjectDetails from "../components/ProjectDetails";
import projects from "../data/projects";
import { useTranslation } from "react-i18next";

const Product = () => {
  const { colorMode } = useColorMode();
  const [t, i18n] = useTranslation("global");
  const jp = i18n.language === "jp";
  const oneSpace = { letterSpacing: "1px" };

  const gamehub = projects[0];
  const community = projects[1];
  const q2room = projects[2];

  return (
    <>
      <Center p="20px" pt="35px">
        <Project t={t} jp={jp} oneSpace={oneSpace} />
      </Center>
      <Box>
        <Center p="20px">
          <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
            <Box>
              <Box hideBelow="md" h="150px" />
              <ProjectDetails
                jp={jp}
                colorMode={colorMode}
                details={community}
              />
            </Box>
            <ProjectDetails jp={jp} colorMode={colorMode} details={gamehub} />
          </SimpleGrid>
        </Center>
        <Center p="20px">
          <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
            <ProjectDetails jp={jp} colorMode={colorMode} details={q2room} />
          </SimpleGrid>
        </Center>
      </Box>
    </>
  );
};

export default Product;
