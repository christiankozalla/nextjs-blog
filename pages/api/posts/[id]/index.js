import db from "../../../../lib/db";
import initMiddleware from "../../../../lib/init-middleware";
import Cors from "cors";

const cors = initMiddleware(
  Cors({
    methods: ["GET", "PUT", "OPTIONS"],
  })
);

export default async function (req, res) {
  await cors(req, res);

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

    db.run(
      `UPDATE posts SET $column=$column+1 WHERE id=$id`,
      {
        $id: id,
        $column: column,
      },
      (err) => {
        if (err) {
          res.status(400).json({ error: err.message });
        }

        res.status(200).send();
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
