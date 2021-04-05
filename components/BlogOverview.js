import React, { useState } from "react";
import { parseISO, format } from "date-fns";

import BlogOverviewItem from "./BlogOverviewItem";

const BlogOverview = ({ allPostsData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  allPostsData.forEach((post) => {
    const formattedDate = format(parseISO(post.date), "do 'of' MMM ''yy");
    post.formattedDate = formattedDate;
  });

  return (
    <div className="blog-overview-wrapper">
      <h2>Latest Blog Posts</h2>
      <input
        id="search-input"
        aria-label="Search blog posts"
        type="search"
        placeholder="Search the blog"
        onChange={(e) => setSearchTerm(e.target.value.trim())}
      />
      <div>
        {!searchTerm ? (
          allPostsData.slice(0, 5).map((post) => {
            return <BlogOverviewItem post={post} key={post.id} />;
          })
        ) : allPostsData.filter((post) => {
            let searchTermLower = searchTerm.toLowerCase();
            return (
              post.title.toLowerCase().includes(searchTermLower) ||
              post.shortTitle.toLowerCase().includes(searchTermLower)
            );
          }).length === 0 ? (
          <div id="nothing-found">Your query didn't match any posts...</div>
        ) : (
          allPostsData
            .filter((post) => {
              let searchTermLower = searchTerm.toLowerCase();
              return (
                post.title.toLowerCase().includes(searchTermLower) ||
                post.shortTitle.toLowerCase().includes(searchTermLower)
              );
            })
            .map((filteredPost) => {
              return (
                <BlogOverviewItem post={filteredPost} key={filteredPost.id} />
              );
            })
        )}
      </div>
      <style jsx>{`
        h2 {
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
          font-weight: 600;
          padding-left: 1rem;
        }

        .blog-overview-wrapper {
          width: 100%;
        }

        #search-input {
          display: block;
          margin: 1rem auto;
          padding: 0.7rem 0.5rem;
          width: 90%;
          outline: none;
          border: 1px solid lightgray;
          border-radius: 10px 0px 10px 0;
          box-shadow: 3px 4px 10px lightgray;
          font-size: 0.85rem;
        }

        #nothing-found {
          text-align: center;
          margin: 1rem auto;
        }
      `}</style>
    </div>
  );
};

export default BlogOverview;
