const title = "Christian Kozalla - Web Developer";
const description =
  "Self-taught Web Developer, crazy about JavaScript & Frontend Frameworks like React.js, Vue.js, Next.js - blogging about his Journey to Web Development!";

const SEO = {
  title,
  description,
  canonical: "https://devdiary.me",
  openGraph: {
    type: "website",
    locale: "en_IT",
    url: "https://devdiary.me",
    title,
    description,
    images: [
      {
        url: "https://devdiary.me/images/Avatar_CK_mid.jpg",
        height: 300,
        width: 300,
        alt: title
      }
    ]
  },
  twitter: {
    handle: "@CKozalla",
    site: "@CKozalla",
    cardType: "summary_large_image"
  }
};

export default SEO;
