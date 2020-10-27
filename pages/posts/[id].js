import Head from 'next/head';
import React, { createElement, Fragment, useEffect } from 'react';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Fetchclientside from '../../components/Fetchclientside';
import { updatePostAttribute } from '../../lib/updateDb';

import BlogSeo from '../../components/BlogSeo';

export default function Post({ postData }) {
  // Include Post Header here with Image and FrontMatter

  // url for BlogSeo
  const postUrl = `https://devdiary.me/posts/${postData.id}`;
  useEffect(() => {
    updatePostAttribute(postData.id, 'postViews');
  });

  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="/prism/prism.css" />
      </Head>
      {/* BlogSeo adds <NextSeo (openGraph) /> and <ArticleJsonLd /> to Blog Post */}
      <BlogSeo
        title={postData.title}
        description={postData.description}
        date={postData.date}
        url={postUrl}
      />
      <div
        className="post"
        dangerouslySetInnerHTML={{ __html: postData.content }}
      ></div>
      <hr />

      <style jsx>{`
        .post {
          width: 100%;
          word-wrap: break-word;
        }
        #likeButton {
          padding: 0.6rem 1.4rem;
          margin: 0.5rem;
          border-radius: 5px;
          color: white;
          background-color: rgba(255, 33, 90, 0.8);
        }

        hr {
          width: 100%;
          border-bottom: 2px solid black;
          opacity: 0.3;
        }
      `}</style>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  };
}
