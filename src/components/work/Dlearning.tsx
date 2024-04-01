import { Heading, Image, Text } from "@chakra-ui/react";
import { TFunction } from "i18next";
import { Link } from "react-router-dom";
import dlearing from "../../assets/dlearing.jpeg";

interface Props {
  jp: boolean;
  t: TFunction;
  uline: string;
}

const Dlearning = ({ jp, t, uline }: Props) => {
  return (
    <>
      <Link to="/work/dlearning">
        <Image src={dlearing} />
      </Link>
      <Heading fontSize="sm" my="10px">
        <Link
          to="/work/dlearing"
          className={uline}
          style={{ letterSpacing: "1px" }}
        >
          {t("hp.dlearn.head")}
        </Link>
      </Heading>
      {jp ? (
        <Text fontSize="sm" className="fst-italic">
          {t("hp.dlearn.body")}
        </Text>
      ) : (
        <Heading fontSize="sm" className="fw-lighter fst-italic">
          {t("hp.dlearn.body")}
        </Heading>
      )}
    </>
  );
};

export default Dlearning;
