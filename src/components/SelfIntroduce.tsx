import { Box, Heading, Image, Show, SimpleGrid, Text } from "@chakra-ui/react";
import simon from "../assets/lqfeng.jpeg";

const SelfIntroduce = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="40px">
      <Box maxW="600px">
        <Image src={simon} />
        <Show above="md">
          <Box h="100px" />
        </Show>
      </Box>
      <Box maxW="600px">
        <Show above="md">
          <Box h="180px" />
        </Show>
        <Heading fontSize="sm" className="fw-lighter">
          HI. I'M SIMON.
        </Heading>
        <Text fontSize="3xl" pt={6}>
          I'm a developer and trainer with a visual approach for your business
          need and learning target.
        </Text>
      </Box>
    </SimpleGrid>
  );
};

export default SelfIntroduce;
