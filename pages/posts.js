import { getSortedPostsData } from "../lib/posts";
import Cards from "../components/Cards";

import { NextSeo } from "next-seo";
import BlogIntroduction from "../components/BlogIntroduction";

const Posts = ({ allPostsData, SEO, introduction, subintroduction }) => {
  return (
    <>
      <NextSeo {...SEO} />
      <BlogIntroduction
        introduction={introduction}
        subintroduction={subintroduction}
        textAlign={"center"}
      />
      <Cards allPostsData={allPostsData} />
    </>
  );
};

export async function getStaticProps() {
  const url = "https://chrisko.io/posts";
  const title = "Chrisko Developer Blog";
  const description =
    "I'm sharing my experience with HTML, CSS and JavaScript as a Frontend Engineer, here. I've learnt React, Next.js and I'm jumping into Vue.js, right now!";

  const SEO = {
    title,
    description,
    canonical: url,
    openGraph: {
      type: "website",
      locale: "en_IT",
      url: url,
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

  const introduction = "ChrisKo's Developer Blog";
  const subintroduction =
    "Here, I'm writing about my journey 🌈 <br/><br/> 🌟 Frontend Frameworks<br/> 🍭 Code Snippets<br/> 🌶️ Personal Experience";

  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
      SEO,
      introduction,
      subintroduction
    }
  };
}

export default Posts;
