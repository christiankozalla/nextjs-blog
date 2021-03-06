import useSWR, { mutate } from "swr";
import styles from "../styles/Fetchclientside.module.css";
import { FiEye, FiHeart } from "react-icons/fi";
import { updatePostAttribute } from "../lib/updateDb";

export default function Fetchclientside({ id }) {
  const { data, error } = useSWR(`/api/posts/${id}`);

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
            event.currentTarget.setAttribute("disabled", true);
            updatePostAttribute(`/api/posts/${id}`, "postLikes")
              .then((res) => res.json())
              .then((jsonRes) => {
                if (jsonRes.data.postLikes) {
                  mutate(`/api/posts/${id}`);
                }
              });
          }}
        >
          {data.postLikes}
          <FiHeart className={styles.disableIcon} />
        </button>
      </>
    );
}
