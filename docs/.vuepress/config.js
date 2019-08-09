module.exports = {
  title: "DXC Documenation",
  base: "/",
  themeConfig: {
    logo: "https://www.katacoda.com/dxc/avatar",
    nav: [{ text: "Home", link: "/" }, { text: "Guide", link: "/lux/guide/" }],
    sidebar: {
      "/lux/": ["/lux/guide/", "/lux/dev-workflow/"]
    }
  }
};
