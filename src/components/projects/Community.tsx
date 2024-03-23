import {
  Box,
  Flex,
  Heading,
  Image,
  Show,
  SimpleGrid
} from "@chakra-ui/react";
import next from "../../assets/next.jpeg";
import Title from "../Title";

const Community = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
      <Box maxW="500px">
        <Image src={next} />
      </Box>
      <Flex>
        <Box maxW="500px">
          <Title name="A Community web with Next.js" />
          <Heading fontSize="md" className="fw-lighter lh-lg">
            Next.js is a React Framework for building full-stack web application
            with server-side rendering and static website generation.
          </Heading>
        </Box>
        <Show above="md">
          <Box w={1} px="20px" />
        </Show>
      </Flex>
    </SimpleGrid>
  );
};

export default Community;
