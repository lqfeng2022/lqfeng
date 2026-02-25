import games from "../assets/games.jpeg";
import blog_hub from "../assets/blog-hub.jpeg";
import simonfy from "../assets/simonfy.jpeg"
import clipwords_hp from "../assets/clipwords-hp.jpeg"
import clipwords_dj from "../assets/clipwords-dj.jpeg"
import node_server from "../assets/node-server.png"

export default [
  {
    title_en: "A Static Web Page:",
    title_jp: "一个纯静态网页:",
    image: simonfy,
    content: [
      "Language: HTML/CSS, JavaScript",
    ],
    links: {
      name: "Web:",
      web: "Simonfy",
      url: "#",
    },
    path: "/product/simonfy",
  },
  {
    title_en: "A Video Game Showcase Website:",
    title_jp: "一个游戏检索平台:",
    image: games,
    content: [
      "Language: TypeScript",
      "Framework: React.js",
      "API: RAWG API",
      "UI: Chakra UI + Bootstrap",
      "Dev tool: Vite.js",
    ],
    links: {
      name: "Web:",
      web: "GAMEs",
      url: "https://game-hub-henna-seven-83.vercel.app/",
    },
    path: "/product/game-hub",
  },
  {
    title_en: "A Blog Website:",
    title_jp: "一个简单的Blog项目:",
    image: blog_hub,
    content: [
      "Language: TypeScript",
      "Framework: Next.js",
      "UI: Radix UI + Tailwind CSS",
    ],
    links: {
      name: "Web:",
      web: "BLOGs",
      url: "#",
    },
    path: "/product/blog-hub",
  },
  {
    title_en: "An AI Tutor Project - Backend:",
    title_jp: "一个AI老师项目之后端:",
    image: clipwords_dj,
    content: [
      "Language: Python",
      "Framework: Django",
      "Library: RESTful, Simple JWT, WebSocket, Redits, Celery",
    ],
    links: {
      name: "Web:",
      web: "app.clipwords.me",
      url: "https://clipwords.me",
    },
    path: "/product/clipwords-django",
  },
  {
    title_en: "An AI Tutor Project - Frontend:",
    title_jp: "一个AI老师项目之前端:",
    image: clipwords_hp,
    content: [
      "Language: TypeScript",
      "Framework: React.js",
      "UI: ChaKra UI",
      "API: clipwords, elevenlabs",
      "Dev tool: Vite.js",
    ],
    links: {
      name: "Web:",
      web: "clipwords.me",
      url: "https://app.clipwords.me",
    },
    path: "/product/clipwords-backend",
  },
  {
    title_en: "An AI Tutor Project - Micro-server:",
    title_jp: "一个AI老师项目之Node微服务器:",
    image: node_server,
    content: [
      "Language: JavaScript",
      "Framework: Node.js",
      "API: elevenlabs",
    ],
    links: {
      name: "Web:",
      web: "",
      url: "#",
    },
    path: "/product/clipwords-micro-server",
  },
];
