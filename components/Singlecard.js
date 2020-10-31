import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import { FiHeart, FiEye } from 'react-icons/fi';
import Fetchclientside from '../components/Fetchclientside';

const Singlecard = ({ post }) => {
  const formattedDate = format(parseISO(post.date), "do 'of' MMM ''yy");

  return (
    <div key={post.id} className="card-container">
      {!post.imageUrl ? (
        <div></div>
      ) : (
        <div className="card-header">
          {post.tags.map((tag) => {
            return <span key={tag}>{tag}</span>;
          })}
        </div>
      )}
      {post.isInDb ? (
        <Link href={`/posts/${post.id}`}>
          <a>
            <h2>{post.title}</h2>
          </a>
        </Link>
      ) : (
        <h2>{post.title}</h2>
      )}

      <div className="flex-row around">
        <p className="small-italic">
          {formattedDate} - by {post.author}
        </p>
        <img
          className="avatar"
          src="/images/Avatar_CK_min.jpg"
          alt="Christians Avatar"
        />
      </div>
      <p id="description">{post.description}</p>
      <div className="flex-row between small-italic" id="footer">
        {post.isInDb ? (
          <Fetchclientside id={post.id} />
        ) : (
          <>
            <span>
              <FiEye />
            </span>
            <span>
              <FiHeart />
            </span>
          </>
        )}
      </div>
      <style jsx>{`
        .card-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 48%;
          border-radius: 5px;
          margin: 0.3rem 0.3rem;
          box-shadow: 0 2px 5px #bbb;
        }

        .card-header {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: flex-end;
          background-image: url(${post.imageUrl});
          background-position: center;
          background-size: cover;
          border-radius: 5px 5px 0 0;
          width: 100%;
          height: 150px;
        }

        #description {
          margin: 0.6rem;
          flex-grow: 2;
          line-height: 2;
        }

        .card-header span {
          padding: 0.3rem 0.7rem;
          margin: 0.3rem;
          border-radius: 3px;
          color: white;
          background-color: rgba(255, 33, 90, 0.8);
        }

        .small-italic {
          font-size: 90%;
          font-style: italic;
        }

        .avatar {
          display: inline-block;
          height: 40px;
          width: 40px;
          border-radius: 20px;
        }

        h2 {
          margin: 0.2rem 0 0 0.4rem;
          padding: 0 0.3rem;
        }

        .flex-row {
          align-items: center;
        }

        .around {
          justify-content: space-around;
        }

        .between {
          justify-content: space-between;
        }

        #footer {
          border-top: 1px solid rgba(30, 30, 30, 0.4);
          padding: 0 0.6rem;
        }

        #footer p {
          margin: 0.2rem;
        }

        @media (max-width: 500px) {
          .card-container {
            width: 100%;
            margin: 0.3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Singlecard;
