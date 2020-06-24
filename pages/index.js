import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <body>
      <h1>Blog Headline</h1>
      <div>
        <h3>Blog</h3>
        <ul>
          {allPostsData.map(({ id, title, date }) => (
            <li key={id}>
              {title}
              <br />
              {`published on ${date}`}
            </li>
          ))}
        </ul>
      </div>
    </body>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
