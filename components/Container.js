import Link from 'next/link';
import { FiGithub, FiMail, FiTwitter } from 'react-icons/fi';

const Container = ({ children }) => {
  return (
    <div className="container">
      <style jsx>
        {`
          .container {
            min-height: 100vh;
            max-width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
            height: 100%;
            width: 700px;
            margin: 0 auto;
            padding: 4rem 1rem 1rem 1rem;
          }

          .nav-wrapper {
            position: fixed;
            top: 0;
            width: 700px;
            background-color: #fafafa;
            margin: 0 auto;
            z-index: 2;
          }

          .navigation {
            display: flex;
            max-width: 700px;
            padding: 1rem;
          }

          .navigation a {
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

            .content {
              width: 100vw;
              box-sizing: border-box;
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
          <Link href="/about">
            <a>About</a>
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
      <div className="content">{children}</div>
      <div className="footer">
        <div className="footer-content">
          2020 Christian Kozalla
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
