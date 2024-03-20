import {
  Box,
  Flex,
  Heading,
  Image,
  Show,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import gameHub from "../assets/rawg.jpeg";

const GameHub = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
      <Flex>
        <Show above="md">
          <Box w="100px" />
        </Show>
        <Box maxW="500px">
          <Text fontSize="2xl" className="fst-italic">
            A Video Game display web with Vite + React + TS
          </Text>
          <Heading fontSize="md" className="fw-lighter lh-lg">
            As practice, I build this web for learning React18. React is a
            popular front-end JavaScript library for building user interfaces
            based on components.
          </Heading>
        </Box>
      </Flex>
      <Box maxW="500px">
        <Image src={gameHub} />
      </Box>
    </SimpleGrid>
  );
};

export default GameHub;
