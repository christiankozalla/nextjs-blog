import useSWR from "swr";

import { FiEye, FiHeart } from "react-icons/fi";

export default function Fetchclientside({ id }) {
  const { data, error } = useSWR(`/api/posts/${id}`);

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
        <span>
          {data.post.likes} <FiHeart />
        </span>
      </>
    );
}
