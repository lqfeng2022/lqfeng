import games from "../assets/games.jpeg";
import next from "../assets/next.jpeg";
import q2_room from "../assets/q2room.jpeg";

export default [
  {
    title_en: "A Video Game Display Web:",
    title_jp: "ビデオゲーム情報を検索用のアプリ",
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
    title_en: "A Community Web:",
    title_jp: "ブログのようなウェブ",
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
  {
    title_en: "A Background Remover Web:",
    title_jp: "写真のバックを削除するウェブ",
    image: q2_room,
    content: [
      "Language: JavaScript",
      "Framework/Library: React.js",
      "UI: Radix UI + Bootstrap CSS",
    ],
    links: {
      name: "Web:",
      web: "Q2 ROOM",
      url: "https://q2-room.vercel.app/",
    },
    path: "/product/q2room",
  },
];
