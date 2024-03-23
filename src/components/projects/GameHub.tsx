import {
  Box,
  Flex,
  Image,
  ListItem,
  Show,
  SimpleGrid,
  UnorderedList,
} from "@chakra-ui/react";
import gameHub from "../../assets/rawg.jpeg";
import Content from "../Content";
import ContentWithLink from "../ContentWithLink";
import Title from "../Title";

const GameHub = () => {
  const contents = [
    { title: "Library/Framework: React.js" },
    { title: "API: RAWG API" },
    { title: "UI: Chakra UI + Bootstrap" },
    { title: "Dev tool: Vite.js" },
  ];

  const links = [
    {
      title: "Link:",
      content: "www.gamehub.com",
      url: "http://www.gamehub.com",
    },
    {
      title: "Detail:",
      content: "Lick me",
      url: "/projects/gamehub",
    },
  ];

  return (
    <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
      <Flex>
        <Show above="md">
          <Box w={1} px="20px" />
        </Show>
        <Box maxW="500px">
          <Title name="A Video Game Display Web" />
          <UnorderedList m="10px" pl="5px">
            {contents.map((c) => (
              <ListItem key={c.title}>
                <Content name={c.title} />
              </ListItem>
            ))}
            {links.map((l) => (
              <ListItem key={l.title}>
                <ContentWithLink link={l} />
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Flex>
      <Box maxW="500px">
        <Image src={gameHub} />
      </Box>
    </SimpleGrid>
  );
};

export default GameHub;
