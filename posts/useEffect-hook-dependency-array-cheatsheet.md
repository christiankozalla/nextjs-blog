---
"title": "useEffect Hook: Dependency Array Cheatsheet"
"date": "2022-03-20"
"author": "Christian Kozalla"
"shortTitle": "A useEffect reference to my future self"
"description": "A quick cheatsheet about useEffect. Examples of controlling when the effect runs, skip unnecessary function calls using the dependency array!"
"imageUrl": "/images/useEffect-hook-dependency-array-cheatsheet/useEffect-hook-cheatsheet.webp"
"imageAttribution": 'Photo by <a href="https://unsplash.com/@genessapana?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Genessa Panainte</a> on <a href="https://unsplash.com/photos/vtzuJbsaFSY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
"tags": ["React", "Hooks"]
"isInDb": true
---

# useEffect Hook: Dependency Array Cheatsheet

Hey friends! I'm Christian :wave:, an aspiring frontend developer from germany. I'm writing (yet another) post about React's useEffect hook primarily for future reference. I frequently use useEffect, but I happen to struggle with advanced use-cases and complexity from time to time. So, I'll brush up my understanding of useEffect and try to fit it into the bigger picture of React's component lifecycle and JavaScript closures. :rocket:

I've started reading up on useEffect in [the official documentation of useEffect](https://reactjs.org/docs/hooks-effect.html). I highly recommend you check it out for an in-depth guide about useEffect.

## Basics about useEffect

Hooks were introduced in React v16.7.0-alpha, and they provide a way to encapsulate component logic into reusable pieces of code. Additionally hooks can seamlessly interact with different parts of component state or be stateful themselves, which is a major advantage.

### Mental Model for useEffect

The useEffect hook is one of the most frequently used hooks provided by React. You can think of useEffect as a replacement for <i>componentDidMount</i>, <i>componentDidUpdate</i> and <i>componentDidUnmount</i> just for functional components all in one.

useEffect offers a way to hook into the components lifecycle and perform side-effects. Side-effects are operations that affect things **outside** of the component function. Side-effects basically make a function impure if the return value relies of on data outside the function's scope.

In class components you'd think about the lifecycle in terms of "mounting", "updating" and "unmounting", which were related to the lifecycle methods I listed above. But with functional components and hooks it is better to think about component lifecycle in terms of just "rendering".

### The Effect

The signature of the useEffect hooks is `useEffect(effectFn, dependencyArray)`. Let's talk about the `effectFn` parameter first and simply call it our "effect" (as in the [official useEffect guide](https://reactjs.org/docs/hooks-effect.html)).

## Run Effect on Every Render

Important to know: The effect **runs on every render** by default. This behavior can be customized by using the `dependendyArray`, i.e. the second parameter of the hook, which is optional. More on the dependency array later!

```jsx
import { useEffect } from "react";

export default function MyComponent() {
  useEffect(() => {
    // inside our effect
  });
}
```

### A Word about Closures

useEffect or hooks in general get really interesting when they interact with variables outside their own function body, i.e. in the component's scope. Let's consider a common case where the effect uses a state variable of the component.

```jsx
import { useEffect, useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // inside our effect
    console.log("I run on every render whatsoever", count);
  });

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        +++
      </button>
    </div>
  );
}
```

What happens when the component renders **initially** (which is also called "mounting")?

1. The function `MyComponent` is called
2. The `count` state variable is initialized with a value of 0
3. The effect function is initialized and closes over the `count` state variable. Like `console.log(count)` is resolving to `console.log(0)`
4. The DOM is painted according to the JSX returned from the component
5. The effect runs and logs 0 to the console.

If `count` is set to a new value, the component must re-render and go through steps 1 to 5. On every render a _new_ effect is initialized and called.

But imagine our effect will be much more expensive and should not necessarily run on each render. Since our effect relies only on `count` we only want it to run _only when `count` changes_.

Enter the dependency array!

### The Dependency Array

With the dependency array you get fine-grained control about _when_ the effect should run. The dependency array is passed as the (optional) second argument to the useEffect hook.

- If you don't pass a dependency array, the effect will run on every render.
- If you pass an empty array, the effect will run on every render.
- If you pass an array with state variables, the effect will run only when at least one of these variables changes.

## Run the effect only on first render

```jsx
useEffect(() => {
  // inside our effect
  console.log("I run only on first render!");
}, []); // Empty dependency array
```

## Run the effect only when count changes

```jsx
import { useEffect, useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // inside our effect
    console.log(count);
  }, [count]);
  //  ^^^^^ if count changes between re-renders, run our effect! If not, skip the effect.

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        +++
      </button>
    </div>
  );
}
```

## The Cleanup

In some cases, you want to run a function when the component unmounts, i.e. a cleanup function. Commonly, if you have attached event listeners to the DOM, you want to remove them when the component unmounts. Or if you have set an interval once after mounting, you'll want to clear the interval after unmounting.

In order to run a function after unmounting, you must return that cleanup function from the effect.

```jsx
import { useEffect, useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      //        ^^^^^^^^^ important: pass a callback function to setCount
      // this way the interval will always use the latest count state value
    }, 1000);

    return () => {
      // cleanup function
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        +++
      </button>
    </div>
  );
}
```

## Play with my code on [StackBlitz](https://stackblitz.com/edit/react-ts-ca3br5?file=index.tsx)

Have a great time coding! :heart:
