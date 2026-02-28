import { SimpleGrid, Box, Heading, Image, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';

interface Props {
  image_left: boolean,
  image: string,
  head: string,
  body: string,
  foot: string,
}
const ProductContainer = ({ image_left, image, head, body, foot }: Props) => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
    {image_left ? (
      <SimpleGrid 
        templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
        spacing="20px"
        px="18px"
        py="50px"
      >
        <Image 
          src={image} 
          border="0.5px solid"
          borderColor="gray.600"
          order={{ base: 1, lg: 1 }}
        />
        <Box 
          maxW="700px" 
          order={{ base: 2, lg: 2 }}
        >
          <Text fontSize="3xl">
            {t(head)}
          </Text>
          <Heading fontSize="md" className="fw-lighter lh-base">
            {t(body)}
          </Heading>
          <Heading py={3} fontSize="md" className="fw-lighter">
            {t(foot)}
          </Heading>
        </Box>
      </SimpleGrid>
    ) : (
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
            {t(head)}
          </Text>
          <Heading fontSize="md" className="fw-lighter lh-base">
            {t(body)}
          </Heading>
          <Heading py={3} fontSize="md" className="fw-lighter lh-lg">
            {t(foot)}
          </Heading>
        </Box>
        <Image 
          src={image} 
          border="0.5px solid"
          borderColor="gray.600"
          order={{ base: 1, lg: 2 }}
        />
      </SimpleGrid>
    )}
    </>
  )
}

export default ProductContainer