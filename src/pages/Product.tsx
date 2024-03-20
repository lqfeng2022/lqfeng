import { Center } from "@chakra-ui/react";
import Debackground from "../components/Debackground";
import GameHub from "../components/GameHub";
import Project from "../components/Project";

const Product = () => {
  return (
    <>
      <Center px="30px" py="25px">
        <Project />
      </Center>
      <Center px="30px" py="25px">
        <GameHub />
      </Center>
      <Center px="30px" pt="25px">
        <Debackground />
      </Center>
    </>
  );
};

export default Product;
