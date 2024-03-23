import {
  Box,
  Flex,
  Image,
  ListItem,
  OrderedList,
  Show,
  SimpleGrid,
} from "@chakra-ui/react";
import python2 from "../../assets/python2.jpeg";
import Content from "../Content";
import Title from "../Title";

const Python = () => {
  const contents = [
    { name: "Easy to learn, even for kids." },
    { name: "Solve complex problem with fewer code." },
    { name: "Python is multiple-purpose for Apps/AI/DATA analysis." },
    { name: "High salary for 123k/y everage." },
  ];

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} maxW="1200px" spacing="30px">
      <Box maxW="500px">
        <Title name="Python" />
        <OrderedList m="10px" pl="10px">
          {contents.map((c) => (
            <ListItem key={c.name}>
              <Content name={c.name} />
            </ListItem>
          ))}
        </OrderedList>
      </Box>
      <Flex>
        <Box maxW="500px" className="border border-dark">
          <Image src={python2} />
        </Box>
        <Show above="md">
          <Box w={1} px="20px" />
        </Show>
      </Flex>
    </SimpleGrid>
  );
};

export default Python;
