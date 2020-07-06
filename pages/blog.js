import { getSortedPostsData } from "../lib/posts";
import Welcome from "../components/Welcome";
import Cards from "../components/Cards";

const Blog = ({ allPostsData }) => {
  return (
    <>
      <Welcome
        text={["Look Around", "Take your Time", "Enjoy DevDiary"]}
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
      allPostsData,
    },
  };
}

export default Blog;
