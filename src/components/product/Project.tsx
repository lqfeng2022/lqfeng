import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import project from "../../assets/project.jpeg";

const Project = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
      <Box maxW="700px">
        <Image src={project} />
      </Box>
      <Flex>
        <Box maxW="700px">
          <Text fontSize="4xl">Why do you need build your own project?</Text>
          <Heading fontSize="md" className="fw-lighter lh-lg">
            A real project is kind of visual way to apply what you learned. And
            it is a good approach to show your ability that what you can do and
            do it well. A nice project can leave peope a greate first impression
            which make people stick around you. It's the key to attracting
            audience, to making yourself known to the outside world.
          </Heading>
          <Heading py={3} fontSize="md" className="fw-lighter lh-lg">
            Your friends and customers need to know about you and I'm here to
            help you with a visualization way.
          </Heading>
          <Heading pt="50px" fontSize="sm">
            SEE WHAT I BUILD:
          </Heading>
        </Box>
        <Box hideBelow="md" w="5px" pr="30px" />
      </Flex>
    </SimpleGrid>
  );
};

export default Project;
