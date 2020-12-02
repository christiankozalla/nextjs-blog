import { getSortedPostsData } from '../lib/posts';
import BlogOverview from '../components/BlogOverview';
import BlogIntroduction from '../components/BlogIntroduction';

export default function Home({ allPostsData }) {
  const introduction = 'Hi! I am Christian Kozalla 👋';
  const subintroduction =
    "My Blog <em>DevDiary</em> maps out my Journey to Web Development. Here, I'm going to share my experience with HTML, CSS and JavaScript as a Frontend Engineer. I've learnt React, Next.js and I'm jumping into Vue.js, right now! 🚀";

  return (
    <>
      <BlogIntroduction
        introduction={introduction}
        subintroduction={subintroduction}
      />
      <BlogOverview allPostsData={allPostsData} />
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}
