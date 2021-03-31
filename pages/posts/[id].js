import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { updatePostAttribute } from "../../lib/updateDb";
import { format, parseISO } from "date-fns";

import BlogSeo from "../../components/BlogSeo";

export default function Post({ postData }) {
  // Include Post Header here with Image and FrontMatter
  const formattedDate = format(parseISO(postData.date), "do 'of' MMM ''yy");

  // url for BlogSeo
  const postUrl = `https://chrisko.io/posts/${postData.id}`;

  useEffect(() => {
    updatePostAttribute(`/api/posts/${postData.id}`, "postViews");
  });

  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/prism/prism.css" />
      </Head>
      {/* BlogSeo adds <NextSeo (openGraph) /> and <ArticleJsonLd /> to Blog Post */}
      <BlogSeo
        title={postData.title}
        description={postData.shortTitle}
        date={postData.date}
        url={postUrl}
        id={postData.id}
        imageUrl={
          postData.imageUrl
            ? postData.imageUrl
            : "/images/chrisko-exo-large.png"
        }
      />
      <div id="post-header">
        <Image
          src={
            postData.imageUrl
              ? postData.imageUrl
              : "/images/chrisko-exo-large.png"
          }
          alt="Post Header Image"
          layout="responsive"
          width="700"
          height="393.75"
        />
        {postData.imageAttribution ? (
          <div className="center italic">
            <span
              className="small-fonts"
              dangerouslySetInnerHTML={{ __html: postData.imageAttribution }}
            ></span>
          </div>
        ) : null}
        <div className="center italic">
          <span>
            {postData.author} • {formattedDate} • {postData.readingTime} min.
          </span>
        </div>
      </div>
      <article
        className="post"
        dangerouslySetInnerHTML={{ __html: postData.content }}
      ></article>
      <hr />

      <style jsx>{`
        .post {
          width: 100%;
          word-wrap: break-word;
          padding-top: 0;
        }

        #post-header {
          width: 100%;
        }

        hr {
          width: 100%;
          border-bottom: 2px solid black;
          opacity: 0.3;
        }

        .italic {
          font-style: italic;
          font-weight: 300;
        }

        .center {
          text-align: center;
        }
      `}</style>
    </>
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
