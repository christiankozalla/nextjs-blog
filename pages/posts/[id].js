import { createElement } from "react";
import { getAllPostIds, getPostData } from "../../lib/posts";
import marksy from "marksy";
import Prism from "prismjs";

const compile = marksy({
  createElement,
  highlight(language, code) {
    return Prism.highlight(code, Prism.languages.javascript, language);
  },
});

export default function Post({ postData }) {
  // Include Post Header here with Image and FrontMatter
  return <div>{compile(postData.content).tree}</div>;
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
