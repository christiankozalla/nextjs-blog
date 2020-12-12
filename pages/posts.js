import { getSortedPostsData } from '../lib/posts';
import Cards from '../components/Cards';

import { NextSeo } from 'next-seo';
import BlogIntroduction from '../components/BlogIntroduction';

const url = 'https://chrisko.io';
const title = "ChrisKo's Developer Blog";
const description =
  "I'm sharing my experience with HTML, CSS and JavaScript as a Frontend Engineer, here. I've learnt React, Next.js and I'm jumping into Vue.js, right now!";
const Posts = ({ allPostsData }) => {
  const introduction = "ChrisKo's Developer Blog";
  const subintroduction =
    "Here, I'm writing about my journey 🌈 <br/><br/> 🌟 Frontend Frameworks<br/> 🍭 Code Snippets<br/> 🌶️ Personal Experience";

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${url}/posts`}
        openGraph={{ url, title, description }}
      />
      <BlogIntroduction
        introduction={introduction}
        subintroduction={subintroduction}
        textAlign={'center'}
      />
      {/* Add Searchbar for Blog Posts */}
      <Cards allPostsData={allPostsData} />
    </>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default Posts;
