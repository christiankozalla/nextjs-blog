import Link from "next/link";
import { FiGithub, FiMail, FiTwitter } from "react-icons/fi";
import { useEffect } from "react";

const Container = ({ children }) => {
  useEffect(() => {
    if (typeof window.twttr !== undefined) {
      window.twttr = (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0],
          t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function (f) {
          t._e.push(f);
        };

        return t;
      })(document, "script", "twitter-wjs");
    }
  }, []);

  return (
    <div className="container">
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow-x: hidden;
          }

          .flex-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .content {
            max-width: 800px;
            margin: 0 auto;
          }

          .content-supplement {
            min-width: 200px;
            max-width: 794px;
            padding: 1rem 1rem 1rem 1rem;
            flex-grow: 1;
          }

          .content-supplement #twitter-box {
            min-width: 200px;
            min-height: 400px;
            padding: 1rem;
            border-radius: 5px;
            box-shadow: 0 2px 8px #bbb;
            margin: 0 auto;
          }

          .nav-wrapper {
            position: sticky;
            top: 0;
            width: 100vw;
            background-color: #fafafa;
            z-index: 2;
          }

          .navigation {
            display: flex;
            max-width: 1100px;
            padding: 1rem;
            margin: 0 auto;
          }

          .navigation a {
            padding: 0 0.7rem;
            color: #333;
            text-decoration: none;
            text-align: center;
            text-transform: lowercase;
            opacity: 0.7;
            transition: opacity 0.15s ease-in;
            margin: 0 1rem;
          }

          .navigation a:hover {
            opacity: 1;
          }

          .nav-right {
            margin-left: auto;
            margin-right: 1rem;
          }

          .nav-right a {
            margin-left: 1rem;
          }

          .footer {
            opacity: 0.7;
          }

          .footer-content {
            width: 700px;
            margin: 0 auto;
            font-size: 90%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .footer-content a {
            color: #333;
            text-decoration: none;
            text-align: center;
            text-transform: lowercase;
            opacity: 0.7;
            transition: opacity 0.15s ease-in;
            margin: 0 1rem;
          }

          @media (max-width: 700px) {
            .nav-wrapper {
              width: 100vw;
            }

            .navigation {
              width: 100%;
              box-sizing: border-box;
              justify-content: space-around;
            }

            .nav-right {
              display: none;
            }

            .footer-content {
              width: 100vw;
              box-sizing: border-box;
            }
          }
        `}
      </style>
      <div className="nav-wrapper">
        <nav className="navigation">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/posts">
            <a>Blog</a>
          </Link>
          <div className="nav-right">
            <a
              href="https://github.com/christiankozalla"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Link to Christians GitHub Profile"
            >
              <FiGithub />
            </a>
            <a
              href="https://twitter.com/CKozalla"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Link to Christians Twitter Account"
            >
              <FiTwitter />
            </a>
            <a
              href="mailto:devdiary.blog@gmail.com"
              aria-label="Christians E-Mail Address"
            >
              <FiMail />
            </a>
          </div>
        </nav>
      </div>
      <div className="flex-container">
        <div className="content">{children}</div>
        <aside className="content-supplement">
          <div id="twitter-box">
            <a
              class="twitter-timeline"
              href="https://twitter.com/CKozalla"
              data-dnt="true"
              data-tweet-limit="3"
            >
              Tweets by @CKozalla
            </a>
          </div>
        </aside>
      </div>
      <div className="footer">
        <div className="footer-content">
          {new Date().getUTCFullYear()} Christian Kozalla
          <a
            href="https://github.com/christiankozalla"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Link to Christians GitHub Profile"
          >
            <FiGithub />
          </a>
          <a
            href="https://twitter.com/CKozalla"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Link to Christians Twitter Account"
          >
            <FiTwitter />
          </a>
          <a
            href="mailto:devdiary.blog@gmail.com"
            aria-label="Christians E-Mail Address"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Container;
