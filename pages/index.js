import { getSortedPostsData } from '../lib/posts';
import BlogOverview from '../components/BlogOverview';
import BlogIntroduction from '../components/BlogIntroduction';
import About from '../components/About';

export default function Home({ allPostsData }) {
  const introduction = 'Hi! I am Christian Kozalla 👋';
  const subintroduction =
    "My Blog <em>DevDiary</em> maps out my Journey to Web Development. Here, I'm going to share my experience with HTML, CSS and JavaScript as a Frontend Engineer. I've learnt React, Next.js and I'm jumping into Vue.js, right now! 🚀";

  return (
    <>
      <BlogIntroduction
        introduction={introduction}
        subintroduction={subintroduction}
        textAlign={'left'}
      />
      <BlogOverview allPostsData={allPostsData} />
      <About />
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
