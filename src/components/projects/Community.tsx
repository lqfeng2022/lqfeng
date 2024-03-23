import { Box, Flex, Image, Show, SimpleGrid } from "@chakra-ui/react";
import next from "../../assets/next.jpeg";
import ProjectDetails from "../ProjectDetails";

const Community = () => {
  const details = {
    title: "A Community Web",
    content: [
      "Language: TypeScript",
      "Framework/Library: Next.js",
      "UI: Radix UI + Tailwind CSS",
    ],
    links: {
      name: "Web:",
      web: "www.community.com",
      url: "http://www.community.com",
    },
  };
  return (
    <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
      <Box maxW="500px">
        <Image src={next} />
      </Box>
      <Flex>
        <ProjectDetails details={details} />
        <Show above="md">
          <Box w={1} px="20px" />
        </Show>
      </Flex>
    </SimpleGrid>
  );
};

export default Community;
