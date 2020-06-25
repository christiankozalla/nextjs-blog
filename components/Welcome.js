import React, { useEffect } from "react";

const Welcome = () => {
  // Define Array of Color-Triples
  const colors = new Array(
    [62, 35, 255],
    [60, 255, 60],
    [255, 35, 98],
    [45, 175, 230],
    [255, 0, 255],
    [255, 128, 0]
  );
  let step = 0;
  const colorIndices = [0, 1, 2, 3];

  // Define Transition Increment
  const increment = 0.002;

  const updateGradient = () => {
    if (!document.getElementById("welcome")) {
      return;
    }
    // Grab #welcome element
    const welcome = document.getElementById("welcome");

    // Get 4 Single Arrays from Colors Array
    const a_a = colors[colorIndices[0]];
    const a_b = colors[colorIndices[1]];
    const b_a = colors[colorIndices[2]];
    const b_b = colors[colorIndices[3]];

    let istep = 1 - step;

    // Get 3 Single Values to make one "random" Color
    let r1 = Math.round(istep * a_a[0] + step * a_b[0]);
    let g1 = Math.round(istep * a_a[1] + step * a_b[1]);
    let b1 = Math.round(istep * a_a[2] + step * a_b[2]);
    const color1 = `rgb(${r1},${g1},${b1})`;

    let r2 = Math.round(istep * b_a[0] + step * b_b[0]);
    let g2 = Math.round(istep * b_a[1] + step * b_b[1]);
    let b2 = Math.round(istep * b_a[2] + step * b_b[2]);
    const color2 = `rgb(${r2},${g2},${b2})`;

    // Define styleObject for cssText
    const styleObject = `width: 95%; border-radius: 10px; box-shadow: 2px 2px 3px grey; background: linear-gradient(35deg, ${color1} 0%, ${color2} 100%);`;

    // Set cssText on welcome Element
    welcome.style.cssText = styleObject;

    // Change step thus istep
    step += increment;
    if (step >= 1) {
      step %= 1;
      // Re-define colors Array
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];

      // Pick new target color indices
      colorIndices[1] =
        (colorIndices[1] +
          Math.floor(1 + Math.random() * (colors.length - 1))) %
        colors.length;
      colorIndices[3] =
        (colorIndices[3] +
          Math.floor(1 + Math.random() * (colors.length - 1))) %
        colors.length;
    }
  };

  // Invoke type method of BannerTxt inside useEffect
  useEffect(() => {
    window.setInterval(updateGradient, 10);
  });
  return (
    <div id="welcome">
      <div className="banner">
        <h1 id="type">
          Welcome to {"<"}DevDiary{">"}
        </h1>
      </div>
      <style jsx>{`
        .welcome {
          border-radius: 10px;
          box-shadow: 2px 2px 3px grey;
        }

        .banner {
          position: relative;
          top: 100px;
          min-height: 300px;
          width: 100%;
          height: 100%;
          text-align: center;
          padding: 0 3rem;
        }

        #type {
          text-shadow: 1px 1px #ddd;
          font-family: "Dancing Script", "Anonymous Pro", monospace;
          font-size: 300%;
          overflow: hidden;
          border-right: 0.1em solid transparent;
          white-space: nowrap;
          margin: 0 auto;
          animation: typing 2.5s steps(20, end), blink-caret 0.6s step-end 7;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink-caret {
          from,
          to {
            border-color: rgba(25, 25, 25, 0.5);
          }
          50% {
            border-color: transparent;
          }
        }
      `}</style>
    </div>
  );
};

export default Welcome;
