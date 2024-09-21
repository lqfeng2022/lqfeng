import { Heading, Image, Text } from "@chakra-ui/react";
import { TFunction } from "i18next";
import { Link } from "react-router-dom";
import attention from "../../assets/attention.jpeg";

interface Props {
  jp: boolean;
  t: TFunction;
  uline: string;
}

const Dlearning = ({ jp, t, uline }: Props) => {
  return (
    <>
      <Link to="/work/transmodel">
        <Image src={attention} />
      </Link>
      <Heading fontSize="sm" my="10px">
        <Link
          to="/work/transmodel"
          className={uline}
          style={{ letterSpacing: "1px" }}
        >
          {t("hp.transmodel.head")}
        </Link>
      </Heading>
      {jp ? (
        <Text fontSize="sm" className="fst-italic">
          {t("hp.transmodel.body")}
        </Text>
      ) : (
        <Heading fontSize="sm" className="fw-lighter fst-italic">
          {t("hp.transmodel.body")}
        </Heading>
      )}
    </>
  );
};

export default Dlearning;
