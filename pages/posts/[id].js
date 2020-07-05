import Head from "next/head";
import { createElement, Fragment } from "react";
import { getAllPostIds, getPostData } from "../../lib/posts";
import marksy from "marksy";
import Prism from "../../public/prism/prism";

const compile = marksy({
  createElement,
  highlight(language, code) {
    return Prism.highlight(code, Prism.languages.javascript, language);
  },
});

export default function Post({ postData }) {
  // Include Post Header here with Image and FrontMatter
  return (
    <Fragment>
      <Head>
        <title>{postData.title}</title>
        <link href="/prism/prism.css" rel="stylesheet" />
      </Head>
      <div style={{ display: "contents" }}>
        <div className="post">{compile(postData.content).tree}</div>
        <style jsx>{`
          .post {
            width: 100%;
            word-wrap: break-word;
          }
        `}</style>
      </div>
    </Fragment>
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
