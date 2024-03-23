import { Heading, Link, Text } from "@chakra-ui/react";

interface Links {
  title: string;
  content: string;
  url: string;
}
const ContentWithLink = ({ link }: { link: Links }) => {
  return (
    <Heading fontSize="sm" m="0" className="fw-lighter lh-lg">
      {link.title}{" "}
      <Link href={link.url} color="gray.600">
        <Text className="fst-italic" as="u">
          {link.content}
        </Text>
      </Link>
    </Heading>
  );
};

export default ContentWithLink;
