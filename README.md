<div align="center">
  <img src="https://github.com/christiankozalla/nextjs-blog/blob/master/public/android-chrome-192x192.png" alt="chrisko.io Icon" />
  <h1>
    chrisko.io
  </h1>
  <h2>
    Personal Developer Blog by Christian Kozalla
  </h2>
  <h3>This is the Codebase of my personal Developer Blog - chrisko.io</h3>
</div>

## chrisko.io is powered by

- [Next.js](https://nextjs.org) - a lightweight React Framework for Production
- Markdown Integration with [Remark](https://www.npmjs.com/package/remark)
- [AWS DynamoDB](https://aws.amazon.com/dynamodb/) - a fast and flexible NoSQL Database

## Pages Overview

- `pages/api/posts/[id]` - API routes powering Page Views and Likes connecting to AWS DynamoDB
- `pages/posts/[id]` - Dynamic routes are generated for each blog post Markdown file
- `pages/*` - Other static pages like _Home_, _Blog_ and _About_

## Running chrisko.io locally

<code style="line-height: 2.5em;">
  <pre>
    $ git clone https://github.com/christiankozalla/nextjs-blog.git
    $ cd nextjs-blog
    $ npm install   OR $ yarn
    $ npm run dev   OR $ yarn dev
  </pre>
</code>
