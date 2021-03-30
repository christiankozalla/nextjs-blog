---
"title": "The CSS Position Property Explained -  with Examples"
"date": "2021-03-30"
"author": "Christian Kozalla"
"shortTitle": "CSS position can be used to design layouts, align elements pixel-perfectly and even draw pictures! So, in order to learn the fundamentals of CSS positioning, here is a quick reference! Two vivid examples are included to play around with!"
"description": "CSS position can be used to design layouts, align elements pixel-perfectly and even draw pictures! So, in order to learn the fundamentals of CSS positioning, here is a quick reference! Two vivid examples are included to play around with on CodePen!"
"imageUrl": "/images/css-position-property-static-absolute-relative-fixed-sticky-examples/css-position-property-static-absolute-relative-fixed-sticky-examples.png"
"imageAttribution": ""
"tags": ["CSS", "layout"]
"isInDb": true
---

# The CSS Position Property Explained - with Examples

Positioning may be foundational for designing all kinds of layouts across the web and yet after over a year into my web development journey, I am starting to get the hang of CSS `position` :wink:

You know how people google _how to center a `div`_ everytime?

Or how they spend _hours_ of trying to fit several elements into the intended alignment?

I can remember those times for myself. :unamused:

One reason to get _stuck_ writing CSS: Writing CSS rules is easy, but if the result is not as intended, CSS gives _no feedback_ on what went wrong, _no error message thrown_, so you're left off where you started and none the wiser. :rage:

It's terrible to _debug_ CSS. :cry:

It's not enough to know _what_ you want to achieve and gradually approach a solution, e.g. fixing console errors one-by-one like in scripting languages.

I realized it is essential to have a solid understanding of fundamental concepts of CSS and how the browser puts CSS rules into practice. :rocket:

## The Gist of CSS `position`

`top`, `left`, `right`, `bottom`, `z-index` properties can be used in conjuction with different values of `position`. These are `absolute`, `relative`, `fixed` and `sticky`.

It is crucial to know, what the values entered in `top`, `left`, `right`, `bottom`, `z-index` _refer_ to!

- `position: static` (default) - `top`, `left`, `right`, `bottom`, `z-index` have no effect
- `position: absolute` - `top`, `left`, `right`, `bottom` refer to element's nearest [_containing block_](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block) (mostly the body element, if no ancestor has a `position` value _other than static_)
- `position: relative` - `top`, `left`, `right`, `bottom` are relative to the element's original place in the normal flow (as if position was `static`)
- `position: fixed` - `top`, `left`, `right`, `bottom` are relative to to the viewport
- `position: sticky` - treated like a relatively positioned element until it would exit the viewport. Instead, `top`, `left`, `right`, `bottom` set the distance to the edges of the viewport

## When to use CSS positioning?

When you want to take an element out of the [normal document flow](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow) in order to position it where you desire.

`position` targets a single element. So if it's your goal to design a complete, responsive layout, it could be better to use `display: flex || grid`

With `fixed` and `sticky` positioning it is possible to tell an element to stay in the viewport - even if the user scrolled away.

## `position` property values in-depth

### `position: absolute`

```css
.positioned-absolute {
  position: absolute;
  top: 50px;
  left: 200px;
}
```

The above example pushes the element 50px down from the top and 200px away from the left.

- `position: absolute` takes an element out of the normal flow. It usually ends up on the top left corner of the page - unless it has got a parent that's `position` property is _not_ `static` (read more about an element's [nearest containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block))
- No space is reserved for the element (i.e. no gap in the normal flow)

### `position: relative`

```css
.positioned-relative {
  position: relative;
  top: 50px;
  left: 200px;
}
```

The above example pushes the element 50px down and 200px to the left, **but** _relative to it's original position_ in the document flow.

- `position: relative` leaves an element in the normal flow.
- Positioning _relative_ to original position with `top`, `left`, `right`, `bottom` and `z-index`
- Space is reserved for the element.

### `position: fixed` - similar to `absolute` but fixed to viewport

A `fixed` element is taken out of the normal flow with no space reserved. It is rendered fixed to the viewport positioned with `top`, `left`, `right`, `bottom`.

### `position: sticky` - similar to `relative` but sticks to viewport

Initially, the `sticky` element is rendered in its original position (like with `position: relative`). If the element is scrolled out of view, it keeps the distances set with `top`, `left`, `right`, `bottom` to the edges of the viewport.

So it stays in view!

## CSS `position` examples

To explain all possible values of CSS positioning, I made a CodePen that illustrates the different behavior on individually colored boxes

<iframe height="416" style="width: 100%;" scrolling="no" title="CSS Positioning Examples" src="https://codepen.io/ckozalla/embed/poREoKd?height=416&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ckozalla/pen/poREoKd'>CSS Positioning Examples</a> by Christian Kozalla
  (<a href='https://codepen.io/ckozalla'>@ckozalla</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

- <span style="color: blue;">`position: static` - This is the default value. The element is part of the normal document flow</span>
- <span style="color: red;">`position: relative` - The element has reserved space in the normal document flow, but can be adjusted <em>relative to its origin</em> with `top`, `left`, `right`, `bottom`, `z-index`</span>

### Another example - Structuring a recipe with `sticky` headlines above each step

I saw this on a cooking website, where recipes are shared and stuff. I found it kinda cool, so I rebuilt it in this pen.
With the `sticky` headlines, the user can easily see which step they're looking at. :smile:

<iframe height="265" style="width: 100%;" scrolling="no" title="Recipe Layout" src="https://codepen.io/ckozalla/embed/LYxRmEw?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ckozalla/pen/LYxRmEw'>Recipe Layout</a> by Christian Kozalla
  (<a href='https://codepen.io/ckozalla'>@ckozalla</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Recap positioning in CSS

The `position` property has five values `static` (default), `absolute`, `relative`, `fixed` and `sticky`

When `position` is set to something other than `static`, these other CSS properties enable advanced positioning: `top`, `left`, `right`, `bottom`

Most important to know: What are values set in `top`, `left`, `right`, `bottom` _referring to!_

That's it for CSS positioning!

Stay tuned && happy coding!
