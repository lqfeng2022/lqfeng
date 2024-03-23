import { Box, Flex, Image, Show, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import gameHub from "../../assets/rawg.jpeg";
import ProjectDetails from "../ProjectDetails";

const GameHub = () => {
  const details = {
    title: "A Video Game Display Web",
    content: [
      "Language: TypeScript",
      "Framework/Library: React.js",
      "API: RAWG API",
      "UI: Chakra UI + Bootstrap",
      "Dev tool: Vite.js",
    ],
    links: {
      name: "Web:",
      web: "www.gamehub.com",
      url: "http://www.gamehub.com",
    },
  };

  return (
    <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
      <Flex>
        <Show above="md">
          <Box w={1} px="20px" />
        </Show>
        <ProjectDetails details={details} />
      </Flex>
      <Box maxW="500px">
        <Link to="/projects/gamehub">
          <Image src={gameHub} />
        </Link>
      </Box>
    </SimpleGrid>
  );
};

export default GameHub;
