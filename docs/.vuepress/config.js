module.exports = {
  title: "DXC Project Documentation",
  // dest: "../../public",
  base: "/",
  themeConfig: {
    logo:
      "https://msepjobs.militaryonesource.mil/msep-api/images/partner-logos/F4E3FAA3-48DEA016.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/lux/guide/" },
      { text: "Developer Workflow", link: "/lux/dev-workflow/" },
      {
        text: "Github Repo",
        link: "https://github.com/Intelladon-LLC/cs_ux_main"
      }
    ],
    sidebar: {
      "/lux/": ["/lux/guide/"],
      "/lux/dev-workflow/": ["/lux/dev-workflow/"]
    }
  }
};
