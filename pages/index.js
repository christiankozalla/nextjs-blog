import { getSortedPostsData } from "../lib/posts";
import Welcome from "../components/Welcome";

export default function Home({ allPostsData }) {
  return <Welcome />;
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
