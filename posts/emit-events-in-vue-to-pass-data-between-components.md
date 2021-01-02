---
'title': 'Emit Events in Vue to pass Data between Components'
'date': '2021-01-02'
'author': 'Christian Kozalla'
'shortTitle': 'Modern frontend frameworks like Vue use props to pass data down the component tree. But how to pass data up? With custom events in Vue.'
'description': 'Modern frontend frameworks like Vue or React use props to pass data down the component tree. But how to pass data up? With Vue you can design your custom event, define how it is triggered and catch data bubbling up to the parent component.'
'imageUrl': '/images/emit-events-in-vue-to-pass-data-between-components/emit-events-in-vue-to-pass-data-between-components.png'
'tags': ['Vue.js', 'Tutorial']
'isInDb': true
---

# Emit Events in Vue to pass Data between Components

This practical guide provides code snippets about **custom events** in Vue which can be used to pass data up the component tree. For regular DOM events like `click` please refer to the [Vue Docs](https://vuejs.org/v2/guide/events.html).

> Now, data always flow _down_ the component tree in Vue or other frontend frameworks - with props. But, how to pass data up without using _global state_ like Vuex?

## Passing data _up_ to the parent component - with custom events

Using [custom events](https://vuejs.org/v2/guide/components-custom-events.html) allows us to pass data up the component tree, or notify the parent component that a custom event has happened - if no data is being passed.

But what if we need to notify a parent component that some event has been triggered in a child or even pass data _upwards_?

The answer is **emitting custom events in Vue**.

We need to take care of these steps to emit events in Vue:

- Think about the **trigger for the event**: a **condition** in a method, computed property or watcher in child component from where the event is emitted
- **Emit the event** with `this.$emit("my-custom-event", \[data\])` when the condition is met
- **Catch the event** bubbling up to a parent component

> **Event naming convention**: Custom event names should be in **kebab-case** like in `my-custom-event`. In addition, it is _not_ recommended to use capital letters like in PascalCase or camelCase since HTML event handlers are case-insensitive.

## 1. Trigger the event with a custom condition

For this step it is essential to define in which case the event should be emitted. We need to define a condition inside a computed property, a method or a watcher in order to get there.

Suppose we're having a form and want to pass the input value up to the parent when the form is being submitted.

**Let's dive right into the example code:**

```js
// ChildComponent.vue
<template>
  <form v-on:submit="onSubmit">
    <input v-model="inputValue" type="text" />
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  name: "ChildComponent.vue",
  data() {
    return {
      inputValue: ""
    }
  },
  methods: {
    onSubmit() {
      this.$emit("form-submitted", this.inputValue);
    }
  }
}
</script>
```

In this example ChildComponent we're defining the condiction when the event shall be emitted: When the form is being submitted. Our event handler is a method `onSubmit()`.

> It is very common to include _form validation_ inside event handlers for submitting forms. A minimal example of form validation in this case is shown next:

```js
// ChildComponent.vue with form validation
  methods: {
    onSubmit() {
      if (!this.inputValue) {
        console.error("Please insert some text...");
      } else {
        this.$emit("form-submitted", this.inputValue);
      }
    }
  }
```

### Event modifiers

> In the example above we're making use of the regular submit event **and** a custom event we called `form-submitted`. It is important to differentiate, here.

`click` and `submit` are the most common _regular_ DOM events. The `v-on`-directive provides several **event modifiers** in case you want to call `event.preventDefault()` or `event.stopPropagation()`.

Here are quick examples for event modifiers on `click` or `submit` events in Vue:

```js
// click events propagation will be stopped
<a v-on:click.stop="handleClick">Click</a>

// The submit event will no longer trigger a page reload
<form v-on:submit.prevent="onSubmit"></form>
```

> If you want to know more about event modifiers check out the [Vue Docs](https://vuejs.org/v2/guide/events.html#Event-Modifiers).

## 2. Catch the event in a parent component

Now, inside the parent component we need to catch the emitted event and setup a handler method there.

```js
// ParentComponent.vue
<template>
  <child-component v-on:form-submitted="handleFormData" />
</template>

<script>
export default {
  name: "ParentComponent",
  data() {
    return {
      formData: []
    }
  },
  methods: {
    handleFormData(formDataFromChild) {
      this.formData.push(formDataFromChild);
    }
  }
}
</script>
```

Inside our `handleFormData` method we are simply putting the form data passed from the child component in the local state of the parent component.

> You may also see the short-hand version of `v-on`, which is `@` because it is so frequently used in Vue.

```js
  <child-component v-on:form-submitted="handleFormSubmit" />

  // is equal to

  <child-component @form-submitted="handleFormSubmit" />
```

### A more advanced example of using custom events in Vue is covered in the second part of my [Vue Quiz App Tutorial](https://chrisko.io/posts/vue-tutorial-build-a-frontend-quiz-app-with-custom-events)

## More Ressources

- [Vue App Tutorial Part 1: Build a Frontend Quiz App](https://chrisko.io/posts/vue-tutorial-frontend-quiz-app-headsup)
- [Event Handling in Vue Cheatsheet](https://learnvue.co/2020/01/a-vue-event-handling-cheatsheet-the-essentials/)
- [Difference between `preventDefault()` and `stopPropagation()`](https://itnext.io/preventdefault-vs-stoppropagation-3631de9fe1c6)
