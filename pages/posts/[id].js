import Head from "next/head";
import React, { createElement, Fragment, useEffect } from "react";
import { getAllPostIds, getPostData } from "../../lib/posts";
import marksy from "marksy";
import Prism from "../../public/prism/prism";
import Fetchclientside from "../../components/Fetchclientside";
import { updatePostAttribute } from "../../lib/update-db";

const compile = marksy({
  createElement,
  highlight(language, code) {
    return Prism.highlight(code, Prism.languages.javascript, language);
  },
});

export default function Post({ postData }) {
  // Include Post Header here with Image and FrontMatter

  useEffect(() => {
    updatePostAttribute(postData.id, "postViews");
  });

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
        #likeButton {
          padding: 0.6rem 1.4rem;
          margin: 0.5rem;
          border-radius: 5px;
          color: white;
          background-color: rgba(255, 33, 90, 0.8);
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
