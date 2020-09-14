<div align="center">
  <img src="https://github.com/christiankozalla/nextjs-blog/blob/master/public/favicons/android-chrome-192x192.png" alt="DevDiary Icon" />
  <h1>
    DevDiary
  </h1>
  <br/>
  <h2>
    Personal Developer Blog by Christian Kozalla
  </h2>
  <br/>
  <h3>This is the Codebase of my personal Developer Blog - DevDiary</h3>
</div>

## DevDiary is powered by

- [Next.js](https://nextjs.org) - a lightweight React Framework for Production
- Markdown Integration with [Marksy](https://www.npmjs.com/package/marksy)
- [AWS DynamoDB](https://aws.amazon.com/dynamodb/) - a fast and flexible NoSQL Database

## Pages Overview

- `pages/api/posts/[id]` - API routes powering Page Views and Likes connecting to AWS DynamoDB
- `pages/posts/[id]` - Dynamic routes are generated for each blog post Markdown file
- `pages/*` - Other static pages like _Home_, _Blog_ and _About_

## Running DevDiary locally

<code style="line-height: 2.5em;">
  <pre>
    $ git clone https://github.com/christiankozalla/nextjs-blog.git
    $ cd nextjs-blog
    $ npm install   OR $ yarn
    $ npm run dev   OR $ yarn dev
  </pre>
</code>
