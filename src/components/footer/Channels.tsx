import { Center, Heading, HStack, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { TFunction } from "i18next";
import { FaGithub, FaTiktok, FaYoutube } from "react-icons/fa";

const Channels = ({ t, jp }: { t: TFunction; jp: boolean }) => {
  return (
    <Stack>
      {jp ? (
        <Text textAlign="center" my={1} pr={1} fontSize="sm">
          {t("footer.channels")}
        </Text>
      ) : (
        <Heading
          my={1}
          pr={1}
          textAlign="center"
          fontSize="sm"
          className="fw-lighter"
        >
          {t("footer.channels")}
        </Heading>
      )}
      <Center>
        <HStack spacing="20px">
          <Icon as={FaYoutube} boxSize="25px" color="gray.600" />
          <Icon as={FaTiktok} boxSize="25px" color="gray.600" />
          <Link target="_blank" href="https://github.com/lqfeng2022">
            <Icon as={FaGithub} boxSize="25px" color="gray.600" />
          </Link>
        </HStack>
      </Center>
    </Stack>
  );
};

export default Channels;
