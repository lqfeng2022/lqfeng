import { Center } from "@chakra-ui/react";
import Debackground from "../components/projects/Debackground";
import GameHub from "../components/projects/GameHub";
import Project from "../components/projects/Project";
import Community from "../components/projects/Community";

const Product = () => {
  return (
    <>
      <Center p="30px" pt="50px">
        <Project />
      </Center>
      <Center p="30px">
        <GameHub />
      </Center>
      <Center p="30px">
        <Community />
      </Center>
      <Center p="30px">
        <Debackground />
      </Center>
    </>
  );
};

export default Product;
