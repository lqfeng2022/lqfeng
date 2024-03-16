import { Box, Center, Heading, Image, Show, Text } from "@chakra-ui/react";

interface Course {
  id: number;
  title: string;
  subTitle: string;
  image: string;
  h: string;
}

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Center>
      <Box maxW="580px">
        <Show above="md">
          <Box h={course.h} />
        </Show>
        <Image src={course.image} paddingY="5px" />
        <Heading as="u" fontSize="sm" paddingY="10px">
          <a href="#">{course.title}</a>
        </Heading>
        <Text fontSize="sm" className="fw-lighter fst-italic">
          {course.subTitle}
        </Text>
      </Box>
    </Center>
  );
};

export default CourseCard;
