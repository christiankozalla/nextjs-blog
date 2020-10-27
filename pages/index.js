import { getSortedPostsData } from '../lib/posts';
import BlogOverview from '../components/BlogOverview';
import BlogIntroduction from '../components/BlogIntroduction';

export default function Home({ allPostsData }) {
  return (
    <>
      <BlogIntroduction />
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
