import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import ai2 from "../../assets/ai2.jpeg";

const Course = () => {
  return (
    <Center>
      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        maxW="1200px"
        p="20px"
        spacing="20px"
      >
        <Box maxW="708px">
          <Image src={ai2} />
        </Box>
        <Box maxW="708px">
          <Text fontSize="4xl">
            Do we need to learn coding in 2024 the Age of AI?
          </Text>
          <Heading fontSize="md" className="fw-lighter lh-lg">
            AI is becomming so powerful espacially as ChatGPT launched. It's so
            smart and can do lots of tech stuff by itself, like coding. I think
            most of us should learn programming. Cus it can help you understand
            how computers and AI work, it is super important because they're
            everywhere now and future.
          </Heading>
          <Heading py={3} fontSize="md" className="fw-lighter lh-lg">
            Plus, when you know how to code, you can tell the AI exactly what
            you want it to do, make your own cool projects, and even help make
            AI smarter and safer for everyone.
          </Heading>
        </Box>
      </SimpleGrid>
    </Center>
  );
};

export default Course;
