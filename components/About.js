import Milestone from "../components/Milestone";

const About = ({ milestones }) => {
  return (
    <div id="about-wrapper">
      <h2>About Me</h2>
      {milestones.length > 0 &&
        milestones.map((milestone) => (
          <Milestone milestone={milestone} key={milestone.meta} />
        ))}
      <style jsx>{`
        h2 {
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
          font-weight: 600;
          padding-left: 1rem;
        }

        #about-wrapper {
          width: 100%;
          padding: 0 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default About;
