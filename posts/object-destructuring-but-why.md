---
"title": "Object Destructuring, but Why?"
"date": "2021-04-04"
"author": "Christian Kozalla"
"shortTitle": "Object Destructuring is a handy syntax feature of JavaScript. It enables you to write cleaner code, especially when using it to destructure parameters right inside a function definition!"
"description": "Object Destructuring is a handy syntax feature of JavaScript. It enables you to write cleaner code, especially when using it to destructure parameters right inside a function definition! I rarely used it in the past, although familiar with the syntax. But recently it saved me a lot of pain when I needed to pass a bunch of arguments to Vuex actions and mutation handlers. It allowed for easily keeping track of all the stuff being passed around between the functions!"
"imageUrl": "/images/object-destructuring-but-why/object-destructuring-but-why.png"
"imageAttribution": ""
"tags": ["JS", "snippets"]
"isInDb": true
---

# Object Destructuring, but why?

Once you have learnt a little bit of JavaScript, you may have come across a concept called _Object Destructuring_.

When I first read the term I thought: _"What the heck is this?"_ :confused:

> Destructuring allows you to _unpack_ key/value pairs from objects and store each in it's own variable. :thumbsup:

_Note:_ Destructuring is possible with arrays as well, which obviously have no key/value pairs, but essentially are also a JavaScript object. :wink:

So what exactly does **unpacking an object** mean :question:

Consider the following lines of code:

```js
const payload = {
  key: "myKey",
  name: "Christian",
  age: 27,
  married: true,
  occupation: "developer"
};

const validate = (payload) => {
  // validate payload
  if (
    payload.key &&
    payload.name &&
    payload.age &&
    payload.occupation &&
    payload.hasOwnProperty("married")
  ) {
    console.log("All fields are set");
  } else {
    console.log("Please fill out the form properly");
  }
};
```

Imagine you have some kind of form `<input />` on an app, that stores the values in component state on the client-side. Once the user presses the _Upload_ button, a validation function might be called to highlight form fields that are not filled out correctly. Now, our form data is stored in an object `payload` that we pass to the validation function `validate(payload)`.

The function wants to check if our object keys contain truthy values. That's what we do in the `if` statement's condition.

This is a darn long line of code - it's been a hassle to write and sure is a pain to read! :rage:

Now, imagine you would have to reference and check these keys more often throughout the function code!

<!-- prettier-ignore -->
:heart: _Object Destructuring_ to the rescure - reduces risk of typos, improves readability.

```js
const payload = {
  key: "myKey",
  name: "Christian",
  age: 27,
  married: true, // test with false, null, undefined
  occupation: "developer"
};

const validate = (payload) => {
  // destructure payload - unpacking...
  const { key, name, age, married, occupation } = payload;

  // Now we can access these keys as ordinary JavaScript variables
  if (key && name && age && occupation && typeof married === "boolean") {
    console.log("All fields are set", key, name, age, occupation, married);
  } else {
    console.log("Please fill out the form properly");
  }
};

validate(payload);
```

Here, first thing we do is _destructuring the payload keys_ into their own variables.

```js
// destructure payload - unpacking...
const { key, name, age, married, occupation } = payload;
```

You often saw this line in the ol' days when React components were still JavaScript classes, instead of functions. So, in order to access the keys of an object passed as props to the class component, the first line inside the `render()` function would destructure the keys from the props:

```js
// Destructuring inside the render function
// of a React class component
render() {
  const { name, age } = this.props;
  return {
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  }
}
```

## Object destructuring in the function definition

Most confusing is the syntax of a destructuring assignment inside the parameters of a function definition:

```js
const myFunc = ({ name, age, occupation }) => {};
```

In the definition of `myFunc` the parameters _are already destructured_!

See, it is clear that an object is passed to the function with the following keys: `name`, `age` and `occupation`

So, here is the most concise version of our first example code with destructuring inside the function definition:

```js
const payload = {
  key: "myKey",
  name: "Christian",
  age: 27,
  married: true, // test with false, null, undefined
  occupation: "developer"
};

const validate = ({ key, name, age, married, occupation }) => {
  // Now we are saving one line,
  // because destructuring inside the function definition
  if (key && name && age && occupation && typeof married === "boolean") {
    console.log("All fields are set", key, name, age, occupation, married);
  } else {
    console.log("Please fill out the form properly");
  }
};

validate(payload);
```

## Object destructuring is nice, but when to use it?

First off: You don't _have_ to use object destructuring.

You might _need_ to be familiar with the object destructuring when reading other people's code.

But apart from that, object destructuring is _nice to know_ and might be a handy concept of writing code a little cleaner.

I have been familiar with the concept of destructuring for a little while now, but never used it in a regular basis.

But recently, I used it in a project with [Vue](https://vuejs.org) and [Vuex](https://vuex.vuejs.org). I dealt with a bunch of arguments I wanted to pass to a Vuex action, which would perform some tasks on the arguments and then call a Vuex mutation to update the state, if processing went fine.

So first I had to pass everything like 4 - 5 key/value pairs to the action, then write the code for the action, then pass everything or a subset of arguments to the mutation handler.

Without destructuring my function arguments both for the Vuex action and mutation I totally lost track of all the stuff being passed in and out of the functions! :confused:

With object destructuring right in the function definition, I easily remembered how I named the parameters passed at different places throughout the app! :thumbsup:

## Conclusion

To sum up, _object destructuring_ is great for writing readable code. I find it especially useful inside a function definition in order to keep track of all the parameters passed to the function.

Stay tuned && happy coding! :rocket:

## Related content

- [MDN Reference of the Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
