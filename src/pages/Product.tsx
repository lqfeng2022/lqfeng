import { Box, Center, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import next from "../assets/next.jpeg";
import gameHub from "../assets/rawg.jpeg";
import CardContainer from "../components/CardContainer";
import Project from "../components/product/Project";
import ProjectDetails from "../components/ProjectDetails";
import projects from "../data/projects";

const Product = () => {
  const gameDetail = projects[0];
  const communityDetail = projects[1];

  return (
    <>
      {/* 0)project summary */}
      <Center p="20px" pt="30px">
        <Project />
      </Center>
      {/* 1)gameHub web */}
      <Center p="20px">
        <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
          <CardContainer>
            <Link to="/product/gamehub">
              <Image src={gameHub} />
            </Link>
          </CardContainer>
          <Flex>
            <ProjectDetails details={gameDetail} />
            <Box hideBelow="md" w="5px" pr="30px" />
          </Flex>
        </SimpleGrid>
      </Center>
      {/* 2)community web */}
      <Center p="20px">
        <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
          <Flex>
            <Box hideBelow="md" w="5px" pr="30px" />
            <ProjectDetails details={communityDetail} />
          </Flex>
          <CardContainer>
            <Link to="/product/community">
              <Image src={next} />
            </Link>
          </CardContainer>
        </SimpleGrid>
      </Center>
    </>
  );
};

export default Product;
