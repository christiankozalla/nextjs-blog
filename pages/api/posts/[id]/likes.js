export default function likes(req, res) {
  if (req.method === "GET") {
    // GET post by Id from TABLE POSTS e.g params.id
    // example devdiary.com/blog/speacial-post will get likes with params.id = special-post
    // SELECT likes FROM POSTS
    // return likes
  } else if (req.method === "PUT") {
    // GET post by Id from TABLE POSTS e.g params.id
    // example devdiary.com/blog/speacial-post will get likes with params.id = special-post
    // UPDATE likes FROM POSTS
    // res.send("OK")
  } else {
    // res.status(500).send()
  }
}
