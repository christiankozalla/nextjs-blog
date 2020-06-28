import Singlecard from "./SingleCard";

const Cards = ({ allPostsData }) => {
  return (
    <div className="flex-row">
      {allPostsData.map((post) => {
        return <Singlecard key={post.id} post={post} />;
      })}
      <style jsx>{`
        div {
          width: 100%;
          font-size: 85%;
        }
      `}</style>
    </div>
  );
};

export default Cards;
