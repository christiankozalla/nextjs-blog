import { getSortedPostsData } from "../lib/posts";
import Singlecard from "./SingleCard";

const Cards = (allPostsData) => {
  return <SingleCard props={allPostsData} />;
};

export default Cards;
