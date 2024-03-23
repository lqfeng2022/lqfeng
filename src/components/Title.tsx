import { Text } from "@chakra-ui/react";

const Title = ({ name }: { name: string }) => (
  <Text fontSize="2xl" className="fst-italic">
    {name}
  </Text>
);

export default Title;
