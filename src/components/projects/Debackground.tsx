import { Box, Flex, Image, Show, SimpleGrid } from "@chakra-ui/react";
import q2room from "../../assets/photoroom.jpeg";
import ProjectDetails from "../ProjectDetails";

const Debackground = () => {
  const details = {
    title: "A Background Remover App",
    content: [
      "Language: TypeScript",
      "Framework/Library: Next.js",
      "UI: Chakra UI + Bootstrap",
    ],
    links: {
      name: "Web:",
      web: "www.q2room.com",
      url: "http://www.q2room.com",
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
      <Box maxW="500px" className="border border-dark">
        <Image src={q2room} />
      </Box>
    </SimpleGrid>
  );
};

export default Debackground;
