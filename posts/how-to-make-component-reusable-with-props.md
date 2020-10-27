---
'title': 'How to Make Banner a Reusable Component with Props'
'date': '2020-07-08'
'author': 'Christian Kozalla'
'shortTitle': "Making components reusable gives plenty of advantages: flexibility, maintainability and less code so you don't repeat yourself!"
'description': 'I am going to implement my Welcome Banner Component to be displayed on every page where the Typewriter Component shall be fed with variable Text Input based on the title of the page. The component will be included into the Container Component which already wraps the whole content section of DevDiary, making the Banner part of the ubiquous layout.'
'imageUrl': '/images/how-to-make-component-reusable-with-props.jpg'
'tags': ['JavaScript', 'Banner', 'React']
'isInDb': true
---

### Defining the Goals of Changing the Banner Component

As I was recently building a Banner component with a nice, dynamically changing colorful background, to which I added a Typewriter component to have an animation of text typed into the headline, I was only making it work for the main page of DevDiary. Yesterday, I wanted to use the Banner on a different page with different text input. Calling an instance of the `<Welcome />` component, which already includes the `<Typewriter />`, on a different page only gave me the same text as I already had on the main page, i.e. "Welcome to DevDiary" etc. I didn't want that text on that page.

I had to make the component reusable, and I definitely **knew how!** But first, let's look at the (non-reusable) status-quo:

My _deepest_ component `<Typewriter />` looked like this:

```js
// inside Typewriter class component
componentDidMount() {
  const Typer = new Typewriter("type", this.props.content);
  Typer.type; // make Typewrite type
};
```

In `<Welcome />` I was calling a `<Typewriter />` instance like this:

```js
<div className="banner">
  <Typewriter content={['Hi, I am Christian', 'Welcome to DevDiary']} />
</div>
```

Calling `<Welcome />` in another component was done like this:

```js
<Welcome />
```

So I was using props to pass content from `<Welcome />` to `<Typewriter />`, but on a level too shallow. To choose content, where `<Welcome />` was inserted I had to make sure `<Welcome />` was accepting props in the fist place.

My journey began on the top-most level: The `<Welcome />` component.

```js
import React, { useEffect } from "react";
import Typewriter from "./Typewriter";

const Welcome = (props) => {
  // color-gradient logic here, called from useEffect
    return (
    <div id="welcome">
      <div className="banner">
        <Typewriter
          content={props.text}
          rounds={props.rounds}
          padding={props.padding ? props.padding : "2.5rem"}
          center={props.center}
        />
      </div>
      <style jsx>{`
        .banner {
          display: flex;
          justify-content: ${props.center ? "center" : "flex-start"};
          align-items: center;
          height: 150px;
          width: 100%;
          padding: 0 3rem;
        }
      `}</style>
    </div>
}
```

`<Welcome />` is expecting props `text`, `rounds`, `padding` and `center`. `text` is a required input, otherwise the `<Typewriter />` won't type anything. But I included default values for `rounds`, `padding` and `center` in case no values are defined when calling the instance.

Now, inserting <Welcome /> is done like this:

```js
<Welcome
  text={['Hi, I am Fred', 'Welcome to London']}
  rounds={3}
  padding="3rem"
  center={false}
/>
```

`rounds` determines how often the `text` will be typed back and forth. `padding` sets the left padding to have the text bound left, but still being centered. `center` centers the text making in _move on both ends_, know what I mean?! If `center` is true, `padding` will be set to 0, automatically.

Let's take a look how `<Typewriter />` is receiving and processing those props.

```js
class Typewriter extends React.Component {
  constructor(id, arr, rounds = 1) {
    super(id, arr, rounds);
    if (process.browser) {
      this.el = document.getElementById(id);
      this.blinker = document.getElementById('blinker');
      this.period = 150;
      this.interval = '';
      this.deleteInterval = '';
      this.word = '';
      this.add = true;
      this.textArray = arr;
      this.roundtrip = 0;
      this.rounds = rounds;
    }
  }

  // Typewriter methods defined here

  componentDidMount() {
    // content sets the contents which Typewriter types as an Array
    // rounds sets how often the Typewriter types the contents; last item stays visible
    // padding sets left padding in order to center text; props Type is String e.g. "4rem"
    let Typer = new Typewriter('type', this.props.content, this.props.rounds);
    Typer.type();
  }

  render() {
    return (
      <div className="flex-text">
        <h1 id="type"></h1>
        <h1 id="blinker">|</h1>
        <style jsx>{`
          h1 {
            font-family: 'Dancing Script', 'Norican', 'Roboto';
            font-size: 3em;
            margin: 0;
            padding: 0;
          }

          .flex-text {
            display: flex;
            flex-flow: row wrap;
            padding-left: ${this.props.center ? '0' : this.props.padding};
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
```

`padding-left` value is based on a ternary operator checking `this.props.center` and setting "0" or `this.props.padding`.

Thanks for reading through my post on how to make this `<Welcome />` component **reusable**. Have a nice day! ..and keep coding =)

<p align="center">
<img src="/images/Banner.gif" alt="Banner" width="90%" />
</p>
