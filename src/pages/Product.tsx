import { Center } from "@chakra-ui/react";
import Debackground from "../components/Debackground";
import GameHub from "../components/GameHub";
import Project from "../components/Project";
import Community from "../components/Community";

const Product = () => {
  return (
    <>
      <Center px="30px" pt="50px" pb="25px">
        <Project />
      </Center>
      <Center px="30px" py="30px">
        <Community />
      </Center>
      <Center px="30px" py="30px">
        <GameHub />
      </Center>
      <Center px="30px" pt="30px">
        <Debackground />
      </Center>
    </>
  );
};

export default Product;
