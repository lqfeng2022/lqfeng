import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const CardContainer = ({ children }: Props) => {
  return (
    <Box
      maxW="700px"
      _hover={{
        transform: "scale(1.02)",
        transition: "transform .15s ease-in",
      }}
    >
      {children}
    </Box>
  );
};

export default CardContainer;
