import { FiEye, FiHeart } from "react-icons/fi";

export default function Viewlike(props) {
  if (props.views) {
    return (
      <p>
        {props.views.toString()} <FiEye />
      </p>
    );
  } else if (props.likes) {
    return (
      <p>
        {props.likes.toString()} <FiHeart />
      </p>
    );
  } else {
    return (
      <p>
        <FiEye /> <FiHeart />
      </p>
    );
  }
}
