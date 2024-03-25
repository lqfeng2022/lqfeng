import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Show,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ImQuotesLeft } from "react-icons/im";
import ai from "../assets/ai.jpeg";
import book from "../assets/book.jpg";
import simon from "../assets/lqfeng.jpeg";
import quotation from "../assets/quotation.jpeg";

const Me = () => {
  return (
    <>
      {/* 1)Introduce myself */}
      <Center p="20px">
        <SimpleGrid columns={{ sm: 1, md: 2 }} maxW="1200px" spacing="40px">
          <Box maxW="600px">
            <Image src={simon} />
            <Show above="md">
              <Box h="100px" />
            </Show>
          </Box>
          <Box>
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
      <Center p="20px" pt="0">
        <Stack>
          <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="40px">
            <Box maxW="600px">
              <Text fontSize="xl" className="fst-italic">
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
          </SimpleGrid>
          <Box maxW="1200px">
            <Image src={ai} />
          </Box>
        </Stack>
      </Center>
      {/* 3)My education background and career */}
      <Center p="20px">
        <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="40px">
          <Box>
            <Image src={book} />
          </Box>
          <Box>
            <Text fontSize="xl" className="fst-italic">
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
            <Text fontSize="xl" pt={3} className="fst-italic">
              2. What's my career?
            </Text>
            <Heading fontSize="md" className="fw-lighter lh-lg">
              I used to be an engineer in a Japanese company. And the first job,
              I worked as a salesman in a Chinese company, nothing special.
            </Heading>
          </Box>
        </SimpleGrid>
      </Center>
      {/* 4)Who are you through others' eyes */}
      <Center p="20px">
        <SimpleGrid columns={{ base: 1, sm: 2 }} maxW="1000px" spacing="40px">
          <Center>
            <Box maxW="450px">
              <Icon as={ImQuotesLeft} />
              <Text fontSize="xl" className="lh-md" mb="10px" pl={1}>
                Lee is a reliable business parter and friend. He realy have the
                talent to get something new, he used 2 years becomming a
                full-stack developer from zero.
              </Text>
              <Flex pl={1}>
                <Heading fontSize="sm" pr={1}>
                  SIMON
                </Heading>
                <Heading fontSize="sm" className="fw-lighter">
                  - CE0 @ 5Visual1Feel
                </Heading>
              </Flex>
            </Box>
          </Center>
          <Box maxW="450px">
            <Image src={quotation} />
          </Box>
        </SimpleGrid>
      </Center>
    </>
  );
};

export default Me;
