# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React

A React component takes in parameters, called props (short for "properties"), and returns a hierarchy of views to display via the render method.

App is React component type in the below. 

We can now refer to the whole App by writing <App />.

## React JSX

React uses a special syntax called JSX for the description of what you want to see on the screen.

React uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript. 

You include the code you want to be treated as JavaScript within curly braces: {}

You can put any JavaScript expressions within curly braces {} inside JSX.

## React Hooks

React Hooks are functions that let you "hook into" React state and lifecycle features from function components, for example to use built-in state with useState function.

The useState returns a pair of the current state value and a function that lets you update it.

The array destructuring syntax [] lets us give different names to the state variables we declared by calling useState.

Effect Hook, called useEffect, adds the ability to perform side effects from a function component.

```

import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Unicafe</h1>
      <div>
      <h2>Feedback</h2>
        <button onClick={() => setGood(good + 1)}>
          Good
        </button>
        <button onClick={() => setNeutral(neutral + 1)}>
          Neutral
        </button>
        <button onClick={() => setBad(bad + 1)}>
          Bad
        </button>
      </div>
      <div>
      <h2>Statistics</h2>
        <p>Good:  {good}</p>
        <p>Neutral: {neutral}</p> 
        <p>Bad: {bad}</p>
      </div>
    </div>
  )
}

export default App

```

A link to React Hooks

https://reactjs.org/docs/hooks-intro.html

