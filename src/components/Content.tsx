import { Heading } from "@chakra-ui/react";

const Content = ({ name }: { name: string }) => {
  return (
    <Heading fontSize="sm" m="0" className="fw-lighter lh-lg">
      {name}
    </Heading>
  );
};

export default Content;
