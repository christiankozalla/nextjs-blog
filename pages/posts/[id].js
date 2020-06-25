import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
    <div>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <ul>
      {postData.tags.map(tag => {
        return (
          <li key={tag}>
            {tag}
          </li>
        )
      })}
      </ul>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
