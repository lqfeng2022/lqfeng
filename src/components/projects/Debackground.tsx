import {
  Box,
  Flex,
  Heading,
  Image,
  Show,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import q2room from "../../assets/photoroom.jpeg";

const Debackground = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
      <Flex>
        <Show above="md">
          <Box w={1} px="20px" />
        </Show>
        <Box maxW="500px">
          <Text fontSize="2xl" className="fst-italic">
            An AI background remover app
          </Text>
          <Heading fontSize="md" className="fw-lighter lh-lg">
            Background removing is pretty useful in photo editor, here I just
            build a small tool for generate the ID photo.
          </Heading>
        </Box>
      </Flex>
      <Box maxW="500px" className="border border-dark">
        <Image src={q2room} />
      </Box>
    </SimpleGrid>
  );
};

export default Debackground;
