import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "en-US",
    title: "LoachMemory",
    description: "",
    // base: '/base/',
    // head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    // cleanUrls:true,

    // rewrites: {
    //   'source/:page': 'destination/:page'
    // }

    srcDir: "./markdowns",
    // outDir: '../public',
    appearance: "dark",
    lastUpdated: true,
    themeConfig: {
        search: {
            provider: "local",
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "首页", link: "/" },
            { text: "Vue", link: "/vue/" },
            { text: "React", link: "/react/" },
            { text: "Typescript", link: "/typescript/" },
            { text: "Javascript", link: "/javascript/" },
            { text: "Css", link: "/css/" },
            { text: "WebGL", link: "/webgl/" },
            { text: "设计模式", link: "/design-pattern/" },
            { text: "算法", link: "/algorithm/" },
            // { text: "示例", link: "/examples/markdown-examples" },
            { text: "HTTP", link: "/http" },
            {
                text: "Interview",
                link: "/interview/index",
            },
        ],

        sidebar: {
            "/examples/": [
                {
                    text: "示例",
                    items: [
                        { text: "Markdown 示例", link: "/examples/markdown-examples" },
                        { text: "Runtime API 示例", link: "/examples/api-examples" },
                    ],
                },
            ],
            "/algorithm/": [
                {
                    text: "算法",
                    items: [{ text: "算法", link: "/algorithm/" }],
                },
            ],

            "/design-pattern/": [
                {
                    text: "设计模式",
                    items: [{ text: "开始", link: "/design-pattern/" }],
                },
            ],

            "/interview/": [
                {
                    text: "Interview",
                    items: [
                        { text: "Javascript", link: "/interview/javascript/" },
                        { text: "CSS", link: "/interview/css/" },
                        { text: "Vue", link: "/interview/vue/" },
                        { text: "React", link: "/interview/react/" },
                        { text: "工程化", link: "/interview/engineering/" },
                        { text: "算法", link: "/interview/algorithm/" },
                        { text: "其他", link: "/interview/index" },
                    ],
                },

                {
                    text: "Github Interview",
                    items: [
                        { text: "Javascript", link: "/interview/javascript/github.md" },
                        { text: "CSS", link: "/interview/css/github.md" },
                        { text: "Vue", link: "/interview/vue/github.md" },
                        { text: "React", link: "/interview/react/github.md" },
                        { text: "工程化", link: "/interview/engineering/github.md" },
                        { text: "算法", link: "/interview/algorithm/github.md" },
                        { text: "Node", link: "/interview/Node/github.md" },
                        { text: "http", link: "/interview/http/github.md" },
                        { text: "其他", link: "/interview/other/github.md" },
                    ],
                },
            ],

            "/javascript/": [
                {
                    text: "Javascript",
                    items: [{ text: "开始", link: "/javascript/" }],
                },
            ],
            "/typescript/": [
                {
                    text: "Typescript",
                    items: [{ text: "开始", link: "/typescript/" }],
                },
            ],
            "/css/": [
                {
                    text: "Css",
                    items: [{ text: "开始", link: "/css/" }],
                },
            ],
            "/react/": [
                {
                    text: "React",
                    items: [{ text: "开始", link: "/react/" }],
                },
            ],
            "/vue/": [
                {
                    text: "Vue",
                    items: [{ text: "开始", link: "/vue/" }],
                },
            ],
            "/webgl/": [
                {
                    text: "WebGl",
                    items: [{ text: "开始", link: "/webgl/" }],
                },
            ],
        },

        // sidebar: [
        //     { text: "React", link: "/react/" },
        // ],

        socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
    },
});
