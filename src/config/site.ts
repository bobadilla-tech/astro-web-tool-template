export const site = {
  // EDIT ME: first thing to change when starting a new project
  name: "My Web Tool",
  // EDIT ME: placeholder — set before first deploy
  url: "https://my-tool.bobadilla.tech",
  brand: {
    name: "Bobadilla Tech",
    url: "https://bobadilla.tech",
    github: "https://github.com/bobadilla-tech",
    linkedin: "https://www.linkedin.com/company/bobadillatech/",
    logo: "/images/bobadilla-tech-logo.png",
  },
  related: {
    lorelaiRepo: "https://github.com/bobadilla-tech/lorelai",
    lorelaiImportPath: "github.com/bobadilla-tech/lorelai",
    requiemsApi: "https://requiems.xyz",
    requiemsApiSignup: "https://requiems.xyz/users/sign_up",
  },
  // Replace with your actual AdSense client ID
  adsenseClientId: "ca-pub-XXXXXXXXXXXXXXXXX",
  // Replace with your actual GA4 Measurement ID
  gaId: "G-XXXXXXXXXX",
} as const;

export const isAdSenseConfigured =
  site.adsenseClientId !== "ca-pub-XXXXXXXXXXXXXXXXX";

export const isGaConfigured = site.gaId !== "G-XXXXXXXXXX";
