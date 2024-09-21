import games from "../assets/games.jpeg";
import next from "../assets/next.jpeg";

export default [
  {
    title_en: "A Video Game Showcase Website:",
    title_jp: "一个游戏检索平台:",
    image: games,
    content: [
      "Language: TypeScript",
      "Framework/Library: React.js",
      "API: RAWG API",
      "UI: Chakra UI + Bootstrap",
      "Dev tool: Vite.js",
    ],
    links: {
      name: "Web:",
      web: "GAMEs",
      url: "https://game-hub-henna-seven-83.vercel.app/",
    },
    path: "/product/gamehub",
  },
  {
    title_en: "A Community Website:",
    title_jp: "一个全栈Blog项目:",
    image: next,
    content: [
      "Language: TypeScript",
      "Framework/Library: Next.js",
      "UI: Radix UI + Tailwind CSS",
    ],
    links: {
      name: "Web:",
      web: "BLOGs",
      url: "#",
    },
    path: "/product/community",
  },
];
