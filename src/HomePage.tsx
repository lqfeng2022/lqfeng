import { Box, Center, SimpleGrid, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Clipwords from "./components/work/Clipwords";
import AgentCard from "./components/work/AgentCard";
import DavidCard from "./components/work/DavidCard";
import AgentIntroduce from "./components/work/AgentIntroduce";
import agents from "./data/agents";

function HomePage() {
  const [t, i18n] = useTranslation("global");
  const jp = i18n.language.startsWith("jp");

  const oneSpace = { letterSpacing: "1px" };
  
  const { colorMode } = useColorMode();
  const uline = (colorMode === "light") ? "border-bottom border-dark" : "border-bottom";

  return (
    <>
      <Box px="5px" py="35px" maxW="500px">
        <AgentIntroduce jp={jp} t={t} oneSpace={oneSpace} />
      </Box>
      <Box p="15px" pb="35px">
        <Clipwords jp={jp} t={t} oneSpace={oneSpace} />
      </Box>
      <Center>
        <Box p="15px" pb={10} maxW="1200px">
          <DavidCard jp={jp} t={t} uline={uline} />
        </Box>
      </Center>
      <Center>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          p="15px"
          spacing="20px"
          maxW="1200px"
        >
          {agents.map((agent) => (
            <AgentCard 
              key={agent.title_en} 
              course={agent} 
              jp={jp} 
              uline={uline} 
            />
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
}

export default HomePage;
