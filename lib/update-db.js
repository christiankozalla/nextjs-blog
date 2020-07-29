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
