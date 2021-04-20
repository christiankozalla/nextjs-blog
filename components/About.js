import Milestone from "../components/Milestone";

const About = () => {
  const milestones = [
    {
      meta: "Husum '89",
      text:
        "On a Thursday in February, probably rainy and cold, I first saw the bright light of day!",
      direction: "row",
      icon: "👶"
    },
    {
      meta: "Kiel '08",
      text:
        "After graduating from school I spent my days and nights caring for old people!",
      direction: "row-reverse",
      icon: "👵"
    },
    {
      meta: "Dresden '15",
      text:
        "I graduated not only from school, but even from university. Got a diploma in Materials Engineering!",
      direction: "row",
      icon: "🎓"
    },
    {
      meta: "Lichtenstein '17",
      text:
        "2017 started out exciting like hell! I married my wonderful wife, became father of two wild and smart kids and still enjoying these wild times heavily!",
      direction: "row-reverse",
      icon: "👪"
    }
  ];

  return (
    <div id="about-wrapper">
      <h2>About Me</h2>
      {milestones.map((milestone) => (
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
