import db from "../../../../lib/db";

export default async function (req, res) {
  return new Promise((resolve) => {
    if (req.method === "GET") {
      const id = req.query.id;

      db.get(
        "SELECT * FROM Posts WHERE id=$id",
        {
          $id: id,
        },
        (err, row) => {
          if (err) {
            console.error(err);
            return resolve();
          }
          res.send(row);
          resolve();
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
  });
}
