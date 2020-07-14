import sqlite from "sqlite3";
import path from "path";

export default function (req, res) {
  const pathToDb = path.join(process.cwd(), "database");
  const db = new sqlite.Database(`${pathToDb}/postdb.sqlite`);

  if (req.method === "GET") {
    const id = req.query.id;

    db.get(
      "SELECT * FROM Posts WHERE id=$id",
      {
        $id: id,
      },
      (err, row) => {
        if (err) {
          throw err;
        }
        res.send(row);
      }
    );
  } else if (req.method === "PUT") {
    // GET post by Id from TABLE POSTS e.g params.id
    // example devdiary.com/blog/speacial-post will get likes with params.id = special-post
    // UPDATE likes FROM POSTS
    // res.send("OK")
  } else {
    // res.status(500).send()
  }
}
