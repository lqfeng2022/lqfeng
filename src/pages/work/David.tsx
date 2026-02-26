import { Box, Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { basePrompt, basePrompt_explain, personaPrompt, personaPrompt_explain } from '../../data/david_prompts';

const David = () => {
  return (
    <>
      <Heading fontSize="md" pb={2}>
        David Prompting Settings:
      </Heading>

      {/* base prompt */}
      <Box px="18px">
        <Heading fontSize="sm" pb={2}>
          1. Base Prompt:
        </Heading>
        <SimpleGrid columns={{ base: 1, lg: 2 }}  spacing="20px" pb="50px" alignItems="start">
          {/* Prompt Content */}
          <Box>
            <SyntaxHighlighter
              language="javascript"
              style={oneLight}
              showLineNumbers
              wrapLongLines
              customStyle={{ fontSize: "12px", lineHeight: "1.4em" }}
            >
              {basePrompt}
            </SyntaxHighlighter>
          </Box>
          {/* Explanation Blocks */}
          <VStack my={2} spacing={0} align="stretch" bg="gray.50">
            <Heading pl={2} pt={2} fontSize="md">
              # Base Prompt Explain:
            </Heading>
            {basePrompt_explain.explanation.map((item, index) => (
              <Box key={index} px={2} py={1} borderRadius="md">
                <Heading fontSize="xs" mb={1}>
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
        <Heading fontSize="sm" pb={2}>
          2. Persona Prompt:
        </Heading>
        <SimpleGrid columns={{ base: 1, lg: 2 }}  spacing="20px" pb="50px" alignItems="start">
          {/* Prompt Content */}
          <Box>
            <SyntaxHighlighter
              language="javascript"
              style={oneLight}
              showLineNumbers
              wrapLongLines
              customStyle={{ fontSize: "12px", lineHeight: "1.4em" }}
            >
              {personaPrompt}
            </SyntaxHighlighter>
          </Box>
          {/* Explanation Blocks */}
          <VStack my={2} spacing={0} align="stretch" bg="gray.50">
            <Heading pl={2} pt={2} fontSize="md">
              # Persona Prompt Explain:
            </Heading>
            {personaPrompt_explain.explanation.map((item, index) => (
              <Box key={index} px={2} py={1} borderRadius="md">
                <Heading fontSize="xs" mb={1}>
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
    </>
  );
};

export default David;