import React, { useState } from "react";
import useSWR from "swr";
import styles from "../styles/Fetchclientside.module.css";
import { FiEye, FiHeart } from "react-icons/fi";
import { updatePostAttribute } from "../lib/update-db";

export default function Fetchclientside({ id }) {
  const { data, error } = useSWR(`/api/posts/${id}`);

  const [likeIsClicked, setLikeIsClicked] = useState(false);

  const onLikeBtnClick = (event) => {
    event.currentTarget.setAttribute("disabled", true);
    setLikeIsClicked(true);
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
        <button className={styles.btn}>
          {data.postViews} <FiEye className={styles.disableIcon} />
        </button>
        <button
          className={styles.btn}
          onClick={(event) => {
            onLikeBtnClick(event);
            updatePostAttribute(id, "postLikes");
          }}
        >
          {!likeIsClicked ? data.postLikes : parseInt(data.postLikes, 10) + 1}{" "}
          <FiHeart className={styles.disableIcon} />
        </button>
      </>
    );
}
