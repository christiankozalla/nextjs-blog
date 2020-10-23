// this is used to update the 'likes' or 'views' attributes on a post already stored in the database

export const updatePostAttribute = async (id, attribute) => {
  const postAttribute = { attribute: attribute };

  await fetch(`/api/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(postAttribute),
  });
};
