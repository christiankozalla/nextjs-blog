import { getSortedPostsData } from '../lib/posts';
import Cards from '../components/Cards';

import { NextSeo } from 'next-seo';

const url = 'https://devdiary.me';
const title = 'Devdiary Web Development Blog';
const description =
  "On DevDiary I'm going to share my experience with HTML, CSS and JavaScript as a Frontend Engineer. I've learnt React, Next.js and I'm jumping into Vue.js, right now!";
const Posts = ({ allPostsData }) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${url}/blog`}
        openGraph={{ url, title, description }}
      />
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
