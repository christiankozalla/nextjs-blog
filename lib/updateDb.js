export const updateColumn = async (id, column) => {
  const endpoint = `${process.env.NEXT_PUBLIC_API}/posts/${id}`;

  console.log(`PUT request to ${endpoint}`);
  try {
    await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ column: column }),
    });
  } catch (error) {
    console.error(error);
  }
};
