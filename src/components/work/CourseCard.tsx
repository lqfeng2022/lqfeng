import { Box, Center, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CardContainer from "../CardContainer";

export interface Course {
  title: string;
  subTitle: string;
  image: string;
  h1: string;
  h2: string;
  url: string;
}

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Center>
      <Box maxW="708px">
        <Box hideBelow="md" h={course.h1} />
        <Box>
          <CardContainer>
            <Link to={course.url}>
              <Image src={course.image} />
            </Link>
          </CardContainer>
          <Heading fontSize="sm" my="10px">
            <Link
              to="#"
              className="border-bottom border-dark"
              style={{ letterSpacing: "1px" }}
            >
              {course.title}
            </Link>
          </Heading>
          <Heading fontSize="sm" className="fw-lighter fst-italic">
            {course.subTitle}
          </Heading>
        </Box>
        <Box hideBelow="md" h={course.h2} />
      </Box>
    </Center>
  );
};

export default CourseCard;
