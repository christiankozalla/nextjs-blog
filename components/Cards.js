import Singlecard from './Singlecard';

const Cards = ({ allPostsData }) => {
  const dummyCard = {
    id: 'give-me-feedback',
    title: 'Send me Feedback',
    date: '2020-06-01',
    author: 'Christian Kozalla',
    readingTime: '0',
    description:
      "As a young Blogger and Junior Web Developer I'm happy and grateful for your Feedback! Send me a proposal for a new Topic in Web Development to cover in my next Blog post, or simply reach out to me via Twitter or Mail to share your impressions with me. Hope you enjoy DevDiary!",
    imageUrl: '/images/Coding-Screen-2.jpg',
    tags: ['Propose', 'new', 'Topics'],
    isInDb: false
  };

  // to fill empty space if there is an odd number of cards displayed - so there are always two Singlecards per row on a wide screen
  allPostsData.length % 2 !== 0 ? allPostsData.push(dummyCard) : null;

  return (
    <div>
      <div className="flex-row">
        {allPostsData.map((post) => {
          return <Singlecard key={post.id} post={post} />;
        })}
      </div>
      <style jsx>{`
        .flex-row {
          width: 100%;
          flex-wrap: wrap;
          font-size: 85%;
          margin-top 0.7rem;
        }

        h1 {
          font-weight: 600;
          padding-left: 0.5rem;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
          opacity: 0.8;
          margin: 0.5rem 0;
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
