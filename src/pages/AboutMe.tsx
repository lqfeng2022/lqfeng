import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";
import ai from "../assets/ai.jpeg";
import book from "../assets/book.jpg";
import simon from "../assets/lqfeng.jpeg";
import quotation from "../assets/quotation.jpeg";

const AboutMe = () => {
  return (
    <>
      {/* 1)Introduce myself */}
      <Center px="20px" py="35px">
        <SimpleGrid columns={{ sm: 1, md: 2 }} maxW="1000px" spacing="40px">
          <Box>
            <Image src={simon} />
            <Box hideBelow="md" h="100px" />
          </Box>
          <Box>
            <Box hideBelow="md" h="180px" />
            <Heading fontSize="sm" style={{ letterSpacing: "1px" }}>
              HI, I'M SIMON.
            </Heading>
            <Text fontSize="sm">シーモンと申します。</Text>
            <Text fontSize="2xl" pt={6}>
              A developer for helping you build your own application. I'm
              passionate about AI and nature languages, like le français and
              japanese. What if I trained an personality AI assistant who can
              help people learning languages and building apps, that's gonna be
              fun!
            </Text>
            <Text fontSize="lg" pt={6} style={{ letterSpacing: "1px" }}>
              ウェブエンジニアとしてアプリ開発のことをやっています。
              ずっとアジアと欧米の文化とか、歴史とか興味を持っています。
              プログラミングとAIにも興味あるし、去年から人工知能のニュースがずっと炎上しています。
              AIはどんどんが人々の周りに出ていますが、これからAI話がよく進んでいる予定です。
              AIが何ですか、どうAIモデルをトレーニングしますか、AIで会社と学校の困りをどう解けますか。
            </Text>
          </Box>
        </SimpleGrid>
      </Center>
      {/* 2)What's my work */}
      <Center p="20px" pt="0">
        <Stack>
          <SimpleGrid columns={[1, null, 2]} maxW="1000px" spacing="40px">
            <Box maxW="500px">
              <Text fontSize="xl" className="fst-italic">
                0. What am I doing now?
              </Text>
              <Text fontSize="xl" style={{ letterSpacing: "1px" }}>
                0. 何をやっていますか、今？
              </Text>
              <Heading fontSize="md" className="fw-lighter lh-lg">
                As a web developer, I'm building serveral personal apps, like
                Background remover app with Computer Vision model. Plus, I'm
                preparing a serial coding and english conversation lessons.
              </Heading>
              <Text fontSize="md" style={{ letterSpacing: "1px" }}>
                ウェブエンジニアとして、ウェブアプリを作っています。
                それはイメージのバックグラウンドを削除するアプリとか、ブログとか、ゲーム検索ようのウェブです。
                しかも、コード、AIと英語会話に関わる動画とアプリもシリーズとして作成することもスケジュールしています。
              </Text>
            </Box>
          </SimpleGrid>
          <Box maxW="1000px">
            <Image src={ai} />
          </Box>
        </Stack>
      </Center>
      {/* 3)My education background and career */}
      <Center p="20px">
        <SimpleGrid columns={[1, null, 2]} maxW="1000px" spacing="40px">
          <Box>
            <Image src={book} />
          </Box>
          <Box>
            <Text fontSize="xl" className="fst-italic">
              1. What's my eduction background?
            </Text>
            <Text fontSize="xl" style={{ letterSpacing: "1px" }}>
              1. 教育背景は何ですか？
            </Text>
            <Heading fontSize="md" className="fw-lighter lh-lg">
              A graduate of Hubei University of Technology in Wuhan. I love
              philosophy, read some books about Laozi, Buddha, and Descartes.
              And I am a big fun of GIBLI, so I started to know more about
              Japanese culture and history in college.
            </Heading>
            <Text fontSize="md" style={{ letterSpacing: "1px" }}>
              中国のある大学に工科専門生として卒業しました。
              学生時代に哲学に興味あり、老子、仏陀、デカルトの本をよく読みます。
              GHIBLIも大好きだから、それをきっかけて日本文化とか歴史とかどんどん知っていますが、日本語能力もアップしています。
            </Text>
            <Box paddingTop={4} my={5} className="border-bottom border-dark" />
            <Text fontSize="xl" pt={3} className="fst-italic">
              2. What's my career?
            </Text>
            <Text fontSize="xl" pt={3} style={{ letterSpacing: "1px" }}>
              2. 卒業後の仕事はどう？
            </Text>
            <Heading fontSize="md" className="fw-lighter lh-lg">
              I used to be an engineer in a Japanese company for some years. And
              before that I worked as a sales in an export traiding company.
            </Heading>
            <Text fontSize="md" style={{ letterSpacing: "1px" }}>
              初めて、ある貿易会社に対日業務のことをやっています。
              その後はずっと構造関係のエンジニアとして勤めています。
            </Text>
          </Box>
        </SimpleGrid>
      </Center>
      {/* 4)Who are you through others' eyes */}
      <Center p="20px">
        <SimpleGrid columns={{ base: 1, sm: 2 }} maxW="1000px" spacing="40px">
          <Center>
            <Box maxW="450px">
              <Text fontSize="xl" mb="10px" className="lh-md">
                <Icon boxSize="25px" as={FaQuoteLeft} pr={2} pb={3} />
                Lee is a reliable business parter and friend. He have a talent
                to get something new quickly, he took 1 year becomming a
                full-stack developer from zero.
              </Text>
              <Text fontSize="md" mb="10px" style={{ letterSpacing: "1px" }}>
                <Icon boxSize="25px" as={FaQuoteLeft} pr={2} pb={3} />
                リーさんは信頼できるビジネスパートナーと友たちです。
                新しいものを早く身につける才能がりますが、1年だけでゼロからのフルスタックの開発者になりました。
                素晴らしい。
              </Text>
              <Flex>
                <Heading fontSize="sm">SIMON </Heading>
                <Heading fontSize="sm" className="fw-lighter">
                  - CE0 @ 5Visual1Feel
                </Heading>
              </Flex>
            </Box>
          </Center>
          <Box maxW="450px">
            <Image src={quotation} />
          </Box>
        </SimpleGrid>
      </Center>
    </>
  );
};

export default AboutMe;
