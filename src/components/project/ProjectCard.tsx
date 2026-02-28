import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import project from "@/assets/project.jpeg";
import { TFunction } from "i18next";

interface Props {
  t: TFunction;
  jp: boolean;
  oneSpace: Object;
}

const ProjectCard = ({ t, jp, oneSpace }: Props) => {
  return (
    <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
      <Box maxW="700px">
        <Image src={project} />
      </Box>
      <Box maxW="700px" pr="40px">
        <Text fontSize={jp ? "2xl" : "3xl"}>
          {t("product.app.head")}
        </Text>
        <Text fontSize={jp ? "sm" : "xl"} style={jp ? oneSpace : {}} className="fw-light">
          {t("product.app.body")}
        </Text>
        {jp ? (
          <>
            <Text py={3} fontSize="sm" style={oneSpace} className="fw-light">
              {t("product.app.foot")}
            </Text>
            <Text pt="50px" fontSize="sm" style={oneSpace}>
              {t("product.app.toe")}
            </Text>
          </>
        ) : (
          <>
            <Heading py={3} fontSize="md" className="fw-lighter lh-base">
              {t("product.app.foot")}
            </Heading>
            <Heading pt="50px" fontSize="sm">
              {t("product.app.toe")}
            </Heading>
          </>
        )}
      </Box>
    </SimpleGrid>
  );
};

export default ProjectCard;
