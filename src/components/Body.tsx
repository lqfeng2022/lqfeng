import {
  Box,
  Center,
  Heading,
  Image,
  Show,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import algorithm from "../assets/algorithm.jpeg";
import data_structure from "../assets/data_structure.png";
import django from "../assets/django.jpg";
import english from "../assets/english.jpg";
import french from "../assets/french.jpeg";
import japanese from "../assets/japanese.jpeg";
import python_log from "../assets/python_log.jpg";
import pytorch from "../assets/pytorch.jpeg";

export const Body = () => {
  return (
    <>
      {/* 1)Self-introduction */}
      <Box padding={5} maxW="500px">
        <Heading fontSize="sm" paddingBottom={5}>
          HI, WELCOM TO MY HOMEPAGE.
        </Heading>
        <Text fontSize="xl" as="i">
          I'm Simon, a web developer. And I'm passionate about languages,
          whatever human nature languages or programming languages. One day I
          suppose we can really understand animal languages and even communicate
          with them using AI soon.
        </Text>
      </Box>
      {/* 2)Python crash course */}
      <Center>
        <Box padding="30px" maxW="1200px">
          <Image src={python_log} paddingY="5px" />
          <Heading as="u" fontSize="sm" paddingY="10px">
            <a href="#">PYTHON CRASH COURSE</a>
          </Heading>
          <Text fontSize="sm" className="fw-lighter fst-italic">
            Everything you need to program in Python is here
          </Text>
        </Box>
      </Center>
      {/* 3)Data structure & Algorithm */}
      <Center>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          paddingX={5}
          spacing={1}
          maxW="1200px"
        >
          <Center>
            <Box padding="5px" maxW="580px">
              <Image padding="5px" src={data_structure} paddingY="5px" />
              <Heading as="u" fontSize="sm" paddingY="10px">
                <a href="#">DATA STRUCTURE</a>
              </Heading>
              <Text fontSize="sm" className="fw-lighter fst-italic">
                With visualization way to learn all data structures
              </Text>
            </Box>
          </Center>
          <Center>
            <Box padding="5px" maxW="580px">
              <Show above="md">
                <Box h="50px"></Box>
              </Show>
              <Image src={algorithm} paddingY="5px" />
              <Heading as="u" fontSize="sm" paddingY="10px">
                <a href="#">ALGORITHM</a>
              </Heading>
              <Text fontSize="sm" className="fw-lighter fst-italic">
                Ace your coding job interview in a clean way
              </Text>
            </Box>
          </Center>
        </SimpleGrid>
      </Center>
      {/* 4)pytorch & django */}
      <Center>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          paddingX={5}
          spacing={1}
          maxW="1200px"
        >
          <Center>
            <Box padding="5px" maxW="580px">
              <Show above="md">
                <Box h="50px"></Box>
              </Show>
              <Image padding="5px" src={pytorch} />
              <Heading as="u" fontSize="sm" paddingY="10px">
                <a href="#">PYTORCH</a>
              </Heading>
              <Text fontSize="sm" className="fw-lighter fst-italic">
                Learn building and deploying deep learning models
              </Text>
            </Box>
          </Center>
          <Center>
            <Box padding="5px" maxW="580px">
              <Image src={django} paddingY="5px" />
              <Heading as="u" fontSize="sm" paddingY="10px">
                <a href="#">DJANGO</a>
              </Heading>
              <Text fontSize="sm" className="fw-lighter fst-italic">
                Learn to build fast and secure APIs with Django and MySQL
              </Text>
            </Box>
          </Center>
        </SimpleGrid>
      </Center>
      {/* 5)japanese & french */}
      <Center>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          paddingX={5}
          spacing={1}
          maxW="1200px"
        >
          <Center>
            <Box padding="10px" maxW="580px">
              <Image padding="5px" src={japanese} />
              <Heading as="u" fontSize="sm" paddingY="10px">
                <a href="#">JAPANESE</a>
              </Heading>
              <Text fontSize="sm" className="fw-lighter fst-italic">
                Learn japanese conversation
              </Text>
            </Box>
          </Center>
          <Center>
            <Box padding="10px" maxW="580px">
              <Show above="md">
                <Box h="50px"></Box>
              </Show>
              <Image src={french} paddingY="5px" />
              <Heading as="u" fontSize="sm" paddingY="10px">
                <a href="#">FRENCH</a>
              </Heading>
              <Text fontSize="sm" className="fw-lighter fst-italic">
                Learn french conversation
              </Text>
            </Box>
          </Center>
        </SimpleGrid>
      </Center>
      {/* 6)english */}
      <Center>
        <SimpleGrid columns={{ sm: 1, md: 2 }} paddingX={5} maxW="1200px">
          <Center>
            <Box padding="10px" maxW="900px">
              <Image paddingY="5px" src={english} />
              <Heading as="u" fontSize="sm" paddingY="10px">
                <a href="#">ENGLISH</a>
              </Heading>
              <Text fontSize="sm" className="fw-lighter fst-italic">
                Learn english conversation
              </Text>
            </Box>
          </Center>
        </SimpleGrid>
      </Center>
    </>
  );
};
