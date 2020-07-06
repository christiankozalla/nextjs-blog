import Welcome from "../components/Welcome";

const About = () => {
  return (
    <>
      <div id="avatar"></div>
      <Welcome
        text={["I am Christian", "Developer of DevDiary", "Christian Kozalla"]}
        rounds={1}
        center={true}
      />
      <style jsx>{`
        #avatar {
          background-image: url("/images/Avatar_CK.jpg");
          background-position: center;
          background-size: cover;
          height: 160px;
          width: 160px;
          border-radius: 80px;
          border: 3px solid white;
          margin-bottom: -2rem;
          z-index: 2;
        }

        @media (max-width: 500px) {
          #avatar {
            height: 100px;
            width: 100px;
            border-radius: 50px;
            margin-bottom: -1rem;
          }
        }
      `}</style>
    </>
  );
};

export default About;
