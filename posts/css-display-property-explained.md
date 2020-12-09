---
'title': 'The CSS Display Property Explained'
'date': '2020-12-09'
'author': 'Christian Kozalla'
'shortTitle': 'An introduction to the CSS Display property with quick facts and an illustrated example! The behavior of HTML block and inline elements explained and how they integrate in CSS Flow Layout'
'description': 'CSS powers the web along with HTML and JavaScript. CSS has powerful features, one being the display property defining how an HTML element integrates into the CSS Flow Layout of a Website. Background knowledge of the display property and its most frequently used values block and inline helps to understand positioning and element flow in the browser! Additionally, a working example is supplied for outlining the importance of CSS display!'
'imageUrl': '/images/css-display-property-explained/css-display-property-explained.png'
'tags': ['CSS', 'beginner', 'tutorial']
'isInDb': true
---

# The CSS Display Property Explained

While CSS is the core styling language for powering the world wide web along with HTML and JavaScript, it is often getting least attention especially by beginner frontend developers putting their main focus on quickly learning frontend JavaScript frameworks like React or Vue. After diving deep into core features of CSS you'll recognize what CSS is really capable of!

## Everything is a box

Remember how everything is a box on the web? Here is a quick refresher!

- Browsers render each element from the element tree as a box.
- Each box has a _margin_, a _border_ and a _padding_ precisely defining its dimensions

<p align="center">
  <img src="/images/css-display-property-explained/box-example-without.png" alt="Simple Website Layout" width="100%" />
  <figcaption style="padding-top: 0; padding-left: 2rem; font-style: italic">Fig 1: Part of a website I recently built - Notice blue arrows down</figcaption>
</p>

The image above shows part of a website I recently built, where different shapes are included. Using the brower's developer tools you can easily display the boxes around each rendered element.

<p align="center">
  <img src="/images/css-display-property-explained/box-example-our-stories.png" alt="Box around web HTML element" width="100%" />
  <figcaption style="padding-top: 0; padding-left: 2rem; font-style: italic">Fig 2: Box with margin (red), padding (green) without border here</figcaption>
</p>

Especially the blue arrows pointing down are interesting. You may be surprised to see that - despite their triangular shape - these arrows are still rendered **as a rectangular box** in the browser!

<p align="center">
  <img src="/images/css-display-property-explained/box-example-arrow-down.png" alt="Box around arrow poiting down" width="100%" />
  <figcaption style="padding-top: 0; padding-left: 2rem; font-style: italic">Fig 3: This is the box around the arrow poiting down</figcaption>
</p>

As you can see the box has two solid borders and is rotated by 45 degrees in order to let the arrow point down. But it is **still a box!**

## CSS Flow Layout

In order to define the page's layout each box is put into the _normal flow_ depending on their `display` values. The most basic values for the CSS `display` propety are

- `display: block`
- `display: inline`
- `display: none`

> An element set to `display: none` is **completely removed** from the _normal flow_, so its not appearing in the element tree, unlike `visibility: hidden`

Here, we want to focus on `display: block` and `display: inline` to give you some basic knowledge of how to use these properties to your liking.

### Many HTML elements are _inline_ or _block_ by default

Everytime we use a `<div>` element, we actually use a block-level element. Ooooops, I am glad you already knew that! :smile:

Here's a list of most frequently used HTML elements and their default `display` property values.

| `display: block` | `display: inline` |
| ---------------- | ----------------- |
| `<div>`          | `<a>`             |
| `<p>`            | `<span>`          |
| `<ul>`           | `<img>`           |
| `<ol>`           | `<button>`        |
| `<li>`           | `<input>`         |
| `<nav>`          | `<textarea>`      |
| `<header>`       | `<select>`        |
| `<footer>`       | `<i>`             |
| `<pre>`          | `<code>`          |
| `<hr>`           | `<br>`            |

## Block vs Inline elements

Basic differences of block and inline elements influence how they integrate into the _flow layout_. Being aware of these facts help to understand positioning elements on a website and may be useful when debugging :wink:

### Block-level element behavior

- Always start on a new line
- Take 100% width (of the parent element) by default
- Can be applied `width` and `height` with CSS
- Can have `block` and/or `inline` child elements

### Inline element behavior

- Do not start on a new line
- Sibling inline elements appear next to each other
- Take only as much space as needed
- Can only contain other `inline` elements

## CSS display working example

Imagine you have some parapgraph with text including several anchors in order to link the user to other pages. You want to fire a CSS animation on hover, to let the user know that's a clickable link.

[This Article by Danny Guo](https://www.dannyguo.com/blog/animated-multiline-link-underlines-with-css/) covers the topic of underlining multiline text with CSS quite nicely and very in-depth!

Here is a quick visual example of our aimed solution.

<p align="center">
  <img src="/images/css-display-property-explained/underline-example.gif" alt="Multiline underline on hover animation" width="100%" />
  <figcaption style="padding-top: 0; padding-left: 2rem; font-style: italic">Fig 4: Animation of our solution</figcaption>
</p>

So, in order to make an underline animation with CSS, we can basically set a `background-image` on the element with `linear-gradient` which generates an image for the background. Initially, the `background-size` is set to the full height (100%), but to zero width (0%). Then a transition is set on the original element animating its `background-size` when that property will be changed on hover.

```css
#with-underline {
  background-image: linear-gradient(
    transparent calc(100% - 15px),
    rgba(36, 153, 209, 0.5)
  );
  background-size: 0% 100%;
  background-repeat: no-repeat;
  transition: background-size 0.35s cubic-bezier(0.42, 0, 0.58, 1) 0.1s;
}

#with-underline:hover,
#with-underline:focus {
  background-size: 100% 100%;
}
```

On hover the elements `background-size` increases its width to 100% using the specified _cubic-bezier_ timing function. More on predefined timing functions can be found [here](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)

> It's best practice to apply similar or the same visual effect on focused elements for users how navigate your site through the keyboard or with screen readers. So make sure to include `:focus` next to the `:hover` pseudo-element selector!

## What may happen if you are not aware of display `block` and `inline` bahavior?

<p align="center">
  <img src="/images/css-display-property-explained/display_block.gif" alt="Multiline underline on hover animation" width="100%" />
  <figcaption style="padding-top: 0; padding-left: 2rem; font-style: italic">Fig 5: Multiline underline animation fails</figcaption>
</p>

When applying the CSS above to a `block` element, i. e. `#with-underline` being a `<div>` or `<p>`, the _multiline_ underline animation fails :rage:

Simply adding `display: inline` to the respective element (or changing it to an `inline` HTML element by default like `<span>` or `<a>`) gives us the wanted solution of a multiline underline animation on hover! :tada:

<p align="center">
  <img src="/images/css-display-property-explained/display_inline.gif" alt="Multiline underline on hover animation" width="100%" />
  <figcaption style="padding-top: 0; padding-left: 2rem; font-style: italic">Fig 6: Multiline underline animation works</figcaption>
</p>

## Conclusion

CSS is a powerful language being constantly improved by [W3C](https://www.w3.org/) and is one of the foundational languages for the web next to HTML and JavaScript. Knowing the basics about the CSS `display` property, HTML elements and their default `display` values and how it affect the integration of said HTML elements into the CSS _Flow Layout_ helps with positioning elements on a website. I can be a huge time saver when it comes to debugging!

This introduction to CSS `display` and its most frequently used values `block` and `inline` may broaden your background knowledge of CSS and help setting up layouts with HTML and CSS! :fire:

### Further Reading

- [MDN CSS: Cascading Style Sheets - Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN CSS: Flow Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout)
- [MDN CSS: Inline Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)
- [MDN CSS: Block Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)
