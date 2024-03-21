import { Center } from "@chakra-ui/react";
import Developer from "../components/Developer";
import EducationCareer from "../components/EducationCareer";
import SelfIntroduce from "../components/SelfIntroduce";

const Me = () => {
  return (
    <>
      <Center p="30px">
        <SelfIntroduce />
      </Center>
      <Center p="30px">
        <Developer />
      </Center>
      <Center p="30px">
        <EducationCareer />
      </Center>
    </>
  );
};

export default Me;
