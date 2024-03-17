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
      <Box maxW="620px">
        <Show above="md">
          <Box h={course.h} />
        </Show>
        <Box>
          <Image src={course.image} paddingY="5px" />
          <Heading fontSize="sm" marginBottom="2px">
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
