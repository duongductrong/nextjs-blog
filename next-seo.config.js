const title = "Duong Duc Trong – Developer, writer.";
const description = "Front-end developer";

const CustomSEO = {
  title,
  description,
  canonical: "https://codedao.com",
  keywords: "",
  news_keywords: "",
  author: "",
  copyright: "",
  robots: "index, archive, follow, noodp",
  googlebot: "index,archive,follow,noodp",
  msnbot: "all,index,follow",

  openGraph: {
    type: "website",
    locale: "vi_IE",
    url: "https://codedao.com",
    title,
    description,
    site_name: "Duong Duc Trong – Developer, writer.",
    images: [
      {
        url: "https://codedao.com/static/images/ncl-next-ticket.png",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },

  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default CustomSEO;
