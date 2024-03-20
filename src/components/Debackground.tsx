import {
  Box,
  Flex,
  Heading,
  Image,
  Show,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import q2room from "../assets/photoroom.jpeg";

const Debackground = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
      <Box maxW="500px">
        <Image src={q2room} />
      </Box>
      <Flex>
        <Box maxW="500px">
          <Text fontSize="2xl" className="fst-italic">
            An AI background remover app
          </Text>
          <Heading fontSize="md" className="fw-lighter lh-lg">
            Background removing is pretty useful in photo editor, here I just
            build a small tool for generate the ID photo.
          </Heading>
        </Box>
        <Show above="md">
          <Box w="100px" />
        </Show>
      </Flex>
    </SimpleGrid>
  );
};

export default Debackground;
