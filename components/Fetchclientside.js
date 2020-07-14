import useSWR from "swr";
import fetcher from "../lib/fetch";

import { FiEye, FiHeart } from "react-icons/fi";

export default function Fetchclientside({ id }) {
  const { data, error } = useSWR(`/api/posts/${id}`, fetcher);

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
          {data.views} <FiEye />
        </span>
        <span>
          {data.views} <FiHeart />
        </span>
      </>
    );
}
