import Welcome from '../components/Welcome';
import Milestone from '../components/Milestone';

const About = () => {
  const milestones = [
    {
      meta: "Husum '89",
      text:
        'On a Thursday in February, probably rainy and cold, I first saw the bright light of day!',
      direction: 'row',
      icon: '👶'
    },
    {
      meta: "Kiel '08",
      text:
        'After graduating from school I spent my days and nights caring for old people!',
      direction: 'row-reverse',
      icon: '👵'
    },
    {
      meta: "Dresden '15",
      text:
        'I graduated not only from school, but even from university. Got a diploma in Materials Engineering!',
      direction: 'row',
      icon: '🎓'
    },
    {
      meta: "Lichtenstein '17",
      text:
        '2017 started out exciting like hell! I married my wonderful wife, became father of two wild and smart kids and still enjoying these wild times heavily!',
      direction: 'row-reverse',
      icon: '👪'
    }
  ];

  return (
    <>
      <div id="avatar"></div>
      <Welcome
        text={['I am Christian', 'Developer of DevDiary', 'Christian Kozalla']}
        rounds={1}
        center={true}
      />
      {milestones.map((milestone) => (
        <Milestone milestone={milestone} key={milestone.meta} />
      ))}
      <style jsx>{`
        #avatar {
          background-image: url('/images/Avatar_CK_mid.jpg');
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
