import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import ai2 from "../../assets/ai2.jpeg";

const Course = () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} maxW="1200px" spacing="30px">
      <Box maxW="700px">
        <Image src={ai2} />
      </Box>
      <Box maxW="700px">
        <Text fontSize="4xl">
          Do we need to learn coding in 2024 while AI is present?
        </Text>
        <Heading fontSize="md" className="fw-lighter lh-lg">
          AI is fantastic espacially as ChatGPT's comming, it's so smart and can
          do lots of tech stuff by itself, like coding.. I think this is the
          most interesting part of programming. So I think most of us should
          learn at least one programming language, like Python. Cus it helps you
          understand how computers and AI work, it is super important because
          they're everywhere now.
        </Heading>
        <Heading py={3} fontSize="md" className="fw-lighter lh-lg">
          Plus, when you know how to code, you can tell the AI exactly what you
          want it to do, make your own cool projects, and even help make AI
          smarter and safer for everyone.
        </Heading>
      </Box>
    </SimpleGrid>
  );
};

export default Course;
