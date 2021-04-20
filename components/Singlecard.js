import Link from "next/link";
import { parseISO, format } from "date-fns";
import { FiHeart, FiEye, FiTwitter } from "react-icons/fi";
import Fetchclientside from "../components/Fetchclientside";

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
        <h2>
          <Link href={`/posts/${post.id}`}>
            <a className="link">{post.title}</a>
          </Link>
        </h2>
      ) : (
        <h2>
          <span className="link">{post.title}</span>
        </h2>
      )}
      <div className="flex-row around">
        <p className="small-italic">
          {formattedDate} • {post.readingTime} min.
        </p>
        <img
          className="avatar"
          src="/images/Avatar_CK_min.jpg"
          alt="Christians Avatar"
        />
      </div>
      <p id="description">{post.description}</p>
      <p id="read-more">
        {!post.isDummy ? (
          <Link href={`/posts/${post.id}`}>
            <a className="link" id="read-more-anchor">
              Read more
            </a>
          </Link>
        ) : (
          <a
            className="link"
            rel="noopener"
            target="_blank"
            href="https://twitter.com/CKozalla"
            style={{
              paddingRight: 8
            }}
          >
            chrisko on{" "}
            <span style={{ verticalAlign: "middle" }}>
              <FiTwitter />
            </span>
          </a>
        )}
      </p>
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
          border-radius: 5px;
          margin: 0.3rem 0.3rem;
          box-shadow: 0 2px 8px #bbb;
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
          aspect-ratio: 16 / 9;
        }

        #description {
          margin: 0.6rem;
          flex-grow: 2;
          line-height: 2;
        }

        .card-header span {
          padding: 0 0.7rem;
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

        .flex-row {
          align-items: center;
        }

        .around {
          justify-content: space-around;
        }

        .between {
          justify-content: space-between;
        }

        h2 {
          padding-left: 0.7rem;
        }

        #read-more {
          text-align: right;
          font-style: italic;
          margin: 0 0.5rem 0.5rem 0;
        }

        #read-more-anchor {
          padding: 0.5rem 0.3rem;
        }

        .link {
          padding: 0 3px 3px 3px;
          background-image: linear-gradient(
            transparent calc(100% - 15px),
            rgba(36, 153, 209, 0.5)
          );
          background-size: 0 100%;
          transition: background-size 0.35s cubic-bezier(0.42, 0, 0.58, 1) 0.1s;
          background-repeat: no-repeat;
          border-radius: 5px;
        }

        .link:hover,
        .link:focus {
          background-size: 100% 100%;
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
            margin: 0.3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Singlecard;
