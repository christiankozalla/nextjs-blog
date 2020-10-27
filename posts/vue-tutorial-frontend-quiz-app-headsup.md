---
'title': 'Vue.js Tutorial: Build a Frontend Quiz App'
'date': '2020-10-23'
'author': 'Christian Kozalla'
'shortTitle': 'Learn the fundamental concepts of Vue.js and create a custom Quiz App along with me!'
'description': 'In this tutorial you build a Quiz app and learn fundamental concepts of Vue.js. We cover Vue components, computed properties, methods, Vue directives and much more! Our Frontend Quiz app fetches data from an API and walks the user through an interactive Quiz! I have provided a GitHub repository with the Starter-Code for you! Have fun following along!'
'imageUrl': '/images/vue-tutorial-frontend-quiz-app-headsup.jpg'
'tags': ['Vue.js', 'Frontend', 'Tutorial']
'isInDb': true
---

# Vue Tutorial: Build a Frontend Quiz App

In this tutorial you'll build a Quiz app and learn fundamental concepts of Vue.js. We will be using Vue v2 still. Vue.js is a beginner-friendly JavaScript Framework for building complex user interfaces based on reusable components. Large-scale Frontend Apps are easily built and maintained due to many advantages of Vue.

## Advantages of Vue.js

- **Beginner-friendly** - you can apply all your knowledge about HTML, CSS and JavaScript in Vue right away
- **Components** - Each Component stores its Markup, Styling and JavaScript in a single file
- **Directives** - One of Vue's most powerful features are [directives](https://vuejs.org/v2/api/#Directives) - see them in action throughout this tutorial
- **Excellent Documentation** - find [Examples](https://vuejs.org/v2/examples/) and [Cookbooks](https://vuejs.org/v2/cookbook/) and much more!
- **Virtual DOM** - Vue is blazing fast due to the usage of the Virtual DOM
- **Huge Ecosystem** - Sure, Vue's ecosystem is not as big as React's, but core libraries many bigger projects rely on, like for routing or state-management, are maintained actively by the Creators of Vue! For routing there is [Vue Router](https://router.vuejs.org/) and for state-management there is [Vuex](https://vuex.vuejs.org/)

## Get the <a href="https://github.com/christiankozalla/vue-quiz-tutorial" target="_blank">Starter-Code from my GitHub Repository</a> to follow along with me.

Start working with the Starter-Code as described in the repositories README. I will break it down into small disgestible bites for you:

## Step-by-Step Tutorial of a Vue.js Quiz App

- Step 1: Fetch Data from API (Vue lifecycle methods)
- Step 2: Display and Style Data in Template (Vue scoped CSS)
- Step 3: Add Functionality and handle User action (Vue methods and computed properties)
- Step 4: Emitting events - show Modal with Quiz score

**Try the <a href="https://vue-quiz-app.christiankozalla.vercel.app" target="_blank">live demo of our Quiz App!</a>**

### Vetur - Extension for VS Code

> Before we start, it's nice to know that **<a href="https://vuejs.github.io/vetur/" target="_blank">Vetur</a>** is a popular extension for VS Code that many Vue Developers rely on. It supports Syntax-highlighting, Snippets, Linting, Formatting and much more! I enjoy its benefits myself ;)

## Basics about Vue Components

Each Vue Component lives inside a _.vue_ file. In this project, all Components are stored in `/src/components`. A Vue Component consists of three parts:

- `<template>` - The Component's HTML
- `<script>` - The Component's JavaScript is written inside the `<script>` tags. Basically,`data` and `computed` properties or `methods` are put onto the Vue instance here.
- `<style scoped>` - All CSS goes here and is automatically scoped to the Component's markup template only. No pollution of other Component's markup!

```html
// Example of a Vue Component
<template>
  <div id="app">
    <header>
      <p>This is a Vue Component</p>
    </header>
    <Quiz />
  </div>
</template>

<script>
  import Quiz from '@/components/Quiz.vue';

  export default {
    name: 'App',
    components: {
      Quiz
    }
  };
</script>

<style scoped>
  #app {
    margin: 0;
    line-height: 1.6;
  }
</style>
```

## Step 1: Fetch Data from API

We will build out our Quiz inside the _Quiz.vue_ Component. I initiated the _App.vue_ Component already in the Starter-Code template, included basic styles globally and integrated the _Quiz.vue_ Component. So we can start right off inside _Quiz.vue_.

Here is the Starter-Code of the Quiz Component, that should already be inside your `Quiz.vue`. Your browser should only display a static website with the headsup logo and a small text saying _"Questions HTML here"_

```html
// Starter-Code: Quiz.vue Component
<template>
  <div id="quiz-container">
    <img id="logo-crown" src="@/assets/crown.svg" alt="headsUP Crown" />
    <h1 id="logo-headline">headsUP</h1>
    <!-- div#correctAnswers -->
    <hr class="divider" />
    <!-- question div -->
    Questions HTML here
    <hr class="divider" />
  </div>
</template>

<script>
  export default {
    name: 'Quiz'
  };
</script>

<style scoped>
  #quiz-container {
    margin: 1rem auto;
    padding: 1rem;
    max-width: 750px;
  }

  #logo-headline {
    font-size: 3rem;
    padding: 0.5rem;
    color: #f50057;
    text-align: center;
  }

  #logo-crown {
    display: block;
    width: 40%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 500px) {
    #logo-crown {
      width: 30%;
    }

    #logo-headline {
      font-size: 1.8rem;
    }
  }

  h1 {
    font-size: 1.3rem;
    padding: 0.7rem;
  }

  .divider {
    margin: 0.5rem 0;
    border: 3px solid rgba(102, 255, 166, 0.7);
    border-radius: 2px;
    box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.3);
  }
</style>
// Starter-Code: Quiz.vue Component
```

### Initialize data properties on Component instance

Vue stores its _state_ variables in a `data()` function. In order to initialize our data properties and set our default values, we need to add it to the Component instance.

```js
// Quiz.vue
<script>
export default {
  name: "Quiz",
  // data() function stores state variables
  data() {
    return {
      questions: [],
      loading: true
    };
  }
}
</script>

<style scoped>
  // leave default styles from Starter-Code
</style>
```

Our `questions` data is set to an empty array by default, `loading` is set to `true`, because we will be fetching questions from the <a href="https://opentdb.com/" target="_blank">Trivia API</a> and push them to the `questions` array when the component is mounted. On each call, we are fetching 10 questions at once.

Next, we need a method to fetch the questions data from the API. All `methods` of a Vue Component are written on the `methods` property of the Component instance. We are going to add a method `addQuestions()` to _fetch the questions_, manipulate them a little and store them in the `questions` array. While `fetchQuestions()` runs, the `loading` property will be set to `true`. Only when the `questions` array receives the data, `loading` will be set back to `false`.

```js
// Quiz.vue
<script>
export default {
  name: "Quiz",
  // data() function stores state variables
  data() {
    return {
      questions: [],
      loading: true
    };
  },
  // Custom methods of the Vue Component
  methods: {
    async fetchQuestions() {
      this.loading = true;
      // fetch questions
      let response = await fetch("https://opentdb.com/api.php?amount=10&category=9");
      // convert questions to json
      let jsonResponse = await response.json();
      // manipulate questions
      let data = jsonResponse.results.map((question) => {
        // put answers on question into single array
        question.answers = [
          question.correct_answer,
          ...question.incorrect_answers,
        ];
          return question;
      });
        // put data on questions property
        this.questions = data;
        this.loading = false;
    },
  }
}
</script>
```

Now, we want the Component to fetch and store the data, _when the Component mounts_. That's why we need the `mounted()` function from <a href="https://vuejs.org/v2/api/#mounted" target="_blank">Vue's lifecycle hooks</a> and call `fetchQuestions()` from there!

```js
// Quiz.vue
<script>
export default {
  name: "Quiz",
  // data() function stores state variables
  data() {
    return {
      questions: [],
      loading: true
    };
  },
  // Custom methods of the Vue Component
  methods: {
    async fetchQuestions() {
      this.loading = true;
      // fetch questions
      let response = await fetch("https://opentdb.com/api.php?amount=10&category=9");
      // convert questions to json
      let jsonResponse = await response.json();
      // manipulate questions
      let data = jsonResponse.results.map((question) => {
        // put answers on question into single array
        question.answers = [
          question.correct_answer,
          ...question.incorrect_answers,
        ];
          return question;
      });
        // put data on questions property
        this.questions = data;
        this.loading = false;
    },
  },
  // Code inside mounted() runs after the Component has mounted
  mounted() {
    this.fetchQuestions();
  }
}
</script>
```

> Maybe you have already tested, whether the data from our API call comes through with `console.log()`. But now we have the data, we can display it right through the HTML template.

### Display first question from API data

```js
// Quiz.vue HTML template
<template>
  <div id="quiz-container">
    <img id="logo-crown" src="@/assets/crown.svg" alt="headsUP Crown" />
    <h1 id="logo-headline">headsUP</h1>
    <!-- div#correctAnswers -->
    <hr class="divider" />

    <div v-if="loading">Loading...</div>
    <div v-else v-html="questions[0].question">
      <!-- Only first Question is displayed -->
    </div>

    <hr class="divider" />
  </div>
</template>
```

The `v-if`- directive checks if `loading` is `true` and allows for flow control, whether to display a set of markup or not. In our case, while `loading` is `true`, the Component display _Loading..._ where the question will be displayed once loading has finished. A `v-if` directive can be combined with a `v-else`. So, if the `questions` array received the question objects from the API (i.e. fetching was successful and `loading` is `false`), we put the first question inside another directive: `v-html`. It takes in any valid HTML as a string and updates the elements `innerHTML`. So we feed the first `question` of our question object (at index 0) to `v-html="questions[0].question`.

> Quick side note: We could use double-curly braces inside the template in order to display anything from the Component's data in our markup: `<div>{{ questions[0].questions }}</div>` But the strings from the Trivia API sometimes include unicode HTML entities like _\&quot;_ or _\&amp;_ - `v-html` decodes these entities correctly.

**If you view our Quiz App after finishing Step 1, the first question should be displayed underneath the logo. On each page refresh, there should be a new question, because a new set of questions will be fetch from the API. You can also check the Components data using the <a href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd" target="_blank">Vue.js devtools</a> for chrome.**

## Step 2: Display and Style Data in Template

Since we want to display each single question and its corresponding answers one by one (not all at once), we are going to implement a `computed` property `currentQuestion` that returns the current question at the current `index`. So `index` is our state variable initialized at 0 (to correspond with the first item of our questions array). Later, we're going to write methods to check the user's answer, reveal correct answer and mark the wrong answer if the user answered wrong. These methods will increase `index` by one each time the user answers the current question. Thus, the user will be prompted to answer the next question to continue the quiz!

Here is the full code for completing Step 2, but without the styles, so please leave the styles from Step 1. We are going to dissect each change individually. ;)

```html
// Quiz.vue at the end of Step 2
<template>
  <div id="quiz-container">
    <img id="logo-crown" src="@/assets/crown.svg" alt="headsUP Crown" />
    <h1 id="logo-headline">headsUP</h1>
    <!-- div#correctAnswers -->
    <hr class="divider" />
    <div>
      <h1 v-html="loading ? 'Loading...' : currentQuestion.question"></h1>
      <form v-if="currentQuestion">
        <button
          v-for="answer in currentQuestion.answers"
          :index="currentQuestion.key"
          :key="answer"
          v-html="answer"
          @click.prevent="handleButtonClick"
        ></button>
      </form>
      <hr class="divider" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Quiz',
    data() {
      return {
        questions: [],
        loading: true,
        index: 0
      };
    },
    computed: {
      currentQuestion() {
        if (this.questions !== []) {
          return this.questions[this.index];
        }
        return null;
      }
    },
    methods: {
      async fetchQuestions() {
        this.loading = true;
        let response = await fetch(
          'https://opentdb.com/api.php?amount=10&category=9'
        );
        let jsonResponse = await response.json();
        let data = jsonResponse.results.map((question) => {
          // put answers on question into single array
          question.answers = [
            question.correct_answer,
            ...question.incorrect_answers
          ];
          return question;
        });
        this.questions = data;
        this.loading = false;
      }
    },
    mounted() {
      this.fetchQuestions();
    }
  };
</script>
```

### Using the ternay operator to check for data from API

We are replacing the `v-if` and `v-else` divs from the first step with this.

```html
<div>
  <h1 v-html="loading ? 'Loading...' : currentQuestion.question"></h1>
  <form v-if="currentQuestion">
    <button
      v-for="answer in currentQuestion.answers"
      :index="currentQuestion.key"
      :key="answer"
      v-html="answer"
      @click.prevent="handleButtonClick"
    ></button>
  </form>
  <hr class="divider" />
</div>
```

> **If you view our Quiz App right after replacing parts of the template**, you'll get some error messages in the browser console. We are referring to the `currentQuestion` property before having created it. So let's move on quickly!

Even though, the Vue directives take in ordinary strings as their arguments, Vue allows us to write valid JavaScript expressions inside these strings. Notice how we use the ternary operator to check the `loading` property and display "Loading..." or the current question!

```html
<h1 v-html="loading ? 'Loading...' : currentQuestion.question"></h1>
```

On the `<button>` element we are using another of Vue's most valuable directives: the `v-for` directive. Since ours answers on each question object are put into an array, we are using `v-for` to loop over this array and display a `<button>` element for each single answer.

```html
<button
  v-for="answer in currentQuestion.answers"
  :index="currentQuestion.key"
  :key="answer"
  v-html="answer"
  @click.prevent="handleButtonClick"
></button>
```

`v-for="answer in currentQuestion.answers"` on the `<button>` tells the element to loop over `currentQuestion.answers`. At the same time, we are putting the `answer` on the `<button>` element using the `v-html` directive again. You can work with the `answer` variable that we defined in the `v-for` directive on the same element or on elements _nested inside this element._

> I have already included `@click.prevent="handleButtonClick"` on the `<button>` which we will use in Step 3, later.

### Add `computed` property to Vue instance

On your Components JavaScript we are adding the `currentQuestions()` `computed` property and adding the `index` state variable. Pretty straightforward.

```js
// Quiz.vue script
export default {
  name: 'Quiz',
  data() {
    return {
      questions: [],
      loading: true,
      index: 0
    };
  },
  computed: {
    currentQuestion() {
      if (this.questions !== []) {
        return this.questions[this.index];
      }
      return null;
    }
  },
  methods: {
    // async fetchQuestions() already here
  }
};
```

> Inside JavaScript code the keyword `this` usually refers to the Vue Component instance, e.g. `this.questions` points to the questions array in our `data()` function. But, it is sometimes appropriate to bind `this` to a function (in special cases) which would otherwise use another `this` context by default. We'll get to that, later.

To finish Step 2, we need to add default styling on our button. Add the following CSS to the `<style scoped>` tag inside the `Quiz.vue` Component.

```css
/* Inside <style scoped> tags */
form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

button {
  font-size: 1.1rem;
  box-sizing: border-box;
  padding: 1rem;
  margin: 0.3rem;
  width: 47%;
  background-color: rgba(100, 100, 100, 0.3);
  border: none;
  border-radius: 0.4rem;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.2);
}

button:hover:enabled {
  transform: scale(1.02);
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -1px rgba(0, 0, 0, 0.2);
}

button:focus {
  outline: none;
}

button:active:enabled {
  transform: scale(1.05);
}
```

Now your Quiz Frontend App should display the first question and the corresponding answers each as a button with some neat default styling.

## Step 3: Add Functionality and handle User action

Now, we are getting straight into the **bread and butter** of a JavaScript developer - adding interactivity to a Web App and providing functionality to our users.

### Update `fetchQuestions()` to put more information on the raw questions data

Please replace your existing `fetchQuestions()` method with the following snipped. We put on additional properties on each question object, i.e. `question.rightAnswer` and `question.key`, right after fetching and before updating our Component's state `this.questions`. Additionally, we're shuffling the `answers` array, because otherwise the correct answer would always be put on the first button.

```js
async fetchQuestions() {
  this.loading = true;
  let response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=9"
  );
  let jsonResponse = await response.json();
  let index = 0; // index is used to identify single answer
  let data = jsonResponse.results.map((question) => {
    // put answers on question into single array
    question.answers = [
      question.correct_answer,
      ...question.incorrect_answers,
    ];
    // Shuffle question.answers array
    for (let i = question.answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [question.answers[i], question.answers[j]] = [
        question.answers[j],
        question.answers[i],
      ];
    }
    // add rightAnswer and key property to each question
    question.rightAnswer = null;
    question.key = index;
    index++;
    return question;
  });
  this.questions = data;
  this.loading = false;
}
```

## Add `handleButtonClick()` to Vue methods

A user click is handled in two seperate steps. First, we call `handleButtonClick()` which does a list of useful things for us:

- identifies the answer the user has clicked on
- sets a class `.clicked` on that button
- disables all the other buttons

`handleButtonClick()` calls another method `checkAnswer()` which does some useful things, too.

- compares the `userAnswer` with the `correct_answer` provided by the API
- sets `.rightAnswer` or `.wrongAnswer` class on the clicked button in order to notify the user if he has answered correctly or not
- if the user answered incorrectly, class `.showRightAnswer` will be put on the button holding the correct answer. If the user has guessed wrong, they may want to know what is the correct answer to that question.
- increments `this.index` by one in order to move on to the next question

```js
// methods of Quiz.vue
handleButtonClick: function(event) {
  /* Find index to identiy question object in data */
  let index = event.target.getAttribute("index");

  let pollutedUserAnswer = event.target.innerHTML; // innerHTML is polluted with decoded HTML entities e.g ' from &#039;
  /* Clear from pollution with ' */
  let userAnswer = pollutedUserAnswer.replace(/'/, "&#039;");

  /* Set userAnswer on question object in data */
  this.questions[index].userAnswer = userAnswer;

  /* Set class "clicked" on button with userAnswer -> for CSS Styles; Disable other sibling buttons */
  event.target.classList.add("clicked");
  let allButtons = document.querySelectorAll(`[index="${index}"]`);

  for (let i = 0; i < allButtons.length; i++) {
    if (allButtons[i] === event.target) continue;

    allButtons[i].setAttribute("disabled", "");
  }

  /* Invoke checkAnswer to check Answer */
  this.checkAnswer(event, index);
},
checkAnswer: function(event, index) {
  let question = this.questions[index];

  if (question.userAnswer) {
    if (this.index < this.questions.length - 1) {
      setTimeout(
        function() {
          this.index += 1;
        }.bind(this),
        3000
      );
    }
    if (question.userAnswer === question.correct_answer) {
      /* Set class on Button if user answered right, to celebrate right answer with animation joyfulButton */
      event.target.classList.add("rightAnswer");
      /* Set rightAnswer on question to true, computed property can track a streak out of 10 questions */
      this.questions[index].rightAnswer = true;
    } else {
      /* Mark users answer as wrong answer */
      event.target.classList.add("wrongAnswer");
      this.questions[index].rightAnswer = false;
      /* Show right Answer */
      let correctAnswer = this.questions[index].correct_answer;
      let allButtons = document.querySelectorAll(`[index="${index}"]`);
      allButtons.forEach(function(button) {
        if (button.innerHTML === correctAnswer) {
          button.classList.add("showRightAnswer");
        }
      });
    }
  }
},
```

### Add CSS styles for additional classes for UX

The following CSS is used to styles buttons appropriately depending on these cases:

- Did the user answer correctly? Button is marked with `.rightAnswer`
- Did the user answer incorretly? Button, which the user clicked on, is marked with `.wrongAnswer`, additionally the button with the correct answer is marked with `.showRightAnswer`

Please add the CSS styles to your existing CSS on the `Quiz.vue` Component.

```css
/* Styles in Quiz.vue for UX on user answer */
@keyframes flashButton {
  0% {
    opacity: 1;
    transform: scale(1.01);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.02);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

button.clicked {
  pointer-events: none;
}

button.rightAnswer {
  animation: flashButton;
  animation-duration: 700ms;
  animation-delay: 200ms;
  animation-iteration-count: 3;
  animation-timing-function: ease-in-out;
  color: black;
  background: linear-gradient(
    210deg,
    rgba(0, 178, 72, 0.25),
    rgba(0, 178, 72, 0.5)
  );
}

button.wrongAnswer {
  color: black;
  background: linear-gradient(
    210deg,
    rgba(245, 0, 87, 0.25),
    rgba(245, 0, 87, 0.5)
  );
}

button.showRightAnswer {
  animation: flashButton;
  animation-duration: 700ms;
  animation-delay: 200ms;
  animation-iteration-count: 2;
  animation-timing-function: ease-in-out;
  color: black;
  background: linear-gradient(
    210deg,
    rgba(0, 178, 72, 0.25),
    rgba(0, 178, 72, 0.5)
  );
}
```

### Whoohoo, your Vue.js Frontend Quiz App should be functional now! Have fun playing =)

**Quick side note: Binding `this` to function body** I mentioned it above, sometimes it is necessary to bind `this` to a function in order to tell the function that `this` refers to the Vue Component instance. Here, we have an example of _this_ inside `checkAnswer()`. First, we're checking if the user has put an answer on the question (if `question.userAnswer` evaluates to a truthy value), and if so, we're calling `setTimeout()` in order to wait 3 seconds before incrementing `this.index` moving on to the next question. `setTimeout` takes in two parameters: a function and the amount of milliseconds to wait before executing it. Notice, we need to bind this to the function body like so: `setTimeout(function() {...}.bind(this), 3000)`

```js
// inside checkAnswer() method
if (question.userAnswer) {
  if (this.index < this.questions.length - 1) {
    setTimeout(
      function() {
        this.index += 1;
      }.bind(this),
      3000
    );
  }
```

## Step 4: Emitting events - show Modal with Quiz score

I'm afraid, that the current scope of this Tutorial is already **overwhelming** at this stage. I initially planned to include a Modal Component which shows the overall score of the user throughout the ten question streak. That would teach you how to **emit an event** in Vue bubbling up from a child Component in order to trigger an algorithms or to transport data to its parent.

But for now, I'll leave it at that!

**You can find the [code of the full working Quiz App up to step 3 here](https://github.com/christiankozalla/vue-quiz-tutorial/tree/tutorial)!**

The full featured **<a href="https://vue-quiz-app.christiankozalla.vercel.app" target="_blank">Quiz App is live here!</a>**

#### If you are interested in implementing a custom Modal at the end of the Quiz showing the user his score and much more,

#### direct message me on Twitter: [@ChristianKozal1](https://twitter.com/ChristianKozal1)

#### Or reach out to me via Mail: devdiary.blog@gmail.com

Happy coding!
