import {
  Box,
  Flex,
  Heading,
  Image,
  ListItem,
  Show,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import gameHub from "../../assets/rawg.jpeg";
import { Link } from "react-router-dom";

const GameHub = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
      <Box maxW="500px">
        <Image src={gameHub} />
      </Box>
      <Flex>
        <Box maxW="500px">
          <Text fontSize="2xl" className="fst-italic">
            A Video Game Display Web
          </Text>
          <UnorderedList m="0" pl="15px">
            <ListItem>
              <Heading fontSize="md" m="0" className="fw-lighter lh-lg">
                Library/Framework: React.js
              </Heading>
            </ListItem>
            <ListItem>
              <Heading fontSize="md" m="0" className="fw-lighter lh-lg">
                API: RAWG API
              </Heading>
            </ListItem>
            <ListItem>
              <Heading fontSize="md" m="0" className="fw-lighter lh-lg">
                UI: Chakra UI + Bootstrap
              </Heading>
            </ListItem>
            <ListItem>
              <Heading fontSize="md" m="0" className="fw-lighter lh-lg">
                Dev tool: Vite.js
              </Heading>
            </ListItem>
            <ListItem>
              <Heading fontSize="md" m="0" className="fw-lighter lh-lg">
                Link:{" "}
                <Link
                  to="http://www.gamehub.com"
                  className="fst-italic link-offset-2"
                >
                  www.gamehub.com
                </Link>
              </Heading>
            </ListItem>
            <ListItem>
              <Heading fontSize="md" m="0" className="fw-lighter lh-lg">
                Detail:{" "}
                <Link
                  className="fst-italic link-offset-2"
                  to="/projects/gamehub"
                >
                  Lick me!
                </Link>
              </Heading>
            </ListItem>
          </UnorderedList>
        </Box>
        <Show above="md">
          <Box w={1} px="20px" />
        </Show>
      </Flex>
    </SimpleGrid>
  );
};

export default GameHub;
