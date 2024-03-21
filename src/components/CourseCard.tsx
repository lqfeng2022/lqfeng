import { Box, Center, Heading, Image, Show } from "@chakra-ui/react";

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
      <Box maxW="708px">
        <Show above="md">
          <Box h={course.h} />
        </Show>
        <Box>
          <Box className="border border-dark">
            <Image src={course.image} />
          </Box>
          <Heading fontSize="sm" mb="6px" pt="8px">
            <a
              href="#"
              className="border-bottom border-dark"
              style={{ letterSpacing: "1px" }}
            >
              {course.title}
            </a>
          </Heading>
          <Heading fontSize="sm" className="fw-lighter fst-italic">
            {course.subTitle}
          </Heading>
        </Box>
      </Box>
    </Center>
  );
};

export default CourseCard;
