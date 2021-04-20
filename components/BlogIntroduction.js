const BlogIntroduction = ({ introduction, subintroduction, textAlign }) => {
  return (
    <>
      <div id="introduction">
        <h1>{introduction}</h1>
        <h2
          id="sub-introduction"
          dangerouslySetInnerHTML={{ __html: subintroduction }}
        />
      </div>
      <style jsx>{`
        #introduction {
          border-radius: 7px;
          box-shadow: 0px 4px 10px -2px rgba(0, 0, 0, 0.3);
          padding: 0.5rem 1.5rem;
          margin: 1rem 0.5rem;
          text-align: ${textAlign};
        }

        h1 {
          margin: 0.2rem 0;
        }

        h2 {
          font-size: 1.2rem;
          font-weight: 300;
        }
      `}</style>
    </>
  );
};

export default BlogIntroduction;
