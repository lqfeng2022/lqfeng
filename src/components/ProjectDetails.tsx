import { Box, ColorMode, Heading, Image, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Detail {
  title_en: string;
  title_jp: string;
  content: string[];
  links: { name: string; web: string; url: string };
  image: string;
  path: string;
}

interface Props {
  jp: boolean;
  colorMode: ColorMode;
  details: Detail;
}
const ProjectDetails = ({ jp, colorMode, details }: Props) => {
  return (
    <Stack>
      <Box maxW="700px">
        <Link to={details.path}>
          <Image 
            src={details.image} 
            border='1px solid' 
            borderColor='gray.200'
          />
        </Link>
      </Box>
      <Box>
        <Text my="8px" fontSize="2xl" className="fst-italic">
          {jp ? details.title_jp : details.title_en}
        </Text>
        <Box bg={colorMode === "light" ? "gray.100" : "gray.700"}>
          <UnorderedList m="10px" px="15px" py={2}>
            {/* a list of details */}
            {details.content.map((c) => (
              <ListItem key={c}>
                <Heading fontSize="sm" m="0" className="fw-lighter lh-lg">
                  {c}
                </Heading>
              </ListItem>
            ))}
            {/* web link */}
            <ListItem>
              <Heading fontSize="sm" m="0" className="fw-lighter lh-lg">
                {details.links.name}{" "}
                <Link target="_blank" to={details.links.url} color="gray.600">
                  <Text 
                    as="b" 
                    color="blue.500" 
                    className="fst-italic"
                    _hover={{fontWeight: "bold"}}
                  >
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
