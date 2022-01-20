# React App



## React render

When data changes, React will efficiently update and re-render our components.

In particular, render returns a React element, which is a lightweight description of what to render.

Effects are declared inside the component so they have access to its props and state.

By default, React runs the effects after every render.

```

import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)

```

## React props

A component takes in parameters, called props (short for "properties"), and returns a hierarchy of views to display via the render method.

Passing props is how information flows in React apps, from parents to children.

The term "render prop" refers to a technique for sharing code between React components using a prop whose value is a function.

A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

```

import React, { useState } from 'react'

const All = (props) => {

  const total = props.good_props + props.neutral_props + props.bad_props

    return (
        <p>All: {total}</p>
    )
}

const Average = (props) => {

  const total = props.good_props + props.neutral_props + props.bad_props

  let average = 0;

  if (total > 0) {
    average = ((props.good_props - props.bad_props) / total)
  }

    return (
        <p>Average: {average}</p>
    )
}

const Positive = (props) => {

  const total = props.good_props + props.neutral_props + props.bad_props

  let positive = 0;

  if (total > 0) {
    positive = (props.good_props / total) * 100
  }
    return (
        <p>Positive: {positive}%</p>
    )
}

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
        <All good_props={good} neutral_props={neutral} bad_props={bad}/>
        <Average good_props={good} neutral_props={neutral} bad_props={bad}/>
        <Positive good_props={good} neutral_props={neutral} bad_props={bad}/>
      </div>
    </div>
  )
}

export default App

```