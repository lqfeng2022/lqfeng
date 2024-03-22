import {
  Box,
  Center,
  Heading,
  Image,
  Show,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import ai from "../assets/ai.jpeg";
import book from "../assets/book.jpg";
import simon from "../assets/lqfeng.jpeg";

const Me = () => {
  return (
    <>
      {/* 1)Introduce myself */}
      <Center p="30px">
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
              I'm a developer and trainer with a visual approach for your
              business need and learning target.
            </Text>
          </Box>
        </SimpleGrid>
      </Center>
      {/* 2)What's my work */}
      <Center p="30px" pt="0">
        <Stack maxW="1200px">
          <Box maxW="600px">
            <Text fontSize="xl" pb={3} className="fst-italic">
              0. What am I doing now?
            </Text>
            <Heading fontSize="md" className="fw-lighter lh-lg">
              A full-stack developer. I think with coding eveything can be
              easily understand by a cleaner and visual approach. I really
              appreciate choosing to be a developer, cus I can visualize
              anything what I thought, learned, and I can show myself to
              everyone.
            </Heading>
          </Box>
          <Box maxW="1200px">
            <Image src={ai} />
          </Box>
        </Stack>
      </Center>
      {/* 3)My education background and career */}
      <Center p="30px">
        <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="40px">
          <Box maxW="600px">
            <Image src={book} />
          </Box>
          <Box maxW="600px">
            <Text fontSize="xl" pb={3} className="fst-italic">
              1. What's my eduction background?
            </Text>
            <Heading fontSize="md" className="fw-lighter lh-lg">
              A graduate of Hubei University of Technology in Wuhan. I love
              philosophy, and I read lots of about Laozi, Buddha, René Descartes
              etc. I am a big fun of GIBLI and I started to know more about
              Japanese culture and history, then I learned Japanese and got N1
              in JLPT test.
            </Heading>
            <Box paddingTop={4} my={5} className="border-bottom border-dark" />
            <Text fontSize="xl" py={3} className="fst-italic">
              2. What's my career?
            </Text>
            <Heading fontSize="md" className="fw-lighter lh-lg">
              I used to be an engineer in a Japanese company. And the first job,
              I worked as a salesman in a Chinese company, nothing special.
            </Heading>
          </Box>
        </SimpleGrid>
      </Center>
    </>
  );
};

export default Me;
