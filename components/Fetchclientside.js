import React from "react";
import useSWR, { mutate } from "swr";
import styles from "../styles/Fetchclientside.module.css";
import { FiEye, FiHeart } from "react-icons/fi";

const updateColumn = async (id, column) => {
  const currentWorkingDirectory = process.cwd();
  const endpoint = `${currentWorkingDirectory}/pages/api/posts/${id}`;
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

export default function Fetchclientside({ id }) {
  const { data, error } = useSWR(`/api/posts/${id}`);

  const onLikeBtnClick = (event) => {
    event.currentTarget.setAttribute("disabled", true);
  };

  if (error) return <div>Failed to load DB</div>;
  if (!data)
    return (
      <>
        <span className={styles.btn}>
          - <FiEye />
        </span>
        <span className={styles.btn}>
          - <FiHeart />
        </span>
      </>
    );
  if (data)
    return (
      <>
        <button
          className={styles.btn}
          onClick={(event) => {
            onLikeBtnClick(event);
            updateColumn(id, "views");
            mutate(`/api/posts/${id}`);
          }}
        >
          {data.post.views} <FiEye className={styles.disableIcon} />
        </button>
        <button
          className={styles.btn}
          onClick={(event) => {
            onLikeBtnClick(event);
            updateColumn(id, "likes");
            mutate(`/api/posts/${id}`);
          }}
        >
          {data.post.likes} <FiHeart className={styles.disableIcon} />
        </button>
      </>
    );
}
