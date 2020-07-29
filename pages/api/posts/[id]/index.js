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

    const params = {
      TableName: "devdiary-posts",
      Key: {
        postId: id,
      },
    };

    db.get(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        res.json(data.Item);
      }
    });
  } else if (req.method === "PUT") {
    const id = req.query.id;
    const attribute = req.body.attribute;

    const params = {
      TableName: "devdiary-posts",
      Key: {
        postId: id,
      },
      ExpressionAttributeValues: { ":inc": 1 },
      UpdateExpression: `ADD ${attribute} :inc`,
    };

    db.update(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success, updated.", data);
      }
    });
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
