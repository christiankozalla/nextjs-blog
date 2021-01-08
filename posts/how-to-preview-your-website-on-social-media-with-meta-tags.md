---
'title': 'How to preview your Website shared on Social Media with Meta Tags'
'date': '2021-01-08'
'author': 'Christian Kozalla'
'shortTitle': 'In this Tutorial we use meta tags in the HTML head along with Open Graph for sharing a Card of your website on Twitter.'
'description': 'Websites should be easily shared on Social Media such as Facebook, Twitter, Whatsapp etc. In order to be an eye-catcher, it is essential to display the link in a visually attractive manner e.g. with a featured image, a convincing title and a concise description. It will drive peoples engagement! In this Tutorial we use meta tags in the HTML head along with Open Graph for sharing a Card on Twitter.'
'imageUrl': '/images/how-to-preview-your-website-shared-on-social-media-with-meta-tags/how-to-preview-your-website-shared-on-social-media-with-meta-tags.png'
'tags': ['SEO', 'Tutorial']
'isInDb': true
---

# How to preview your Website on Social Media with Meta Tags

Websites should be easily shared on Social Media such as Facebook, Twitter, Whatsapp, or Discord communities.

In order to be an eye-catcher, it is essential to display the link in a visually attractive manner e.g. with a featured image, a convincing title and a concise description. It will drive people's engagement!

In this Tutorial we use meta tags in the HTML head along with Open Graph for sharing a Card on Twitter. :email:

## Boilerplate HTML meta tags for sharing on Facebook and Twitter

Long story short: If you add these boilerplate HTML meta tags to your documents `<head>`, a URL to this page shared on Facebook or Twitter will be displayed as an engaging _card_ to make your content _stand out_ already in your Tweet or Post.

```html
<!-- Boilerplate for HTML meta tags to preview on Facebook, Twitter -->
<!DOCTYPE html>
<html lang="en">
  <head prefix="og: https://ogp.me/ns#">
    <!-- ... other tags like title, link, charset, viewport -->
    <meta property="og:title" content="Example - Title of my Site" />
    <meta
      property="og:description"
      content="Example - Description of my Site"
    />
    <meta
      property="og:image"
      content="https://example.com/example-featured-image.jpg"
    />
    <meta name="twitter:site" content="@username-example" />
    <meta
      name="twitter:card"
      content="summary || summary_large_image || player || app"
    />
    <meta name="twitter:creator" content="@username-example" />
  </head>
  <body>
    <!-- Content you want to share -->
  </body>
</html>
```

Just replace the examples with your original content and the message you want to send!

> _Attention_: Make sure to include `prefix="og: https://ogp.me/ns#"` in the opening `<head>` tag. Otherwise the provided Open Graph meta tags won't work.

## Here is an overview of Twitters different card types:

- `summary` - Displays a Summary Card with a _Title_, _description_ and _thumbnail image_
- `summary_large_image` - Displays a Summary Card with a _large_, _prominent_ image
- `player` - Shows a Card that can stream _video/audio_ or _other media_ directly
- `app` - Shows a Card with a direct link to a _mobile app_ download from App Store or Google Play

> The Image should be square and at least 120x120px, but less than 1MB size

## Example: The Summary Card of chrisko.io

<p align="center">
  <img src="/images/how-to-preview-your-website-shared-on-social-media-with-meta-tags/example-card.png" alt="Social Media Card Example" width="100%" />
  <figcaption style="padding-top: 0; padding-left: 2rem; font-style: italic">Fig 1: Social Media Summary Card</figcaption>
</p>

Here is the Summary Card of _chrisko.io_ previewed on the [Twitter Card Validator](https://cards-dev.twitter.com/validator) - I use this tool to test my pages' social media cards before going _live_

Facebook offers a similar tool: [The Sharing Debugger](https://developers.facebook.com/tools/debug/)

There two chrome extensions for previewing and debugging meta tags for social media cards:

- [Social Share Preview](https://chrome.google.com/webstore/detail/social-share-preview/ggnikicjfklimmffbkhknndafpdlabib?hl=en)
- [Open Graph Preview](https://chrome.google.com/webstore/detail/open-graph-preview/ehaigphokkgebnmdiicabhjhddkaekgh?hl=en)

> These extensions even let you preview a card on your _localhost_ :heart:

- [heymeta.com](https://www.heymeta.com/) is a Social Card Previewer to give you an in-depth feedback of each single meta tag - and provides debugging!

## Developing with React, Next or Nuxt?

We've discussed what meta tags have to be present in the HTML to supply information for social media cards to our websites URLs. But how to add these meta tags when developing using a framework like React, Vue, Next, Nuxt or whatever (..I know, React is still a library..) :wink:

Here is what I'd recommend for several popular frameworks

- **Next.js**: NPM package [next-seo](https://www.npmjs.com/package/next-seo) is a blast! It's capable of adding OpenGraph, Twitter tags and JSON-LD (which is a form of structured data) :thumbsup:
- **Nuxt.js**: Meta tags and SEO are a native feature of Nuxt.js - check out their [documentation](https://nuxtjs.org/docs/2.x/features/meta-tags-seo/) for more!
- **React.js**: A rich introduction to meta tags in React at [create-react-app.dev](https://create-react-app.dev/docs/title-and-meta-tags/) - [React-Helmet](https://github.com/nfl/react-helmet) is the go-to package for dynamically managing the `<head>` in React apps.

## Conclusion

In this tutorial we generate boilerplate HTML meta tags for social media cards like used to preview URLs shared on Twitter or Facebook.

We looked at an example summary card of _chrisko.io_.

Most valuable, we collected tools to enhance the process of adding meta tags to your website to make it look great when shared on social media! :rocket:

### Additional Resources

- [Twitter Developer Docs - About Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Open Graph Documentation](https://ogp.me/)
