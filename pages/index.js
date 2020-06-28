import { getSortedPostsData } from "../lib/posts";
import Welcome from "../components/Welcome";
import Cards from "../components/Cards";

export default function Home({ allPostsData }) {
  return (
    <>
      <Welcome />
      <Cards allPostsData={allPostsData} />
    </>
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
