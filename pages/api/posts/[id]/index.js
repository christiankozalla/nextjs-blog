import db from "../../../../lib/db";

export default async function (req, res) {
  if (req.method === "GET") {
    const id = req.query.id;

    db.get(
      "SELECT * FROM posts WHERE id=$id",
      {
        $id: id,
      },
      (err, row) => {
        if (err) {
          console.error(err);
        }
        res.json({ post: row });
      }
    );
  } else if (req.method === "PUT") {
    const id = req.query.id;
    const column = req.body.column;

    console.log(`Received request with id ${id}`);
    db.run(
      `UPDATE posts SET ${column}=${column}+1 WHERE id=$id`,
      {
        $id: id,
      },
      (err) => {
        if (err) {
          res.status(400).json({ error: err.message });
        }
        console.log("PUT SUCESSFUL");
        res.json({ message: "Updated DB" });
      }
    );
  } else {
    console.log("Error, HTTP request method does not MATCH");
    return;
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
