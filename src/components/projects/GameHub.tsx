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
  Link,
} from "@chakra-ui/react";
import gameHub from "../../assets/rawg.jpeg";

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
          <Text fontSize="2xl" className="fst-italic">
            A Video Game Display Web
          </Text>
          <UnorderedList m="10px" pl="15px">
            {contents.map((c) => (
              <ListItem key={c.title}>
                <Heading fontSize="sm" m="0" className="fw-lighter lh-lg">
                  {c.title}
                </Heading>
              </ListItem>
            ))}
            {links.map((l) => (
              <ListItem>
                <Heading fontSize="sm" m="0" className="fw-lighter lh-lg">
                  {l.title}{" "}
                  <Link href={l.url} color="green.500">
                    <Text className="fst-italic link-offset-3" as="u">
                      {l.content}
                    </Text>
                  </Link>
                </Heading>
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
