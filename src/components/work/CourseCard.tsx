import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CardContainer from "../CardContainer";
import { useTranslation } from "react-i18next";

export interface Course {
  title: string;
  subTitle_en: string;
  subTitle_jp: string;
  image: string;
  h1: string;
  h2: string;
  url: string;
}

const CourseCard = ({ course }: { course: Course }) => {
  const [t, i18n] = useTranslation("global");
  const jp = i18n.language === "jp";

  const { colorMode } = useColorMode();
  const lightDarkSwitch =
    colorMode === "light" ? "border-bottom border-dark" : "border-bottom";

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
              className={lightDarkSwitch}
              style={{ letterSpacing: "1px" }}
            >
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
