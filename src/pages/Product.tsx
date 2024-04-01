import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import Project from "../components/product/Project";
import ProjectDetails from "../components/ProjectDetails";
import projects from "../data/projects";

const Product = () => {
  const gamehub = projects[0];
  const community = projects[1];
  const q2room = projects[2];

  return (
    <>
      {/* 1)Why we need project */}
      <Center p="20px" pt="35px">
        <Project />
      </Center>
      {/* 2)The projects we've built */}
      <Box>
        {/* 2.1)Next.js and game-hub */}
        <Center p="20px">
          <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
            <Box>
              <Box hideBelow="md" h="150px" />
              <ProjectDetails details={community} />
            </Box>
            <ProjectDetails details={gamehub} />
          </SimpleGrid>
        </Center>
        {/* 2.2)q2_room project */}
        <Center p="20px">
          <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
            <ProjectDetails details={q2room} />
          </SimpleGrid>
        </Center>
      </Box>
    </>
  );
};

export default Product;
