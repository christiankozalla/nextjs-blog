import Singlecard from "./Singlecard";

const Cards = ({ allPostsData }) => {
  const dummyCard = {
    id: "give-me-feedback",
    title: "Connect with me",
    date: "2020-06-01",
    author: "Christian Kozalla",
    readingTime: "0",
    description:
      "As a young Blogger and Junior Web Developer I'm happy and grateful for your Feedback! If you like to connect with me longterm, follow me on Twitter! I'll tweet out every new post, there. Hope you enjoy my blog!",
    imageUrl: "/images/Coding-Screen-2.jpg",
    tags: ["Propose", "new", "Topics"],
    isInDb: false,
    isDummy: true
  };

  // to fill empty space if there is an odd number of cards displayed - so there are always two Singlecards per row on a wide screen
  allPostsData.length % 2 !== 0 ? allPostsData.push(dummyCard) : null;

  return (
    <div id="cards-wrapper">
      <div className="grid">
        {allPostsData.map((post) => {
          return <Singlecard key={post.id} post={post} />;
        })}
      </div>
      <style jsx>{`
        #cards-wrapper {
          margin: 0 auto;
          padding: 0 1rem;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          font-size: 85%;
          margin-top 0.7rem;
          justify-items: center;
        }

        h1 {
          font-weight: 600;
          padding-left: 0.5rem;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
          opacity: 0.8;
          margin: 0.5rem 0;
        }

        @media (max-width: 700px) {
          .grid {
            grid-template-columns: 1fr;
            font-size: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Cards;
