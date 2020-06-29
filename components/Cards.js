import Singlecard from "./Singlecard";

const Cards = ({ allPostsData }) => {
  return (
    <div className="flex-row">
      {allPostsData.map((post) => {
        return <Singlecard key={post.id} post={post} />;
      })}
      <style jsx>{`
        .flex-row {
          width: 100%;
          font-size: 85%;
          margin-top 0.7rem;
        }

        @media (max-width: 500px) {
          .flex-row {
            font-size: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Cards;
