---
"title": "The Right Tool for the Job in Frontend Engineering"
"date": "2021-03-20"
"author": "Christian Kozalla"
"shortTitle": "Before starting new projects in Web Development I have been thinking alot about tools I want to use next. But are the tools that I have in mind really fit for the job? Here is what I found."
"description": "Lately, I've been thinking alot about choosing the right tools and frameworks for another project. Ok, I simply go ahead and choose. Harder than you think! Because so many tools are damn hot right now - like TailwindCSS. Other tools have been hyped for years and still are - like React. But what if these tools aren't fit for every project? What if they only shine in their specific domain? Here is what I found to choose the right tools depending on the use-case of your web project."
"imageUrl": "/images/the-right-tool-for-the-job-in-frontend-engineering/fausto-marques-A9dq-L3zzHA-unsplash.jpg"
"imageAttribution":
  'Photo by <a href="https://unsplash.com/@faustomarques?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fausto Marqués</a> on <a href="/s/photos/tool-for-the-job?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  '
"tags": ["Frontend", "Frameworks"]
"isInDb": true
---

# The Right Tool For The Job - In Frontend Engineering

Lately, I've been thinking alot about **choosing the right tools and frameworks** for another project.

Ok, go ahead and choose.

Harder than you think!

Because...

- So many technologies are _so damn hot_ right now :fire: Some old kids from the block like [React](https://reactjs.org), some new kids from 'round the corner like [TailwindCSS](https://tailwindcss.com) :wink:

- _More important:_ So many _other_ frameworks I am eager to use in my next project! Like [Bulma](https://bulma.io/), [UIkit](https://getuikit.com/), [Next.js](https://nextjs.org/), [Eleventy](https://www.11ty.dev/), [Gridsome](https://gridsome.org/), [LitElement](https://lit-element.polymer-project.org/), [Shoelace](https://shoelace.style/), simply [Sass](https://sass-lang.com/) - just to name a few.

<figure align="center" class="post__box-shadow full-width">
  <img
    src="/images/the-right-tool-for-the-job-in-frontend-engineering/barn-images-t5YUoHW6zRo-unsplash.jpg"
    alt="So many tools to choose from - tools in a workshop"
    class="post__image"
  />
  <figcaption>
    <em>So many tools to choose from!?</em> <br/> <span class="small-fonts">Photo by <a href="https://unsplash.com/@barnimages?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Barn Images</a> on <a href="/s/photos/workshop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
  
  </figcaption>
</figure>

But **careful**! There are things to consider:

1. Heavy dependencies like the ones named above can shape a project in many unexpected ways. It will dictate the developer experience (DX), may limit flexibility, impact performance and user experience (UX) - the look and feel of the product.

2. Depending on the use-case for your website or web app, a correct choice of framework / tool can enable the quick and frictionless development and maintenance of said product. But, vice versa, choosing a framework / tool not fitting the use-case of the project may ruin the finished product altogether! :alert:

> Random dev: _"I am building my **blog with React!**"_ <br/> Everyone screaming: _"Nooooooo!"_ or _"Why the hell?!"_

Actually, I felt confronted with the problem of choosing the right framework for a web project, when I thought about why I learnt [React - of all frontend frameworks - so early on my journey?](/posts/picking-a-frontend-framework-as-a-beginner).

The ongoing hype around React gives clueless beginners the impression, React might be the solution to all frontend-related problems.

It is not. By far!

## Choosing the right tool for the job

Let's divide the process into individual steps.

1. Define the use case / purpose of the project
2. Write some user stories - what is the minimum solution - what features are available in the full-blown website / web app
3. Answer some questions based on the use case
   - Is your web app highly interactive?
   - How frequently is the displayed content changing? Every second (stock market), every minute (social media), daily or fully static content..?
   - Do you require user authentication and authorization?
   - Do you prefer client-side JS over server-side?
   - Do you need offline availability paired with an app-like feel with push notifications, installable directly from the browser? Might go for a PWA

I any case, you decide _in favor of your users!_

> Does _"But-I-Wanna-Try-This-Fancy-New-Framework"_ count? <br/> > **Yes.** But only if it's a side-project - or no commercial ambitions there.

## Is the content mostly static..?

For example, when building a blog or a landing page there's usually only static content - no need for parts of the website due to user interaction. In fact, there is **so much** you can achieve with HTML, CSS and _presentational\*_ JavaScript (\*[expression borrowed](https://bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/) from [@Brad_Frost](https://twitter.com/brad_frost)).

Advantages of static websites

- Browser receives HTML and CSS ready for being rendered instantly. So its blazing fast!
- Can be served via a CDN - no web server needed!
- almost no or very little client-side JavaScript needs to be downloaded
- vast variety of UX possible - forms, popups, animations, video embed, third-party integrations (e.g. CodePens, Tweets)
- Can be developed in a modular, components-based fashion (e.g. with web components, or static site generators like [Eleventy](https://www.11ty.dev/))

Drawbacks of static websites

- Limited user input processing
- Full page-loads required, if underlying data of only a single component changes

## ..or frequently changing dynamic content?

If yes, there are certain advantages of heavy-client-side-JS-frameworks like React, Vue or Angular.

- Incrementally updating components - no full page-loads required
- Get the whole web app with one request and fetch data from multiple APIs / origins along the ways
- frequently update data using streams
- Receive and process heavy user input for maximum interactivity

From the aspects above you'll get a good grasp of what sort of product is ideally built with React & Vue.

> This ain't no simple website, no! It's a web _app_. A programm that _happens_ to run in the browser!

Recently, I started contributing to an open-source project called [deckdeckgo](https://deckdeckgo.com). DeckDeckGo is a wonderful web app to create presentations to share and use them across the web. Imagine it to be like PowerPoint, but completely in the cloud and runs in the browser or on your phone. A perfect example for a web app - user input and interactivity is essential here - _making_ a presentation, upload assets, store and share the slides.

## It boils down to data & interactivity

Basically it all boils down to data and interactivity.

Does a simple website containing images, paragraphs, blog posts or other _informational_ content need to be interactive?

Does a simple website heavily rely on user input and processing?

No.

There are tools to build static sites. Use them.

Other tools shine in building web apps.

I might not know all the tools in the web development universe...yet. Until I do, I'll try to choose the right tool for the job.

That's it for now. Stay tuned & happy coding :rocket:
