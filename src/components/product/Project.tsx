import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import project from "../../assets/project.jpeg";

const Project = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} maxW="1200px" spacing="20px">
      <Box maxW="700px">
        <Image src={project} />
      </Box>
      <Box maxW="700px" pr="40px">
        <Text fontSize="3xl">What about build your personal app?</Text>
        <Text fontSize="xl">自分のアプリを作成することが如何ですか？</Text>
        <Text fontSize="lg" style={{ letterSpacing: "1px" }}>
          You can design and build a full-stack app as your first product. A
          popular product can leave peope a great first impression which make
          people stick around you, even it's just an APP not a Photo or Paiting.
          It's the key to attracting audience, to making yourself known to the
          outside world.
        </Text>
        <Text fontSize="lg" style={{ letterSpacing: "1px" }}>
          コードスキルを身に付けたいとあれば、じゃ、ゼロからウェブにオンラインするまで、
          その中の全ての流れが進んで開発したら一番いいだと思います。
          しかも、人気ありのアプリが、人々にいい第一印象を与えることができで、人々はあなたの周りに集めています。
          それは皆さんを引きづけたり、自分自身を人々に知ってもらうための鍵です。
        </Text>
        <Heading py={3} fontSize="md" className="fw-lighter lh-lg">
          Here I'm gonna build a web app from scratch.
        </Heading>
        <Text py={3} fontSize="md" style={{ letterSpacing: "1px" }}>
          ゼロからウェブアプリ作成中で、フロントエンドとバックエンドがこめています。
        </Text>
        <Heading pt="50px" fontSize="sm">
          SEE WHAT I BUILD:
        </Heading>
        <Text pt="50px" fontSize="md" style={{ letterSpacing: "1px" }}>
          ウェブアプリ完成品をご覧ください
        </Text>
      </Box>
    </SimpleGrid>
  );
};

export default Project;
