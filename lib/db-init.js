const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");

// Get all Posts from the file system
const postsDirectory = path.join(process.cwd().replace(/\lib/, ""), "posts");

function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      id: fileName.replace(/\.md$/, ""),
    };
  });
}

// Store filenames in variable postIds
const postIds = getAllPostIds();

// Update AWS config
AWS.config.update({
  accesKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "eu-central-1",
});
// OR USE config.json IF NOT RUNNING IN NEXT BUNDLE

// Create DynamoDB service object
const db = new AWS.DynamoDB({ apiVersion: "latest" });

postIds.forEach((post) => {
  const params = {
    TableName: "devdiary-posts",
    Item: {
      postId: post.id,
      views: 0,
      likes: 0,
    },
  };

  db.put(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
});

// 1. Get all items from DB
// 2. Compare with all items from file system (getAllPostIds)
// 3. Add / Remove items to / from DB
// 4. Verify
