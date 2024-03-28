import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import Project from "../components/product/Project";
import ProjectDetails from "../components/ProjectDetails";
import projects from "../data/projects";

const Product = () => {
  const gameDetail = projects[0];
  const communityDetail = projects[1];

  return (
    <>
      <Center p="20px" pt="35px">
        <Project />
      </Center>
      <Center p="20px">
        <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
          <Box>
            <Box hideBelow="md" h="200px" />
            <ProjectDetails details={gameDetail} />
          </Box>
          <ProjectDetails details={communityDetail} />
        </SimpleGrid>
      </Center>
    </>
  );
};

export default Product;
