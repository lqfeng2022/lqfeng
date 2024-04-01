import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Course {
  title: string;
  subTitle_en: string;
  subTitle_jp: string;
  image: string;
  h1: string;
  h2: string;
  url: string;
}

interface Props {
  course: Course;
  jp: boolean;
  uline: string;
}

const CourseCard = ({ course, jp, uline }: Props) => {
  return (
    <Center>
      <Box maxW="708px">
        <Box hideBelow="md" h={course.h1} />
        <Box>
          <Box maxW="700px">
            <Link to={course.url}>
              <Image src={course.image} />
            </Link>
          </Box>
          <Heading fontSize="sm" my="10px">
            <Link to="#" className={uline} style={{ letterSpacing: "1px" }}>
              {course.title}
            </Link>
          </Heading>
          {jp ? (
            <Text fontSize="sm" mb="5.62px" className="fst-italic">
              {course.subTitle_jp}
            </Text>
          ) : (
            <Heading fontSize="sm" className="fw-lighter fst-italic">
              {course.subTitle_en}
            </Heading>
          )}
        </Box>
        <Box hideBelow="md" h={course.h2} />
      </Box>
    </Center>
  );
};

export default CourseCard;
