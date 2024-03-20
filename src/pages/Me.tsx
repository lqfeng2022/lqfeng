import { Center } from "@chakra-ui/react";
import Developer from "../components/Developer";
import EducationCareer from "../components/EducationCareer";
import SelfIntroduce from "../components/SelfIntroduce";

const Me = () => {
  return (
    <>
      <Center px="30px" pt="25px">
        <SelfIntroduce />
      </Center>
      <Center px="30px" py="25px">
        <Developer />
      </Center>
      <Center px="30px" py="50px">
        <EducationCareer />
      </Center>
    </>
  );
};

export default Me;
