import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";
import emoji from "remark-emoji";
import gfm from "remark-gfm";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Add readingTime to matterResult.data to access it outside /pages/posts/[id].js
    const words = matterResult.content.split(" ").length;
    const wordsPerMinute = 130;
    const readingTime = Math.floor(words / wordsPerMinute).toString();

    matterResult.data.readingTime = readingTime;

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, "")
      }
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const words = matterResult.content.split(" ").length;
  const wordsPerMinute = 130;
  const readingTime = Math.floor(words / wordsPerMinute).toString();

  matterResult.data.readingTime = readingTime;

  const processedContent = await remark()
    .use(html, { sanitize: false })
    .use(gfm)
    .use(emoji, {
      padSpaceAfter: true,
      emoticon: false
    })
    .use(prism)
    .process(matterResult.content);
  const content = processedContent.toString();
  return {
    id,
    content,
    ...matterResult.data
  };
}
