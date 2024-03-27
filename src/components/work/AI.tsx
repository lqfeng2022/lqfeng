import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import ai2 from "../../assets/ai2.jpeg";

const Course = () => {
  return (
    <Center>
      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        maxW="1200px"
        p="20px"
        spacing="20px"
      >
        <Box maxW="708px">
          <Image src={ai2} />
        </Box>
        <Flex>
          <Box maxW="500px">
            <Text fontSize="3xl">
              Do we need to learn coding in 2024 the Age of AI?
            </Text>
            <Text fontSize="xl">
              人工知能次代にコードを身につける必要がありますか？
            </Text>
            <Heading fontSize="md" className="fw-lighter lh-lg">
              AI is becomming so powerful espacially as ChatGPT launched. It's
              so smart and can do lots of tech stuff by itself, like coding. I
              think most of us should learn programming. Cus it can help you
              understand how computers and AI work, it is super important
              because they're everywhere now and future.
            </Heading>
            <Text fontSize="md" style={{ letterSpacing: "1px" }}>
              ChatGPT3.5が誕生する前に、人工知能が人工アホだといれています。これは個人的な認識です。
              でもねえ、GPTの能力が世の中にすごく強い印象が残っています。
              人間っぽいチャットとか、翻訳とか、コーディングとか、何とか早くて答えること出来ます。
              なぜこんなにすごいAIモデルが生まれていますか、これはコードの魅力だと思います。
              コードのスキルを身につけることが必要になりそうです。しかも、プログラミングができれば、
              コンピューターやAIがどうプロセスするかを理解しやすです。
              これからは世の中にAIに関わることどんどん増えていますが、
              もしAIが分からなくて使用出来ない人間がクズになっちゃた。
            </Text>
            <Heading py={3} fontSize="md" className="fw-lighter lh-lg">
              Plus, when you know how to code, you can tell the AI exactly what
              you want it to do to make your own cool projects. And even help
              make AI smarter and safer for everyone.
            </Heading>
            <Text py={3} fontSize="md" style={{ letterSpacing: "1px" }}>
              さらに、コーディングのスキルを身につければ、AIに何をやってあげたいとか明確的に伝えることができます。
              それに従って、優れたアプリとかAIモデルとか作成にすることが出来ます。
              しかも、みんなの努力をあつめて、AIがもっとスマトとセキュリティになっています。
            </Text>
          </Box>
          <Box hideBelow="md" w="5px" pr="30px" />
        </Flex>
      </SimpleGrid>
    </Center>
  );
};

export default Course;
