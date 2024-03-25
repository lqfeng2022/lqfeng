import { Center, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import next from "../assets/next.jpeg";
import gameHub from "../assets/rawg.jpeg";
import CardContainer from "../components/CardContainer";
import ProjectDetails from "../components/ProjectDetails";
import Project from "../components/projects/Project";
import projects from "../data/projects";
import AI from "../components/projects/AI";
const Product = () => {
  const gameDetail = projects[0];
  const communityDetail = projects[1];

  return (
    <>
      <Center py="30px" px="20px" pt="50px">
        <AI />
      </Center>
      <Center py="30px" px="20px" pt="30px">
        <Project />
      </Center>
      {/* 1)gameHub web */}
      <Center py="30px" px="20px">
        <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
          <Flex>
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
      <Center py="30px" px="20px">
        <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
          <CardContainer>
            <Link to="/projects/community">
              <Image src={next} />
            </Link>
          </CardContainer>
          <Flex>
            <ProjectDetails details={communityDetail} />
          </Flex>
        </SimpleGrid>
      </Center>
    </>
  );
};

export default Product;
