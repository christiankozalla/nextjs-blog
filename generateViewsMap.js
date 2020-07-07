const fs = require("fs");
const path = require("path");
const postMetadata = require("./postMetadata");

const postDirectory = path.join(process.cwd(), "posts");

// postMetadata Database Array - will be populated with objects { id, views, likes }
postMetadata;

// Ids extracted from postMetadata
let postIds = [];

// All Ids from "posts" Dir
let allPostIds = [];

const generatePostMap = () => {
  // Push existing Ids to postIds
  postMetadata.forEach((existingPost) => {
    postIds.push(existingPost.id);
  });

  // Push all Ids from Dir into allPostIds (includes existing Ids and new Ids)
  const fileNames = fs.readdirSync(postDirectory);

  fileNames.map((fileName) => {
    const id = fileName.replace(/\.md/, "");
    allPostIds.push(id);
  });

  allPostIds.forEach((id) => {
    if (!postIds.includes(id)) {
      postMetadata.push({
        id: id,
        views: 1,
        likes: 1,
      });
    }
  });

  postDataString = `module.exports = postMetadata = [
    ${JSON.stringify(postMetadata)}
  ];`;

  // write updated postMetadata to file
  fs.writeFileSync("postMetadata.js", postDataString);
};

generatePostMap();
