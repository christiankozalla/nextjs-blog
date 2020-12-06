import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { updatePostAttribute } from '../../lib/updateDb';
import { format, parseISO } from 'date-fns';

import BlogSeo from '../../components/BlogSeo';

export default function Post({ postData }) {
  // Include Post Header here with Image and FrontMatter
  const formattedDate = format(parseISO(postData.date), "do 'of' MMM ''yy");

  // url for BlogSeo
  const postUrl = `https://devdiary.me/posts/${postData.id}`;

  useEffect(() => {
    updatePostAttribute(postData.id, 'postViews');
  });

  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/prism/prism.css" />
      </Head>
      {/* BlogSeo adds <NextSeo (openGraph) /> and <ArticleJsonLd /> to Blog Post */}
      <BlogSeo
        title={postData.title}
        description={postData.description}
        date={postData.date}
        url={postUrl}
        id={postData.id}
      />
      <div id="post-header">
        <Image
          src={postData.imageUrl}
          alt="Post Header Image"
          layout="intrinsic"
          height={380}
          width={666}
        />

        <div className="center italic">
          <span>
            {postData.author} • {formattedDate} • {postData.readingTime} min.
          </span>
        </div>
      </div>
      <div
        className="post"
        dangerouslySetInnerHTML={{ __html: postData.content }}
      ></div>
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
