module.exports = {
  theme: "",
  title: "前端小册",
  description: "后台管理系统前端小册.",
  base: "/",
  head: [
    ["link", { rel: "icon", href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/zhcase/yd-admin",
    editLinks: false,
  },
};