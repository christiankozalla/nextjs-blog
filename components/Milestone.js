import React, { useRef } from "react";

const Milestone = ({ milestone }) => {
  const iconElement = useRef(null);
  const emptyMilestone = useRef(null);

  const onHoverHandler = () => {
    let icon = iconElement.current;
    let milestone = emptyMilestone.current;
    if (icon.classList.contains("hidden")) {
      milestone.classList.replace("milestone", "hidden");
      icon.classList.replace("hidden", "show");
    }
  };

  return (
    <div id="container" onMouseEnter={onHoverHandler}>
      <div className="milestone-wrapper">
        <span className="milestone" ref={emptyMilestone}></span>
        <span className="hidden" ref={iconElement}>
          {milestone.icon}
        </span>
        <span className="milestone-meta">{milestone.meta}</span>
      </div>
      <div className="milestone-text">{milestone.text}</div>
      <style jsx>{`
        #container {
          display: flex;
          flex-direction: ${milestone.direction};
          width: 100%;
          margin: 1rem 0;
          border-radius: 7px;
          box-shadow: 0px 4px 10px -2px rgba(0, 0, 0, 0.3);
        }

        .milestone {
          display: block;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: transparent;
          border: 10px solid gray;
          margin: 0 auto;
        }

        .milestone-meta {
          white-space: nowrap;
          text-align: center;
        }

        .milestone-wrapper {
          padding: 0.5rem;
        }

        .milestone-text {
          border-radius: ${milestone.direction === "row"
            ? "0 7px 7px 0"
            : "7px 0 0 7px"};
          box-shadow: inset 0px 4px 10px -2px rgba(0, 0, 0, 0.3);
          padding: 1rem;
        }

        .hidden {
          display: none;
          transition: display 0.4s;
        }

        .show {
          display: block;
          height: 50px;
          width: 50px;
          margin: 0 auto;
          text-align: center;
          font-size: 2rem;
          overflow: hidden;
        }

        @media (max-width: 600px) {
          #container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            margin: 1rem 0;
            border-radius: 7px;
            box-shadow: 0px 4px 10px -2px rgba(0, 0, 0, 0.3);
          }

          .milestone-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .milestone-text {
            border-radius: 0 0 7px 7px;
          }
        }
      `}</style>
    </div>
  );
};

export default Milestone;
