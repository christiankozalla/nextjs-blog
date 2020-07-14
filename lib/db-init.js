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

const db = new sqlite.Database("../database/postdb.sqlite");

// Use db.serialize for step by step processing
// Include algorithm that checks if a *post.md was deleted from /pages/posts, in order to delete this row from database, too
db.run(
  "CREATE TABLE IF NOT EXISTS Posts (id STRING, views INTEGER, likes INTEGER)",
  () => {}
);

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS Posts (id STRING, views INTEGER, likes INTEGER)"
  );
  db.all("SELECT * FROM Posts", (err, rows) => {
    if (err) {
      throw err;
    }
    postIds.forEach((post) => {
      let isElementOfDb = rows.some((row) => row.id === post.params.id);
      if (!isElementOfDb) {
        // Initialize new row for new post
        db.run("INSERT INTO Posts (id, views, likes) VALUES ($id, 0, 0)", {
          $id: post.params.id,
        });
        return;
      }
    });
  });
  db.all("SELECT * FROM Posts", (err, rows) => {
    if (err) {
      throw err;
    }
    if (rows.length === postIds.length) {
      console.log("Everything up to date!");
      return;
    } else if (rows.length > postIds.length) {
      const postIdsArray = [];
      postIds.forEach((post) => {
        postIdsArray.push(post.params.id);
      });
      rows.forEach((row) => {
        const isInFileSystem = postIdsArray.includes(row.id);
        console.log(isInFileSystem);
        if (isInFileSystem) {
          console.log(`This row is fine ${row.id}`);
        } else if (!isInFileSystem) {
          console.log(`This row ${row.id} has to be deleted`);
          db.run(
            "DELETE FROM Posts WHERE id=$id",
            {
              $id: row.id,
            },
            () => console.log(`Row ${row.id} deleted.`)
          );
        }
      });
    }
  });
});
