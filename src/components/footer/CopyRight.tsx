import { Heading, Icon, Text } from "@chakra-ui/react";
import { TFunction } from "i18next";
import { IoHeart } from "react-icons/io5";

const CopyRight = ({ t, jp }: { t: TFunction; jp: boolean }) => {
  return (
    <>
      {jp ? (
        <Text textAlign="center" as="i" fontSize="sm">
          {t("footer.copyright")}
          <Icon boxSize="25px" pl="5px" as={IoHeart} color="red.400" />
        </Text>
      ) : (
        <Heading
          textAlign="center"
          pr={1}
          as="i"
          fontSize="sm"
          className="fw-lighter"
        >
          {t("footer.copyright")}
          <Icon boxSize="20px" mb="3px" as={IoHeart} color="red.400" />
        </Heading>
      )}
    </>
  );
};

export default CopyRight;
