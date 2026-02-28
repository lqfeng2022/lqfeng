import { Box, Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { basePrompt, basePrompt_explain, personaPrompt, personaPrompt_explain } from '@/data/david_prompts';

const David = () => {
  return (
    <>
      <Heading fontSize="lg" pl="18px" py={5}>
        David Prompting Settings:
      </Heading>

      {/* base prompt */}
      <Box px="18px">
        <Heading fontSize="md" pb={2}>
          1. Base Prompt:
        </Heading>
        <SimpleGrid 
          templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
          spacing="20px" 
          pb="50px" 
          alignItems="start"
        >
          {/* Prompt Content */}
          {/* in CSS: 
                min-width: auto  (default)
                min-width: 0     (allows shrinking) 
          */}
          <Box minW={0}>
            <SyntaxHighlighter
              language="javascript"
              style={oneLight}
              showLineNumbers
              wrapLongLines
              customStyle={{ fontSize: "10px", lineHeight: "1em" }}
            >
              {basePrompt}
            </SyntaxHighlighter>
          </Box>
          {/* Explanation Blocks */}
          <VStack my={2} spacing={0} align="stretch">
            <Heading pl={2} pt={2} fontSize="md">
              # Base Prompt Explain:
            </Heading>
            {basePrompt_explain.explanation.map((item, index) => (
              <Box key={index} px={2} py={1} borderRadius="md">
                <Heading fontSize="sm" mb={1}>
                  {index+1}. {item.title}
                </Heading>
                <Box fontSize="sm" lineHeight="tall">
                  {item.content}
                </Box>
              </Box>
            ))}
          </VStack>
        </SimpleGrid>
      </Box>

      {/* persona prompt */}
      <Box px="18px">
        <Heading fontSize="md" pb={2}>
          2. Persona Prompt:
        </Heading>
        <SimpleGrid 
          templateColumns={{ base: "1fr", lg: "1fr 2fr" }}
          spacing="20px" pb="50px" 
          alignItems="start"
        >
          {/* Explanation Blocks */}
          <VStack 
            my={2} 
            spacing={0} 
            align="stretch" 
            order={{ base: 2, lg: 2 }}
          >
            <Heading pl={2} pt={2} fontSize="md">
              # Persona Prompt Explain:
            </Heading>
            {personaPrompt_explain.explanation.map((item, index) => (
              <Box key={index} px={2} py={1} borderRadius="md">
                <Heading fontSize="sm" mb={1}>
                  {index+1}. {item.title}
                </Heading>
                <Box fontSize="sm" lineHeight="tall">
                  {item.content}
                </Box>
              </Box>
            ))}
          </VStack>
          {/* Prompt Content */}
          <Box minW={0} order={{ base: 1, lg: 2 }}>
            <SyntaxHighlighter
              language="javascript"
              style={oneLight}
              showLineNumbers
              wrapLongLines
              customStyle={{ fontSize: "10px", lineHeight: "1em" }}
            >
              {personaPrompt}
            </SyntaxHighlighter>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default David;