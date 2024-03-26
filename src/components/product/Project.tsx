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
          <Text fontSize="4xl">What about build your own app?</Text>
          <Heading fontSize="md" className="fw-lighter lh-lg">
            You can design and build a full-stack app as your first product. A
            popular product can leave peope a great first impression which make
            people stick around you, even it's just an APP not a Photo or
            Paiting. It's the key to attracting audience, to making yourself
            known to the outside world.
          </Heading>
          <Heading py={3} fontSize="md" className="fw-lighter lh-lg">
            Here I'm gonna build a web app from scratch.
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
