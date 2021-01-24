// this is used to update the 'likes' or 'views' attributes on a post already stored in the database

export const updatePostAttribute = async (route, attribute) => {
  const postAttribute = { attribute: attribute };

  let updatedData = await fetch(route, {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(postAttribute)
  });

  return updatedData;
};
