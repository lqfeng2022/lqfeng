import {
  Box,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Detail {
  title_en: string;
  title_jp: string;
  content: string[];
  links: { name: string; web: string; url: string };
  image: string;
  path: string;
}

const ProjectDetails = ({ details }: { details: Detail }) => {
  const [t, i18n] = useTranslation("global");
  const jp = i18n.language === "jp";
  const { colorMode } = useColorMode();

  return (
    <Stack>
      <Box maxW="700px">
        <Link to={details.path}>
          <Image src={details.image} />
        </Link>
      </Box>
      <Box>
        <Text my="8px" fontSize="2xl" className="fst-italic">
          {jp ? details.title_jp : details.title_en}
        </Text>
        <Box bg={colorMode === "light" ? "gray.100" : "gray.700"}>
          <UnorderedList m="10px" pl="5px" py={2}>
            {details.content.map((c) => (
              <ListItem key={c}>
                <Heading fontSize="sm" m="0" className="fw-lighter lh-lg">
                  {c}
                </Heading>
              </ListItem>
            ))}
            <ListItem>
              <Heading fontSize="sm" m="0" className="fw-lighter lh-lg">
                {details.links.name}{" "}
                <Link target="_blank" to={details.links.url} color="gray.600">
                  <Text as="b" color="blue.500" className="fst-italic">
                    {details.links.web}
                  </Text>
                </Link>
              </Heading>
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Stack>
  );
};

export default ProjectDetails;
