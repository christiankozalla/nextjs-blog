import db from "../../../../lib/db";

export default function (req, res) {
  if (req.method === "GET") {
    const id = req.query.id;

    const params = {
      TableName: "devdiary-posts",
      Key: {
        postId: id
      }
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
        postId: id
      },
      ExpressionAttributeValues: { ":inc": 1 },
      UpdateExpression: `ADD ${attribute} :inc`
    };

    db.update(params, function (err, data) {
      if (err) {
        console.log("Error chriso", err);
      } else {
        res.status(201);
      }
    });
  } else {
    console.log("Error, HTTP request method does not MATCH");
    return;
  }
}

export const config = {
  api: {
    externalResolver: true
  }
};
