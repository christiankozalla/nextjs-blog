import { getSortedPostsData } from '../lib/posts';
import Cards from '../components/Cards';

import { NextSeo } from 'next-seo';
import BlogIntroduction from '../components/BlogIntroduction';

const url = 'https://devdiary.me';
const title = 'Devdiary Developer Blog';
const description =
  "On DevDiary I'm going to share my experience with HTML, CSS and JavaScript as a Frontend Engineer. I've learnt React, Next.js and I'm jumping into Vue.js, right now!";
const Posts = ({ allPostsData }) => {
  const introduction = 'Devdiary Developer Blog';
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
