const BlogIntroduction = () => {
  return (
    <>
      <div id="introduction">
        <h1>Hi! I am Christian Kozalla 👋</h1>
        <h2 id="sub-introduction">
          My Blog <em>DevDiary</em> maps out my Journey to Web Development.
          Here, I'm going to share my experience with HTML, CSS and JavaScript
          as a Frontend Engineer. I've learnt React, Next.js and I'm jumping
          into Vue.js, right now! 🚀
        </h2>
      </div>
      <style jsx>{`
        #introduction {
          border-radius: 7px;
          box-shadow: 0px 4px 10px -2px rgba(0, 0, 0, 0.3);
          padding: 0.5rem 1.5rem;
          margin-bottom: 1rem;
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
