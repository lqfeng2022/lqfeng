import {
  Box,
  Flex,
  Heading,
  Image,
  Show,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import next from "../../assets/next.jpeg";

const Community = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
      <Flex>
        <Show above="md">
          <Box w={1} px="20px" />
        </Show>
        <Box maxW="500px">
          <Text fontSize="2xl" className="fst-italic">
            A Community web with Next.js
          </Text>
          <Heading fontSize="md" className="fw-lighter lh-lg">
            Next.js is a React Framework for building full-stack web application
            with server-side rendering and static website generation.
          </Heading>
        </Box>
      </Flex>
      <Box maxW="500px">
        <Image src={next} />
      </Box>
    </SimpleGrid>
  );
};

export default Community;
