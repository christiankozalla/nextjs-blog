import { getSortedPostsData } from "../lib/posts";
import BlogOverview from "../components/BlogOverview";

export default function Home({ allPostsData }) {
  return (
      <BlogOverview allPostsData={allPostsData} />
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
