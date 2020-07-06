import React from "react";

class Typewriter extends React.Component {
  constructor(id, arr, rounds = 1) {
    super(id, arr, rounds);
    if (process.browser) {
      this.el = document.getElementById(id);
      this.blinker = document.getElementById("blinker");
      this.period = 150;
      this.interval = "";
      this.deleteInterval = "";
      this.word = "";
      this.add = true;
      this.textArray = arr;
      this.roundtrip = 0;
      this.rounds = rounds;
    }
  }

  type() {
    var self = this;
    this.letter = 0;
    this.counter = 0;
    clearInterval(this.interval);
    this.interval = setInterval(function () {
      self.addLetters();
    }, this.period);
  }

  setWord() {
    this.word = this.textArray[this.counter];
  }

  deleteLetters() {
    if (this.letter > 0 && !this.add) {
      this.letter--;
      var textContent = this.el.textContent;
      this.el.textContent = textContent.substring(0, this.letter);
    } else if (this.letter === 0 && !this.add) {
      this.add = true;
      this.el.innerHTML = "";
      this.counter++;
      this.setWord();
      this.startAdd();
    }
  }

  addLetters() {
    var self = this;
    if (this.counter === this.textArray.length) {
      this.type();
    } else {
      this.setWord();
      if (this.letter < this.word.length && this.add) {
        this.el.textContent += this.word[this.letter];
        this.letter++;
      } else if (this.letter === this.word.length && this.add) {
        this.add = false;
        this.roundtrip++;
        if (!this.blinker.classList.contains("blink")) {
          this.blinker.classList.add("blink");
        }
        if (this.roundtrip < this.rounds * this.textArray.length) {
          setTimeout(function () {
            self.startDelete();
          }, 3500);
        } else {
          this.blinker.classList.add("blink");
        }
      }
    }
  }

  startDelete() {
    var self = this;
    if (this.blinker.classList.contains("blink")) {
      this.blinker.classList.remove("blink");
    }
    clearInterval(this.interval);
    this.interval = setInterval(function () {
      self.deleteLetters();
    }, this.period);
  }

  startAdd() {
    var self = this;
    clearInterval(this.interval);
    this.interval = setInterval(function () {
      self.addLetters();
    }, this.period);
  }

  componentDidMount() {
    // Typewriter component is invoked with 3 props: contentArr, rounds, padding
    // contentArr sets the contents which Typewriter types as an Array
    // rounds sets how often the Typewriter types the contents; last item stays visible
    // padding sets left padding in order to center text; props Type is String e.g. "4rem"
    let Typer = new Typewriter(
      "type",
      this.props.contentArr,
      this.props.rounds
    );
    Typer.type();
  }

  componentWillUnmount() {
    this.el = null;
    this.blinker = null;
    this.interval = "";
    this.deleteInterval = "";
    this.word = "";
    this.add = false;
  }

  render() {
    return (
      <div className="flex-text">
        <h1 id="type"></h1>
        <h1 id="blinker">|</h1>
        <style jsx>{`
          h1 {
            font-family: "Dancing Script", "Norican", "Roboto";
            font-size: 3em;
            margin: 0;
            padding: 0;
          }

          .flex-text {
            display: flex;
            flex-flow: row wrap;
            padding-left: ${this.props.center ? "0" : this.props.padding};
          }

          #type {
            display: inline-block;
            text-shadow: 2px 2px #ddd;
          }

          .blink {
            visibility: hidden;
          }

          @media (max-width: 500px) {
            h1 {
              font-size: 2em;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Typewriter;
