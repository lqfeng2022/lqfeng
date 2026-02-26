import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import react_app_001 from "../../assets/react-app-001.jpeg";
import react_app_002 from "../../assets/react-app-002.jpeg";
import react_app_003 from "../../assets/react-app-003.jpeg";
import { useTranslation } from 'react-i18next';

const ClipwordsReact = () => {
  const [t, i18n] = useTranslation("global");
  
  return (
    <>
      {/* intro */}
      <SimpleGrid 
        templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
        spacing="20px"
        px="18px"
        py="50px"
      >
        <Image 
          src={react_app_001} 
          border="0.5px solid"
          borderColor="gray.600"
          order={{ base: 1, lg: 1 }}
        />
        <Box 
          maxW="700px" 
          order={{ base: 2, lg: 2 }}
        >
          <Text fontSize="3xl">
            {t("react.intro.head")}
          </Text>
          <Heading fontSize="md" className="fw-lighter lh-lg">
            {t("react.intro.body")}
          </Heading>
          <Heading py={3} fontSize="md" className="fw-lighter lh-lg">
            {t("react.intro.foot")}
          </Heading>
        </Box>
      </SimpleGrid>
      {/* stack */}
      <SimpleGrid 
        templateColumns={{ base: "1fr", lg: "1fr 2fr" }}
        spacing="20px"
        px="18px"
        pb={{base: "", lg: "50px"}}
      >
        <Box 
          maxW="700px" 
          order={{ base: 2, lg: 2 }}
        >
          <Text fontSize="3xl">
            {t("react.stack.head")}
          </Text>
          <Heading fontSize="md" className="fw-lighter lh-lg">
            {t("react.stack.body")}
          </Heading>
          <Heading py={3} fontSize="md" className="fw-lighter lh-lg">
            {t("react.stack.foot")}
          </Heading>
        </Box>
        <Image 
          src={react_app_003} 
          border="0.5px solid"
          borderColor="gray.600"
          order={{ base: 1, lg: 2 }}
        />
      </SimpleGrid>
      {/* case */}
      <SimpleGrid 
        templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
        spacing="20px"
        px="18px"
        py="50px"
      >
        <Image 
          src={react_app_002} 
          border="0.5px solid"
          borderColor="gray.600"
          order={{ base: 1, lg: 1 }}
        />
        <Box 
          maxW="700px" 
          order={{ base: 2, lg: 1 }}
        >
          <Text fontSize="3xl">
            {t("react.case.head")}
          </Text>
          <Heading fontSize="md" className="fw-lighter lh-lg">
            {t("react.case.body")}
          </Heading>
          <Heading py={3} fontSize="md" className="fw-lighter lh-lg">
            {t("react.case.foot")}
          </Heading>
        </Box>
      </SimpleGrid>
    </>
  )
}

export default ClipwordsReact