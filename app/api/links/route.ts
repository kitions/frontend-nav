import prisma from '@/lib/db';
import { NextResponse } from 'next/server';
export async function GET() {
  const links = await prisma.category.findMany({
    orderBy: [
      {
        rank: 'asc',
      }
    ],
    include: {
      links: {
        orderBy: {
          rank: 'asc',
        },
        where: {
          public: true,
          status: 1,
        },
      },
    },
  });
  const linkData = [
    {
        "id": "clidwn4ok0004yvrsk3anm2vj",
        "icon": "https://cos.codefe.top/images/ui-ux-icon.png",
        "title": "UI/UX",
        "description": "UI/UX",
        "rank": 1,
        "createdAt": "2023-06-02T01:46:55.221Z",
        "updatedAt": "2023-06-02T01:46:55.221Z",
        "links": [
            {
                "id": "cligshel30000yv0zne9gpsi8",
                "icon": "https://cos.codefe.top/images/uitips-icon.svg",
                "url": "https://www.uidesign.tips/ui-tips",
                "title": "UI Tips",
                "description": "Learn how to design better user interfaces and make your users happier with these simple UI tips. All the tips are tested in real-life products",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-04T02:13:48.183Z",
                "updatedAt": "2023-06-04T02:13:48.183Z",
                "cid": "clidwn4ok0004yvrsk3anm2vj"
            },
            {
                "id": "cligt0dvs0004yv0zmiy8muzm",
                "icon": "https://cos.codefe.top/images/godlywebsite-icon.jpeg",
                "url": "https://godly.website/",
                "title": "Godly",
                "description": "Godly is a curation of the best web design inspiration, every day. Browse the best e-commerce websites, portfolio websites, animation websites and more",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-04T02:28:33.737Z",
                "updatedAt": "2023-06-04T02:28:33.737Z",
                "cid": "clidwn4ok0004yvrsk3anm2vj"
            },
            {
                "id": "cligt6hvs0006yv0zvh32xxfc",
                "icon": "https://cos.codefe.top/images/uinotes-icon.svg",
                "url": "https://uinotes.com/",
                "title": "UI Notes",
                "description": "收集了国内109 个App 23208 张截图，用于探索UI 设计趋势、做竞品分析",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-04T02:33:18.857Z",
                "updatedAt": "2023-06-04T02:33:18.857Z",
                "cid": "clidwn4ok0004yvrsk3anm2vj"
            },
            {
                "id": "cligvadzm000qyv0zkyq05qy9",
                "icon": "https://cos.codefe.top/images/iconfont-icon.svg",
                "url": "https://www.iconfont.cn/",
                "title": "Iconfont",
                "description": "A professional and powerful icon library",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-04T03:32:19.666Z",
                "updatedAt": "2023-06-04T03:32:19.666Z",
                "cid": "clidwn4ok0004yvrsk3anm2vj"
            },
            {
                "id": "clig2n1270006yv9jzzyn44y2",
                "icon": "https://cos.codefe.top/images/react-icons.svg",
                "url": "https://react-icons.github.io/react-icons/",
                "title": "ReactIcons",
                "description": "svg react icons of popular icon packs",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-03T14:10:20.575Z",
                "updatedAt": "2023-06-03T14:10:20.575Z",
                "cid": "clidwn4ok0004yvrsk3anm2vj"
            },
            {
                "id": "clig1vlje0002yv9jtubwtd5k",
                "icon": "https://cos.codefe.top/images/shadcnui-icon.png",
                "url": "https://ui.shadcn.com/",
                "title": "shadcn/ui",
                "description": "Re-usable components built using Radix UI and Tailwind CSS",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-03T13:49:00.746Z",
                "updatedAt": "2023-06-03T13:49:00.746Z",
                "cid": "clidwn4ok0004yvrsk3anm2vj"
            },
            {
                "id": "clig27vny0004yv9jqj1utie3",
                "icon": "https://cos.codefe.top/images/daisyui-icon.webp",
                "url": "https://daisyui.com/",
                "title": "DaisyUI",
                "description": "daisyUI adds component class names to Tailwind CSS so you can make beautiful websites faster than ever",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-03T13:58:33.742Z",
                "updatedAt": "2023-06-03T13:58:33.742Z",
                "cid": "clidwn4ok0004yvrsk3anm2vj"
            },
            {
                "id": "clig2sr7p0008yv9jdpicu9og",
                "icon": "https://cos.codefe.top/images/iconify-icon.png",
                "url": "https://iconify.design/",
                "title": "Iconify",
                "description": "All popular icon sets, one framework.  Over 150,000 open source vector icons",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-03T14:14:47.750Z",
                "updatedAt": "2023-06-03T14:14:47.750Z",
                "cid": "clidwn4ok0004yvrsk3anm2vj"
            }
        ]
    },
    {
        "id": "clidx4sez000ayvrs3b971yrv",
        "icon": "https://cos.codefe.top/images/app-development-icon.png",
        "title": "Dev Tools",
        "description": "开发工具",
        "rank": 2,
        "createdAt": "2023-06-02T02:00:39.132Z",
        "updatedAt": "2023-06-02T02:00:39.132Z",
        "links": [
            {
                "id": "cligtlati0008yv0zf37ajvea",
                "icon": "https://cos.codefe.top/images/stackblitz-icon.png",
                "url": "https://stackblitz.com/",
                "title": "StackBlitz",
                "description": "Online IDE,No more hours stashing/pulling/installing locally — just click, and start coding",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-04T02:44:49.543Z",
                "updatedAt": "2023-06-04T02:44:49.543Z",
                "cid": "clidx4sez000ayvrs3b971yrv"
            },
            {
                "id": "clig4pxf7000uyv9jbudhc35g",
                "icon": "https://cos.codefe.top/images/portainer-icon.png",
                "url": "https://www.portainer.io/",
                "title": "Portainer",
                "description": "Deploy, configure, troubleshoot and secure containers in minutes on Kubernetes, Docker, and Swarm in any data center, cloud, network edge or IIOT device",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-03T15:08:35.059Z",
                "updatedAt": "2023-06-03T15:08:35.059Z",
                "cid": "clidx4sez000ayvrs3b971yrv"
            },
            {
                "id": "cligv1h2f000myv0zzcbhrufr",
                "icon": "https://cos.codefe.top/images/caniuse-iccon.png",
                "url": "https://caniuse.com/",
                "title": "Can I Use",
                "description": "Front-end API compatibility check",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-04T03:25:23.751Z",
                "updatedAt": "2023-06-04T03:25:23.751Z",
                "cid": "clidx4sez000ayvrs3b971yrv"
            },
            {
                "id": "cligv6bbc000oyv0zvstn1kqo",
                "icon": "https://cos.codefe.top/images/astexplore-icon.png",
                "url": "https://astexplorer.net/",
                "title": "AST Explorer",
                "description": "A web tool to explore the ASTs generated by various parsers.",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-04T03:29:09.577Z",
                "updatedAt": "2023-06-04T03:29:09.577Z",
                "cid": "clidx4sez000ayvrs3b971yrv"
            },
            {
                "id": "clig4nowh000syv9jaj5p6x2n",
                "icon": "https://cos.codefe.top/images/npm-icon.png",
                "url": "https://nginxproxymanager.com/",
                "title": "Nginx Proxy Manager",
                "description": "Expose your services easily and securely",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-03T15:06:50.705Z",
                "updatedAt": "2023-06-03T15:06:50.705Z",
                "cid": "clidx4sez000ayvrs3b971yrv"
            }
        ]
    },
    {
        "id": "clidwlud00002yvrsle9m5f97",
        "icon": "https://cos.codefe.top/images/image-tool-icon.png",
        "title": "Image Tools",
        "description": "图片工具",
        "rank": 3,
        "createdAt": "2023-06-02T01:45:55.189Z",
        "updatedAt": "2023-06-02T01:45:55.189Z",
        "links": [
            {
                "id": "clig4sqkx000wyv9jd5vma07c",
                "icon": "https://cos.codefe.top/images/picgo-icon.png",
                "url": "https://picgo.github.io/PicGo-Doc/zh/guide/",
                "title": "PicGo",
                "description": "一个用于快速上传图片并获取图片 URL 链接的工具",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-03T15:10:46.162Z",
                "updatedAt": "2023-06-03T15:10:46.162Z",
                "cid": "clidwlud00002yvrsle9m5f97"
            },
            {
                "id": "cligsv4uo0002yv0z1bmqs7pq",
                "icon": "https://cos.codefe.top/images/booltool-icon.png",
                "url": "https://booltool.boolv.tech/",
                "title": "Booltool",
                "description": "Amazing pictures, stunning videos, and wonderful texts are all at your fingertips",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-04T02:24:28.752Z",
                "updatedAt": "2023-06-04T02:24:28.752Z",
                "cid": "clidwlud00002yvrsle9m5f97"
            },
            {
                "id": "cliecgk11000kyvrs5jc9u2i6",
                "icon": "https://cos.codefe.top/images/screenshot-icon.png",
                "url": "https://usescreenshot.app/",
                "title": "Screenshot",
                "description": "Screenshot is an open-source tool that provides users with granular controls to frame their screenshots and build engaging content faster",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-02T09:09:42.374Z",
                "updatedAt": "2023-06-02T09:09:42.374Z",
                "cid": "clidwlud00002yvrsle9m5f97"
            },
            {
                "id": "cliecp7q2000myvrs0rvux35u",
                "icon": "https://cos.codefe.top/images/ray-so-icon.png",
                "url": "https://ray.so/",
                "title": "Code Image",
                "description": "Turn your code into beautiful images. Choose from a range of syntax colors, hide or show the background, and toggle between a dark and light window",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-02T09:16:26.331Z",
                "updatedAt": "2023-06-02T09:16:26.331Z",
                "cid": "clidwlud00002yvrsle9m5f97"
            },
            {
                "id": "cliecvp7r000oyvrs69d2efml",
                "icon": "https://cos.codefe.top/images/shot-so-icon.jpeg",
                "url": "https://shots.so/",
                "title": "Mockup",
                "description": "Create amazing Mockups. Craft beautiful presentations for your social media, website and more! ",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-02T09:21:28.936Z",
                "updatedAt": "2023-06-02T09:21:28.936Z",
                "cid": "clidwlud00002yvrsle9m5f97"
            }
        ]
    },
    {
        "id": "clidxhnt2000eyvrsl20gr9to",
        "icon": "https://cos.codefe.top/images/nodejs-icon.png",
        "title": "NodeJS",
        "description": "nodejs",
        "rank": 4,
        "createdAt": "2023-06-02T02:10:39.687Z",
        "updatedAt": "2023-06-02T02:10:39.687Z",
        "links": [
            {
                "id": "cligubut5000eyv0zag17bkom",
                "icon": "https://cos.codefe.top/images/prisma-icon.png",
                "url": "https://www.prisma.io/",
                "title": "Prisma",
                "description": "Next-generation Node.js and TypeScript ORM",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-04T03:05:28.505Z",
                "updatedAt": "2023-06-04T03:05:28.505Z",
                "cid": "clidxhnt2000eyvrsl20gr9to"
            },
            {
                "id": "cligu0vv3000ayv0zv7ss6pvy",
                "icon": "https://cos.codefe.top/images/nextjs-icon.png",
                "url": "https://nextjs.org/",
                "title": "Nextjs",
                "description": "Next.js by Vercel is the full-stack React framework for the web",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-04T02:56:56.655Z",
                "updatedAt": "2023-06-04T02:56:56.655Z",
                "cid": "clidxhnt2000eyvrsl20gr9to"
            },
            {
                "id": "cligu3oxq000cyv0z5zkz62i7",
                "icon": "https://cos.codefe.top/images/nuxt-icon.png",
                "url": "https://nuxt.com/",
                "title": "Nuxt",
                "description": "Nuxt is an intuitive and extendable way to create type-safe, performant and production-grade full-stack web apps and websites with Vue 3.",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-04T02:59:07.646Z",
                "updatedAt": "2023-06-04T02:59:07.646Z",
                "cid": "clidxhnt2000eyvrsl20gr9to"
            },
            {
                "id": "cligug4o5000gyv0zkd75bsbs",
                "icon": "https://cos.codefe.top/images/nestjs-icon.svg",
                "url": "https://nestjs.com/",
                "title": "Nest.js",
                "description": "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-04T03:08:47.909Z",
                "updatedAt": "2023-06-04T03:08:47.909Z",
                "cid": "clidxhnt2000eyvrsl20gr9to"
            },
            {
                "id": "cligujz3h000iyv0zc645oe3e",
                "icon": "https://cos.codefe.top/images/koa-logo.png",
                "url": "https://koajs.com/",
                "title": "Koa",
                "description": "Next generation web framework for node.js",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-04T03:11:47.310Z",
                "updatedAt": "2023-06-04T03:11:47.310Z",
                "cid": "clidxhnt2000eyvrsl20gr9to"
            },
            {
                "id": "cligumiw4000kyv0z1ow2psti",
                "icon": "https://cos.codefe.top/images/expressjs_logo.png",
                "url": "https://expressjs.com/",
                "title": "Express",
                "description": "Fast, unopinionated, minimalist web framework for Node.js",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-04T03:13:46.276Z",
                "updatedAt": "2023-06-04T03:13:46.276Z",
                "cid": "clidxhnt2000eyvrsl20gr9to"
            }
        ]
    },
    {
        "id": "cli07fs1z0000yv0wcvn8erbg",
        "icon": "https://cos.codefe.top/images/pencil-icon.png",
        "title": "Online Practice",
        "description": "线上练习",
        "rank": 5,
        "createdAt": "2023-05-23T11:40:21.576Z",
        "updatedAt": "2023-05-23T11:40:21.576Z",
        "links": [
            {
                "id": "clidwaw860000yvrspcn1ersf",
                "icon": "https://cos.codefe.top/images/type-challenge-icon.png",
                "url": "https://tsch.js.org/",
                "title": "Type Challenge",
                "description": "This project is aimed at helping you better understand how the type system works, writing your own utilities, or just having fun with the challenges",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-02T01:37:24.391Z",
                "updatedAt": "2023-06-02T01:37:24.391Z",
                "cid": "cli07fs1z0000yv0wcvn8erbg"
            },
            {
                "id": "clie1uoq7000iyvrsv4rp7jfa",
                "icon": "https://cos.codefe.top/images/vuejs-challenge-icon.png",
                "url": "https://vuejs-challenges.netlify.app/",
                "title": "Vue.js Challenge",
                "description": "Helping you better understand Vue.js, writing your own utilities, or just having fun with the challenges",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-02T04:12:45.871Z",
                "updatedAt": "2023-06-02T04:12:45.871Z",
                "cid": "cli07fs1z0000yv0wcvn8erbg"
            },
            {
                "id": "clig1nwem0000yv9j3ru4j3yp",
                "icon": "https://cos.codefe.top/images/leetcode-icon.png",
                "url": "https://codetop.cc/home",
                "title": "Code Top",
                "description": "CodeTop用于汇总互联网大厂面试的高频考题🔥帮助面试者更有针对性地准备面试",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-03T13:43:01.583Z",
                "updatedAt": "2023-06-03T13:43:01.583Z",
                "cid": "cli07fs1z0000yv0wcvn8erbg"
            },
            {
                "id": "cli07nbw90002yv0wggxbntju",
                "icon": "https://cos.codefe.top/images/pencil-icon.png",
                "url": "https://bigfrontend.dev/",
                "title": "BigFrontEnd",
                "description": "BFE.dev is the platform to practice your Front-End development skills,prepare your Front-End job interview and communicate with developers around the globe, like LeetCode for Front-End.",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-05-23T11:46:13.881Z",
                "updatedAt": "2023-05-23T11:46:13.881Z",
                "cid": "cli07fs1z0000yv0wcvn8erbg"
            }
        ]
    },
    {
        "id": "clidxzr9m000gyvrs66aqlski",
        "icon": "https://cos.codefe.top/images/writting-icon.png",
        "title": "Writting",
        "description": "写作",
        "rank": 6,
        "createdAt": "2023-06-02T02:24:43.978Z",
        "updatedAt": "2023-06-02T02:24:43.978Z",
        "links": [
            {
                "id": "clig31y13000iyv9j49vp0z35",
                "icon": "https://cos.codefe.top/images/notion-logo.png",
                "url": "https://www.notion.so/",
                "title": "Notion",
                "description": "integrates various capabilities such as note-taking, knowledge base, data tables, kanban boards, calendars and more",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-03T14:21:56.488Z",
                "updatedAt": "2023-06-03T14:21:56.488Z",
                "cid": "clidxzr9m000gyvrs66aqlski"
            },
            {
                "id": "clig36gzu000kyv9jpdk546ij",
                "icon": "https://cos.codefe.top/images/affine-icon.png",
                "url": "https://affine.pro/",
                "title": "Affine",
                "description": "Write, Draw, and Plan All at Once",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-03T14:25:27.691Z",
                "updatedAt": "2023-06-03T14:25:27.691Z",
                "cid": "clidxzr9m000gyvrs66aqlski"
            },
            {
                "id": "clig3eijs000myv9jvkliqa0g",
                "icon": "https://cos.codefe.top/images/excalidraw-icon.png",
                "url": "https://excalidraw.com/",
                "title": "Excalidraw",
                "description": "Create beautiful hand-drawn like diagrams, wireframes, or whatever you like.",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-03T14:31:42.953Z",
                "updatedAt": "2023-06-03T14:31:42.953Z",
                "cid": "clidxzr9m000gyvrs66aqlski"
            }
        ]
    },
    {
        "id": "clidwr4880006yvrs2oik1lmz",
        "icon": "https://cos.codefe.top/images/blog-icon.png",
        "title": "Articles",
        "description": "技术博客",
        "rank": 7,
        "createdAt": "2023-06-02T01:50:01.256Z",
        "updatedAt": "2023-06-02T01:50:01.256Z",
        "links": [
            {
                "id": "cligvk7hz000syv0z0wbo42j5",
                "icon": "",
                "url": "https://ssh-blog.vercel.app/",
                "title": "SSH",
                "description": "Advanced front-end technology blog repository with over 10 million views on the entire network",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-04T03:39:57.816Z",
                "updatedAt": "2023-06-04T03:39:57.816Z",
                "cid": "clidwr4880006yvrs2oik1lmz"
            },
            {
                "id": "cligvp0kw000uyv0z8esykmqx",
                "icon": "",
                "url": "https://lxchuan12.gitee.io/",
                "title": "ruocchuan",
                "description": "Dive into source code",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-04T03:43:42.129Z",
                "updatedAt": "2023-06-04T03:43:42.129Z",
                "cid": "clidwr4880006yvrs2oik1lmz"
            },
            {
                "id": "clig3vwba000oyv9jxbqwzdx8",
                "icon": "",
                "url": "https://interfaces.rauno.me/",
                "title": "Web Interface Guidelines",
                "description": "This document outlines a non-exhaustive list of details that make a good (web) interface",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-03T14:45:13.942Z",
                "updatedAt": "2023-06-03T14:45:13.942Z",
                "cid": "clidwr4880006yvrs2oik1lmz"
            },
            {
                "id": "clig412rw000qyv9jeumullvq",
                "icon": "",
                "url": "https://www.patterns.dev/",
                "title": "PatternsDev",
                "description": "free book on design patterns and component patterns for building powerful web apps with vanilla JavaScript and React",
                "rank": null,
                "public": true,
                "status": 1,
                "createdAt": "2023-06-03T14:49:15.596Z",
                "updatedAt": "2023-06-03T14:49:15.596Z",
                "cid": "clidwr4880006yvrs2oik1lmz"
            }
        ]
    }
]
  return NextResponse.json(links);
}
