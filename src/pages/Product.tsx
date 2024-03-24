import { Box, Center, Flex, Image, Show, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import next from "../assets/next.jpeg";
import gameHub from "../assets/rawg.jpeg";
import ProjectDetails from "../components/ProjectDetails";
import Project from "../components/projects/Project";
import projects from "../data/projects";
import CardContainer from "../components/CardContainer";

const Product = () => {
  const gameDetail = projects[0];
  const communityDetail = projects[1];

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
          <CardContainer>
            <Link to="/projects/gamehub">
              <Image src={gameHub} />
            </Link>
          </CardContainer>
        </SimpleGrid>
      </Center>
      {/* 2)community web */}
      <Center p="30px">
        <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
          <CardContainer>
            <Link to="/projects/community">
              <Image src={next} />
            </Link>
          </CardContainer>
          <Flex>
            <ProjectDetails details={communityDetail} />
            <Show above="md">
              <Box w={1} px="20px" />
            </Show>
          </Flex>
        </SimpleGrid>
      </Center>
    </>
  );
};

export default Product;
