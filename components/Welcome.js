import React, { useEffect } from "react";
import Typewriter from "./Typewriter";

const Welcome = () => {
  useEffect(() => {
    let colorInterval = setInterval(updateGradient, 10);
    return () => {
      clearInterval(colorInterval);
    };
  });
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
  let increment = 0.002;

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
    const styleObject = `width: 100%; border-radius: 10px; box-shadow: 2px 2px 3px grey; background: linear-gradient(35deg, ${color1} 0%, ${color2} 100%);`;

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

  return (
    <div id="welcome">
      <div className="banner">
        <Typewriter
          contentArr={[
            "Hi, I'm Christian",
            "You found my Blog",
            "Welcome to DevDiary",
          ]}
          rounds={2}
        />
      </div>
      <style jsx>{`
        #welcome {
          border-radius: 10px;
          box-shadow: 2px 2px 3px grey;
        }

        .banner {
          position: relative;
          top: 40px;
          height: 150px;
          width: 100%;
          padding: 0 3rem;
        }

        @media only screen and (max-width: 500px) {
          h1 {
            font-size: 2rem;
          }
          .banner {
            top: 0;
            padding: 0;
            height: 5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Welcome;
