import { Center } from "@chakra-ui/react";
import Debackground from "../components/Debackground";
import GameHub from "../components/GameHub";
import Project from "../components/Project";
import Community from "../components/Community";

const Product = () => {
  return (
    <>
      <Center p="30px" pt="50px">
        <Project />
      </Center>
      <Center p="30px">
        <Community />
      </Center>
      <Center p="30px">
        <GameHub />
      </Center>
      <Center p="30px">
        <Debackground />
      </Center>
    </>
  );
};

export default Product;
