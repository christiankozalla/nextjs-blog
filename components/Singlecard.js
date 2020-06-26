const Singlecard = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <div>
        {props.tags.map((tag) => {
          return <span key={tag}>{tag}</span>;
        })}
      </div>
    </div>
  );
};

export default Singlecard;
