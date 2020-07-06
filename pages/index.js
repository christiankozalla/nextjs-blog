import { getSortedPostsData } from "../lib/posts";
import Welcome from "../components/Welcome";
import Cards from "../components/Cards";

export default function Home({ allPostsData }) {
  return (
    <>
      <Welcome
        text={[
          "Hey, I'm Christian",
          "You found my Blog",
          "Welcome to DevDiary",
        ]}
        rounds={2}
        padding="3rem"
      />
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
