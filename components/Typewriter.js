import React from "react";

class Typewriter extends React.Component {
  constructor(id, arr) {
    super(id, arr);
    if (process.browser) {
      this.el = document.getElementById(id);
      this.period = 150;
      this.interval = "";
      this.deleteInterval = "";
      this.word = "";
      this.add = true;
      this.textArray = arr;
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
        if (!document.getElementById("blinker").classList.contains("blink")) {
          document.getElementById("blinker").classList.add("blink");
        }
        setTimeout(function () {
          self.startDelete();
        }, 3500);
      }
    }
  }

  startDelete() {
    var self = this;
    if (document.getElementById("blinker").classList.contains("blink")) {
      document.getElementById("blinker").classList.remove("blink");
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
    const Typer = new Typewriter("type", this.props.contentArr);
    Typer.type();
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
            justify-content: center;
          }

          #type {
            display: inline-block;
            text-shadow: 2px 2px #ddd;
          }

          .blink {
            visibility: hidden;
          }
        `}</style>
      </div>
    );
  }
}

export default Typewriter;
