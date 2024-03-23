import { Box, Center, Flex, Image, Show, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import next from "../assets/next.jpeg";
import q2room from "../assets/photoroom.jpeg";
import gameHub from "../assets/rawg.jpeg";
import ProjectDetails from "../components/ProjectDetails";
import Project from "../components/projects/Project";
import projects from "../data/projects";

const Product = () => {
  const gameDetail = projects[0];
  const communityDetail = projects[1];
  const debgDetail = projects[2];

  return (
    <>
      <Center p="30px" pt="50px">
        <Project />
      </Center>
      {/* 1)gameHub web */}
      <Center p="30px">
        <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
          <Flex>
            <Show above="md">
              <Box w={1} px="20px" />
            </Show>
            <ProjectDetails details={gameDetail} />
          </Flex>
          <Box maxW="500px">
            <Link to="/projects/gamehub">
              <Image src={gameHub} />
            </Link>
          </Box>
        </SimpleGrid>
      </Center>
      {/* 2)community web */}
      <Center p="30px">
        <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
          <Box maxW="500px">
            <Image src={next} />
          </Box>
          <Flex>
            <ProjectDetails details={communityDetail} />
            <Show above="md">
              <Box w={1} px="20px" />
            </Show>
          </Flex>
        </SimpleGrid>
      </Center>
      {/* 3)background remover web */}
      <Center p="30px">
        <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
          <Flex>
            <Show above="md">
              <Box w={1} px="20px" />
            </Show>
            <ProjectDetails details={debgDetail} />
          </Flex>
          <Box maxW="500px" className="border border-dark">
            <Image src={q2room} />
          </Box>
        </SimpleGrid>
      </Center>
    </>
  );
};

export default Product;
