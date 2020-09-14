import { getSortedPostsData } from '../lib/posts';
import Welcome from '../components/Welcome';
import Cards from '../components/Cards';

import { NextSeo } from 'next-seo';

const url = 'https://devdiary.me';
const title = 'Devdiary Blog - Christian Kozalla';
const description =
  "Here, I'm going to post relevant applied knowledge that I gain in learning Web Development. Tutorials about NextJS, React, Node and vanilla JavaScript";
const Posts = ({ allPostsData }) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${url}/blog`}
        openGraph={{ url, title, description }}
      />
      <Welcome
        text={['Look Around', 'Take your Time', 'Enjoy DevDiary']}
        rounds={1}
        padding="5.5rem"
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
