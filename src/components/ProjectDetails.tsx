import {
  Box,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  Image,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CardContainer from "./CardContainer";

interface Detail {
  title: string;
  content: string[];
  links: { name: string; web: string; url: string };
  image: string;
  path: string;
}

const ProjectDetails = ({ details }: { details: Detail }) => {
  return (
    <Stack>
      <Text fontSize="2xl" className="fst-italic">
        {details.title}
      </Text>
      <CardContainer>
        <Link to={details.path}>
          <Image src={details.image} />
        </Link>
      </CardContainer>
      <Box>
        <Box bg="gray.100">
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
                <Link to={details.links.url} color="gray.600">
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
