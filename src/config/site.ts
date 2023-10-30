import type { FooterItem, MainNavItem } from "@/types/types";
import SiteLogo from "@/images/logos/logo.png";
import dock from "@/images/dock.png";
import mail from "@/images/mail.png";
import distance from "@/images/distance.png";
import facebook from "@/images/facebook.png";
import youtube from "@/images/youtube.png";
import linkedin from "@/images/linkedin.png";

export type SiteConfig = typeof siteConfig;

const links = {
  eamil: "info@troubleshoot.com.bd",
};

export const siteConfig = {
  logo: SiteLogo,
  Download_text: "Download Our Mobile App",
  connected_us_text: "Stay connected with us",
  url: "http://localhost:3000",

  socialLink: [
    {
      item: "facebook",
      link: "#",
      icon: facebook,
      external: false,
    },
    {
      item: "Youtube",
      link: "#",
      icon: youtube,
      external: false,
    },
    {
      item: "linkedin",
      link: "#",
      icon: linkedin,
      external: false,
    },
  ],

  // mainNav: [
  //   {
  //     title: "OTHER PAGES",
  //     href: "/courses",
  //     description: "Read our latest blog posts.",
  //     items: [
  //       {
  //         title: "Blog",
  //         description: "Blog",
  //         items: [],
  //         href: "/blog",
  //         icon: "",
  //       },
  //       {
  //         title: "Help",
  //         description: "Help",
  //         items: [],
  //         icon: "",
  //         href: "/Help",
  //       },
  //       {
  //         title: "Terms of use",
  //         description: "Terms of use",
  //         items: [],
  //         icon: "",
  //         href: "/Termsofuse",
  //       },
  //       {
  //         title: "Privacy policy",
  //         description: "Privacy policy",
  //         items: [],
  //         icon: "",
  //         href: "/Privacy policy",
  //       },
  //       {
  //         title: "As a provider",
  //         description: "As a provider",
  //         href: "/As a provider",
  //         icon: "",
  //         items: [],
  //       },
  //     ],
  //   },

  //   {
  //     title: "Community",
  //     href: "/Community",
  //     description: "Community",
  //     items: [],
  //   },
  //   {
  //     title: "Become A Seller",
  //     href: "/reviews",
  //     description: "Become A Seller",
  //     items: [],
  //   },

  // ] satisfies MainNavItem[],
  // links,
  footerNav: [
    {
      title: "OTHER PAGES",
      items: [
        {
          title: "Blog",
          href: "/",
          external: false,
          icon: "",
        },
        {
          title: "Help",
          href: "/",
          external: false,
          icon: "",
        },
        {
          title: "Terms of use",
          href: "/",
          external: false,
          icon: "",
        },
        {
          title: " Privacy policy",
          href: "/",
          external: false,
          icon: "",
        },
        {
          title: "As a provider",
          href: "/",
          external: false,
          icon: "",
        },
      ],
    },
    {
      title: "COMMUNITY",
      items: [
        {
          title: "Become A Seller",
          href: "/BecomeASeller",
          external: false,
          icon: "",
        },
      ],
    },
    {
      title: "Contact",
      items: [
        {
          title: "+8809677889900",
          href: links.eamil,
          external: true,
          icon:dock,
        },

        {
          title: "info@troubleshoot.com.bd",
          href: links.eamil,
          external: true,
          icon:mail,
        },
        {
          title: "Corporate Address",
          href: links.eamil,
          external: true,
          icon:"",
        },
        {
          title: "Road 11,House11,Banani, Dhaka-1213 Bangladesh",
          href: links.eamil,
          external: true,
          icon:distance,
        },
      ],
    },
  ] satisfies FooterItem[],
};
