import { getAllPostIds, getPostData } from "../../lib/posts";
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";

const CodeBlock = (language, values) => {
  return <Prism language={language}>{values}</Prism>;
};

export default function Post({ postData }) {
  // Include Post Header here with Image and FrontMatter
  return (
    <ReactMarkdown source={postData.content} renderers={{ code: CodeBlock }} />
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
