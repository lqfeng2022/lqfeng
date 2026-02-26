import { Heading, Image, Text } from "@chakra-ui/react";
import { TFunction } from "i18next";
import { Link } from "react-router-dom";
import ielts from "../../assets/IELTS.webp";

interface Props {
  jp: boolean;
  t: TFunction;
  uline: string;
}
const DavidCard = ({ jp, t, uline }: Props) => {
  return (
    <>
      <Link to="/work/david">
        <Image src={ielts} />
      </Link>
      <Heading fontSize="sm" my="10px">
        <Link
          to="/work/david"
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

export default DavidCard;
