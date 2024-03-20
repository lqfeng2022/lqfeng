import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import book from "../assets/book.jpg";

const EducationCareer = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="40px">
      <Box maxW="500px">
        <Image src={book} />
      </Box>
      <Box maxW="500">
        <Text fontSize="xl" pb={3} className="fst-italic">
          1. What's my eduction background?
        </Text>
        <Heading fontSize="md" className="fw-lighter lh-lg">
          A graduate of Hubei University of Technology in Wuhan. I love
          philosophy, and I read lots of about Laozi, Buddha, René Descartes
          etc. I am a big fun of GIBLI and I started to know more about Japanese
          culture and history, then I learned Japanese and got N1 in JLPT test.
        </Heading>
        <Box paddingTop={4} my={5} className="border-bottom border-dark" />
        <Text fontSize="xl" py={3} className="fst-italic">
          2. What's my career?
        </Text>
        <Heading fontSize="md" className="fw-lighter lh-lg">
          I used to be a staff in an export trading company, nothing special.
          After that I choosed to be an engineer in a Japanese company.
        </Heading>
      </Box>
    </SimpleGrid>
  );
};

export default EducationCareer;
