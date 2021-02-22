const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");

// Get all Posts from the file system
const postsDirectory = path.join(process.cwd().replace(/\lib/, ""), "posts");

function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      id: fileName.replace(/\.md$/, "")
    };
  });
}

// Store filenames in variable postIds
const postIds = getAllPostIds();

// Update AWS config
AWS.config.loadFromPath("../db-config.json");
// OR USE config.json IF NOT RUNNING IN NEXT BUNDLE

// Create DynamoDB service object
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: "latest" });

const params = {
  TableName: "devdiary-posts",
  Item: {
    postId: "blockchain-based-sensor-data-validation",
    postViews: 0,
    postLikes: 0
  }
};

db.put(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", JSON.stringify(data));
  }
});

// 1. Get all items from DB
// 2. Compare with all items from file system (getAllPostIds)
// 3. Add / Remove items to / from DB
// 4. Verify
