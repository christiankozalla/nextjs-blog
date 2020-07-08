---
"title": "My first Blog made with Next.js - DevDiary"
"date": "2020-06-30"
"author": "Christian Kozalla"
"description": "In this post I'll walk you through each step of creating my first Blog with Next.js, React, style-jsx and Markdown. Starting with some basics about Next.js, then diving into the birth of the essential components. Each step is supplemented by Code Snippets and detailed description. I'd like to inspire anyone seeking to create their own Blog!"
"imageUrl": "/images/Coding-Screen.jpg"
"tags": ["React", "Next.js", "Markdown"]
---

## My first Blog made with Next.js

In this post I'll walk you through each step of creating my first Blog with Next.js, React, style-jsx and Markdown. Each step is supplemented by Code Snippets and detailed description. I am aiming to inspire anyone seeking to create their own Blog! First, I want to start you off with a simple truth I learnt while programming every day for the past months:

> _"If you want to succeed, double your failure rate."_  
>  Thomas J. Watson, former CEO of IBM

Since I, myself was heavily inspired by two existing blogs especially in the early stage of creating my own, I'd like to say **Thank You!** Please, take a look at [leerob.io](https://leerob.io) and [christianalfoni.com](https://christianalfoni.com) whose blogs are open source on GitHub as well!

The birth of my _DevDiary_ started with a single command.

```sh
$ npx create-next-app
```

This will set up a ready-to-code Next.js app that adds powerful tools to an _ordinary_ React app like

- an intuitive page-based routing system (even dynamic routes are supported)
- Pre-rendering with static site generation or server-side rendering
- Automatic code splitting which accelerates page loads
- Client-side routing with optimized prefetching
- Built-in _style-jsx_ for CSS styling, but supports any CSS-in-JS library e.g Tailwind or @emotion
- Enhanced SEO in contrast to fully client-side rendered React apps
- API routes to build endpoints with Serverless functions

So after finding out the basics of [how to develop in Next.js](https://nextjs.org/learn/basics/create-nextjs-app) I was ready to start building DevDiary. I am going to introduce you to the basic knowledge, but I recommend to read through the short Next.js _Learning Path_ I have linked above.

In order to start the _development server_ on localhost:3000 (sounds familiar? ;-) just type in the terminal:

```sh
$ npm run dev
```

### Basic Design for the Main Page

`npx create-next-app` already created index.js in _/pages/index.js_. In Next.js, every page that should be accessible via an individual URL, e.g. _https://devdiary.io/blog/first-next-js-blog-devdiary_, is built from a JavaScript file in the _/pages_ directory. There you can use any React component you built. Mine live in the _/components_ directory.

In addition to the page files, Next.js supports an \__app.js_ file to include components that should be rendered on every page. Think of a Navbar or a Footer that should be displayed throughout the whole App and always look the same. So you don't have to import that components to each page .. (imagine you make 10 - 15 individual pages). Just place it inside \__app.js_ inside the _/pages_ directory. Voila!

```js
import Container from "../components/Container";
import "../styles/global.css"; // Global styles

export default ({ Component, pageProps }) => (
  <Container>
    <Component {...pageProps} />
  </Container>
);
```

You see that Container wraps all child `<Components />`, no matter which page. Quick note: If you make changes to \__app.js_, restart the development server in order to see the effect.

Now, let's figure out how to build out the `<Container />`.

```sh
$ mkdir components
$ cd components
$ touch Container.js
>>> Happy hacking =)
```

```js
import Link from "next/link";
import { FiGithub, FiTwitter } from "react-icons/fi"; // nice icons

const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="nav-wrapper">
        <nav className="navigation">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/posts">
            <a>Blog</a>
          </Link>
          <div className="nav-right">
            <a href="https://github.com/christiankozalla" target="_blank">
              <FiGithub />
            </a>
          </div>
        </nav>
      </div>
      <div className="content">{children}</div>
      <style jsx>
        {`
          .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
            height: 100%;
            width: 700px;
            margin: 0 auto;
            padding: 4rem 1rem 1rem 1rem;
          }

          @media (max-width: 500px) {
            .content {
              width: 100vw;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Container;
```

Boiling it down to _just the essentials_ it still seems alot: An outer `.container <div>`, a `.content <div>` where all the `{children}` are rendered and a `<nav>`. Notice the `<style jsx>` tags where you pass _vanilla CSS_ in between a template literal wrapped in brackets:

```js
<style jsx>{`
  vanilla CSS here
`}</style>
```

Place that style tags at the top or bottom of the outermost markup element, in my case `<div className="container"></div>`

### Dynamically colorful Welcome Banner Component

As a Header beneath the Navigation I wanted an eye-catcher - something colorful and dynamic! I've seen an animated Background on Codepen, which basically loops through the _colors of the Rainbow_ an grabs two and puts them inside a `linear-gradient` **every 10 ms**. Here, I will only describe the outline of that component, but I am goining into details for you to follow along and build for yourself in this article.

First, initialize the functional Compontent `Welcome` in _/compontents/Welcome.js_ and define a `colors` array where six arrays of _rgb-value-triples_ live in. In addition, we need a `step` variable which is incremented during each loop, and our `colorIndices`.

```js
import React from "react";

const Welcome = () => {
  const colors = [
    [62, 35, 255],
    [60, 255, 60],
    [255, 35, 98],
    [45, 175, 230],
    [255, 0, 255],
    [255, 128, 0],
  ];

  let step = 0;
  const increment = 0.002;

  const colorIndices = [0, 1, 2, 3];
};

export default Welcome;
```

Next, we define a function `updateGradient` inside our `Welcome` function. It grabs the element with `id="welcome"` and puts a CSS property on it, which basically is a `linear-gradient` with two random colors derived from the `colors` array via an algorithm (details here).

```js
const Welcome = () => {
  // keep existing code above
  const updateGradient = () => {
    const welcome = document.getElementById("welcome");

    // Get 4 single arrays from colors array
    const a_a = colors[colorIndices[0]];
    const a_b = colors[colorIndices[1]];
    [...]

    // Define another step variable
    let istep = 1 - step;

    // Calculate color components to make "random" color
    // Do this twice (r2, g2, b2) to get color2 aswell
    let r1 = Math.round(istep * a_a[0] + step * a_b[0]);
    let g1 = Math.round(istep * a_a[1] + step * a_b[1]);
    let b1 = Math.round(istep * a_a[2] + step * a_b[2]);
    const color1 = `rgb(${r1},${g1},${b1})`;

    // Assemble styles, include already existing
    const styles = `width: 100%; border-radius: 10px; box-shadow: 2px 2px 3px grey; background: linear-gradient(35deg, ${color1} 0%, ${color2} 100%);`;

    // Set styles on welcome element
    welcome.style.cssText = styles;

    // Update step with increment for next rnd colors
    step += increment;
  }
}
```

Now we only need to call `updateGradient` in a very short interval. We are going to call our function from `useEffect`, a React lifecycle Hook for functional components.

```js
import React, { useEffect } from "react";

const Welcome = () => {
  useEffect(() => {
    let colorInterval = setInterval(updateGradient, 10);
    return () => {
      clearInterval(colorInterval);
    };
  });

  // keep already existing code below
};
```

Our `colorInterval` invokes `updateGradient` every **10 ms** and since the DOM changes every time, `useEffect` updates our `Welcome` component immediately. We could achieve the same effect in React class Components using `componentDidMount()` and `componentDidUpdate()` lifecycle methods.  
When the user navigates to another page, the `Welcome` c omponent unmounts, so the interval has to be cleared in order to stop the `linear-gradient`. Notice how we passed a `return` statement to `useEffect` which takes effect once the component unmounts using `clearInterval`.

### Blog Posts Overview with Cards

I am a littlebit proud of the `Card` layout that you can marvel at on the front-page, where each Post is advertised on a little card! I was starting with some simple goals:

- Image captions as header of the card, size-independent of actual image size
- Headline with metadata (date, author, avatar) below
- A short description of the content, but with variable description length in different posts, the card's height should still be equal in all cards.
- Footer with a like-button and views counter (functionality to be included...)

I order to clip an image always to the same size no matter what size the original image has, the CSS properties `background-image`, `background-size` and `background-position` are very handy tools. Here is an example of my card images I worked in as headers.

```css
.card-header {
  background-image: url(`${post.imageUrl}`);
  background-position: center;
  background-size: cover;
  width: 100%;
}
```

`.card-header` refers to an Element, that includes the blog post hashtags that are display on top of the background image.

```js
<div className="card-header">
  {post.tags.map((tag) => {
    return <span key={tag}>{tag}</span>;
  })}
</div>
```

The `post` variable contains the metadata from the blog posts markdown front matter. I parse the front matter with [gray-matter](https://www.npmjs.com/package/gray-matter) which reads JSON-formatted front matter, too.  
So, `background-image` puts an image on the corresponding element, without an actual `<img>` tag. When I put `width: 100%` on the element, it streches out to the full width of its parent, which is the `.card-container` in my case.

I have read about an alternative CSS property `object-fit` to ensure images are always sized equally. Check out [moderncss.dev](https://moderncss.dev/) by Stephanie Eckles to blow your mind with simple solutions to old CSS problems. I found her Blog two days ago and already grew a huge fan!

So that's it for now! Thanks for reading through my first Blog Post on `<DevDiary />`. You can find the source-code of `<DevDiary />` on [GitHub](https://github.com/christiankozalla/nextjs-blog).
