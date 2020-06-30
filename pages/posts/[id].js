import { getAllPostIds, getPostData } from "../../lib/posts";
import ReactMarkdown from "react-markdown/with-html";
import { Prism } from "../../utils/prism";

const CodeBlock = ({ language, value }) => {
  return <Prism language={language}>{value}</Prism>;
};

export default function Post({ postData }) {
  // Include Post Header here with Image and FrontMatter
  return (
    <ReactMarkdown
      escapeHtml={false}
      source={postData.contentHtml}
      renderers={{ code: CodeBlock }}
    />
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
