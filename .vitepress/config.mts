import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "zh-cn",
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
            { text: "示例", link: "/examples/markdown-examples" },
            { text: "Vue", link: "/vue/" },
            { text: "React", link: "/react/" },
            { text: "Typescript", link: "/typescript/" },
            { text: "Javascript", link: "/javascript/" },
            { text: "Css", link: "/css/" },
            { text: "WebGL", link: "/webgl/" },
            { text: "设计模式", link: "/design-pattern/" },
            { text: "算法", link: "/algorithm/" },
            { text: "面试题集", link: "/interview/index" },
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
                    text: "面试",
                    items: [{ text: "面试", link: "/interview/index" }],
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
