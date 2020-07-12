const sqlite = require("sqlite3");
const fs = require("fs");
const path = require("path");

const postsDirectory = path.join(process.cwd().replace(/\lib/, ""), "posts");

function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

const postIds = getAllPostIds();

const db = new sqlite.Database("../database/post-db.sqlite");

db.run(
  "CREATE TABLE IF NOT EXISTS posts (id TEXT PRIMARY KEY, views INTEGER, likes INTEGER)",
  () => {
    db.all("SELECT * FROM posts", (err, rows) => {
      if (err) {
        throw err;
      }
      postIds.forEach((post) => {
        const isElementOfDb = rows.some((row) => row.id === post.params.id);
        console.log(isElementOfDb);
        if (!isElementOfDb) {
          // Initialize new row for new post
          db.run("INSERT INTO posts (id, views, likes) VALUES ($id, 0, 0)", {
            $id: post.params.id,
          });
        }
      });
    });
  }
);
