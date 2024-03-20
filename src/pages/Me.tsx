import {
  Box,
  SimpleGrid,
  Text,
  Image,
  Heading,
  Show,
  Center,
} from "@chakra-ui/react";
import photo from "../assets/lqfeng.jpeg";

const Me = () => (
  <Center px="30px" py="25px">
    <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="40px">
      <Center>
        <Box maxW="708px">
          <Image src={photo} />
          <Show above="md">
            <Box h="180px" />
          </Show>
        </Box>
      </Center>
      <Center>
        <Box maxW="708px">
          <Show above="md">
            <Box h="180px" />
          </Show>
          <Heading fontSize="sm" className="fw-lighter">
            HI. I'M SIMON.
          </Heading>
          <Text fontSize="3xl" py={6}>
            I'm a developer and trainer with a visual approach for your business
            need and learning target.
          </Text>
        </Box>
      </Center>
    </SimpleGrid>
  </Center>
);

export default Me;
