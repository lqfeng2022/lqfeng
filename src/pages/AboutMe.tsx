import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ImQuotesLeft } from "react-icons/im";
import ai from "../assets/ai.jpeg";
import book from "../assets/book.jpg";
import simon from "../assets/lqfeng.jpeg";
import quotation from "../assets/quotation.jpeg";

const AboutMe = () => {
  return (
    <>
      {/* 1)Introduce myself */}
      <Center p="20px">
        <SimpleGrid columns={{ sm: 1, md: 2 }} maxW="1000px" spacing="40px">
          <Box>
            <Image src={simon} />
            <Box hideBelow="md" h="100px" />
          </Box>
          <Box>
            <Box hideBelow="md" h="180px" />
            <Heading fontSize="sm">HI, I'M SIMON.</Heading>
            <Text fontSize="2xl" pt={6}>
              A developer for helping you build your own business. I'm
              passionate about AI and nature languages, like le français and
              japanese. What if I trained an personality AI assistant who can
              help people learning languages and building apps, that's gonna be
              fun!
            </Text>
          </Box>
        </SimpleGrid>
      </Center>
      {/* 2)What's my work */}
      <Center p="20px" pt="0">
        <Stack>
          <SimpleGrid columns={[1, null, 2]} maxW="1000px" spacing="40px">
            <Box maxW="500px">
              <Text fontSize="xl" className="fst-italic">
                0. What am I doing now?
              </Text>
              <Heading fontSize="md" className="fw-lighter lh-lg">
                As a web developer, I'm building serveral personal apps, like
                Background remover app with Computer Vision model. Plus, I'm
                preparing a serial coding and english conversation lessons.
              </Heading>
            </Box>
          </SimpleGrid>
          <Box maxW="1000px">
            <Image src={ai} />
          </Box>
        </Stack>
      </Center>
      {/* 3)My education background and career */}
      <Center p="20px">
        <SimpleGrid columns={[1, null, 2]} maxW="1000px" spacing="40px">
          <Box>
            <Image src={book} />
          </Box>
          <Box>
            <Text fontSize="xl" className="fst-italic">
              1. What's my eduction background?
            </Text>
            <Heading fontSize="md" className="fw-lighter lh-lg">
              A graduate of Hubei University of Technology in Wuhan. I love
              philosophy, read some books about Laozi, Buddha, and Descartes.
              And I am a big fun of GIBLI, so I started to know more about
              Japanese culture and history in college.
            </Heading>
            <Box paddingTop={4} my={5} className="border-bottom border-dark" />
            <Text fontSize="xl" pt={3} className="fst-italic">
              2. What's my career?
            </Text>
            <Heading fontSize="md" className="fw-lighter lh-lg">
              I used to be an engineer in a Japanese company for some years. And
              before that I worked as a sales in an export traiding company.
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
                Lee is a reliable business parter and friend. He have a talent
                to get something new quickly, he took 1 year becomming a
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

export default AboutMe;
