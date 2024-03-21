import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ai from "../assets/ai.jpeg";

const Developer = () => (
  <Stack maxW="1200px">
    <Box maxW="500px">
      <Text fontSize="xl" pb={3} className="fst-italic">
        0. What am I doing now?
      </Text>
      <Heading fontSize="md" className="fw-lighter lh-lg">
        A full-stack developer. I think with coding eveything can be easily
        understand by a cleaner and visual approach. I really appreciate
        choosing to be a developer, cus I can visualize anything what I thought,
        learned, and I can show myself to everyone.
      </Heading>
    </Box>
    <Box maxW="1040px">
      <Image src={ai} />
    </Box>
  </Stack>
);

export default Developer;
