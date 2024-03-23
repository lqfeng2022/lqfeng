import {
  Box,
  Flex,
  Heading,
  Image,
  Show,
  SimpleGrid,
  Text,
  Center,
} from "@chakra-ui/react";
import ai2 from "../assets/ai2.jpeg";

const Course = () => {
  return (
    <Center p="30px" py="50px">
      <SimpleGrid columns={{ sm: 1, md: 2 }} maxW="1200px" spacing="30px">
        <Flex>
          <Show above="md">
            <Box w={1} px="20px" />
          </Show>
          <Box maxW="500px">
            <Image src={ai2} />
          </Box>
        </Flex>
        <Box maxW="500px">
          <Text fontSize="4xl">
            Do we need to learn coding in 2024 while AI is present?
          </Text>
          <Heading fontSize="md" className="fw-lighter lh-lg">
            A real project is kind of visual way to apply what you learned. And
            it is a good approach to show your ability that what you can do and
            do it well. A nice project can leave peope a greate first impression
            which make people stick around you. It's the key to attracting
            audience, to making yourself known to the outside world.
          </Heading>
        </Box>
      </SimpleGrid>
    </Center>
  );
};

export default Course;
