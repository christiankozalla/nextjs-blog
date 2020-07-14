import Head from "next/head";
import { createElement, Fragment } from "react";
import { getAllPostIds, getPostData } from "../../lib/posts";
import marksy from "marksy";
import Prism from "../../public/prism/prism";
import Fetchclientside from "../../components/Fetchclientside";

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

      <div className="post">{compile(postData.content).tree}</div>
      <div className="postStats">
        <Fetchclientside id={postData.id} />
      </div>
      <style jsx>{`
        .post {
          width: 100%;
          word-wrap: break-word;
        }
        .postStats {
          display: flex;
          width: 100%;
          justify-content: space-between;
          border-radius: 3px;
          box-shadow: 0 2px 5px;
          padding: 0.2rem 1rem;
        }
      `}</style>
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
