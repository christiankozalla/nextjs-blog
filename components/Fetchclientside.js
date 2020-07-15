import { useRef } from "react";
import useSWR, { mutate } from "swr";
import { FiEye, FiHeart } from "react-icons/fi";

const updateColumn = async (id, column) => {
  try {
    const endpoint = `http://localhost:3000/api/posts/${id}`;
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
  const likeBtnRef = useRef();

  const onLikeBtnClick = () => {
    likeBtnRef.current.setAttribute("disabled", true);
  };

  if (error) return <div>Failed to load DB</div>;
  if (!data)
    return (
      <>
        <span>
          - <FiEye />
        </span>
        <span>
          - <FiHeart />
        </span>
      </>
    );
  if (data)
    return (
      <>
        <span>
          {data.post.views} <FiEye />
        </span>
        <button
          type="button"
          ref={likeBtnRef}
          onClick={() => {
            updateColumn(id, "likes");
            mutate(`/api/posts/${id}`);
            onLikeBtnClick();
          }}
        >
          {data.post.likes}
          <FiHeart />
        </button>
        <style jsx>{`
          button {
            border: none;
            margin: 0;
            padding: 0 0.5rem;
            text-decoration: none;
            -webkit-appearance: none;
            -moz-appearance: none;
          }

          button:hover,
          button:focus {
            background: rgba(255, 33, 90, 0.8);
            border-radius: 2px;
            transition: background 250ms ease-in-out, transform 150ms ease;
          }

          button:disabled {
            background: rgba(255, 33, 90, 0.8);
            border-radius: 3px;
            outline: 1px solid #fff;
            color: black;
          }

          button:active {
            transform: scale(0.95);
          }
        `}</style>
      </>
    );
}
