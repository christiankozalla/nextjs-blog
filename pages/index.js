import { NextSeo } from "next-seo";
import { getSortedPostsData } from "../lib/posts";
import BlogOverview from "../components/BlogOverview";
import BlogIntroduction from "../components/BlogIntroduction";
import About from "../components/About";

export default function Home({
  allPostsData,
  introduction,
  subintroduction,
  SEO
}) {
  return (
    <>
      <NextSeo {...SEO} />
      <BlogIntroduction
        introduction={introduction}
        subintroduction={subintroduction}
        textAlign={"left"}
      />
      <BlogOverview allPostsData={allPostsData} />
      <About />
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const introduction = "Hi! I am Christian Kozalla 👋";
  const subintroduction =
    "My Blog maps out my Journey to Web Development. Here, I'm going to share my experience with HTML, CSS and JavaScript as a Frontend Engineer. I've learnt React, Next.js and I'm jumping into Vue.js, right now! 🚀";

  const title = "Christian Kozalla - Web Developer";
  const description =
    "Self-taught Web Developer, crazy about JavaScript & Frontend Frameworks like React.js, Vue.js, Next.js";

  const SEO = {
    title,
    description,
    canonical: "https://chrisko.io",
    openGraph: {
      type: "website",
      locale: "en_IT",
      url: "https://chrisko.io",
      title,
      description,
      images: [
        {
          url: "https://chrisko.io/images/chrisko-exo-square.png",
          height: 200,
          width: 200,
          alt: title
        }
      ]
    },
    twitter: {
      handle: "@CKozalla",
      site: "@CKozalla",
      cardType: "summary"
    }
  };
  return {
    props: {
      allPostsData,
      introduction,
      subintroduction,
      SEO
    }
  };
}
