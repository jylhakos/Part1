# React App

```

import React, { useState } from 'react'

const Button = (props) => (

  <button onClick={props.handleClick}>{props.text}</button>

)

const All = (props) => {

  const total = props.good + props.neutral + props.bad

    return (
        <p>All: {total}</p>
    )
}

const Average = (props) => {

  const total = props.good + props.neutral + props.bad

  let average = 0;

  if (total > 0) {
    average = ((props.good - props.bad) / total)
  }

    return (
        <p>Average: {average}</p>
    )
}

const Positive = (props) => {

  const total = props.good + props.neutral + props.bad

  let positive = 0;

  if (total > 0) {
    positive = (props.good / total) * 100
  }
    return (
        <p>Positive: {positive}%</p>
    )
}

const Statistic = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  )
}

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <>
      <p>No feedback given</p>
      </>
    )
  } else {

  return (
    <>
    <Statistic text="Good:" value={props.good}/>
    <Statistic text="Neutral:" value={props.neutral}/>
    <Statistic text="Bad:" value={props.bad}/>
    <All good={props.good} neutral={props.neutral} bad={props.bad}/>
    <Average good={props.good} neutral={props.neutral} bad={props.bad}/>
    <Positive good={props.good} neutral={props.neutral} bad={props.bad}/>
    </>
  )}
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Unicafe</h1>
      <div>
      <h2>Feedback</h2>
        <>
        <Button handleClick={() => setGood(good + 1)} text="Good"/>
        <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"/>
        <Button handleClick={() => setBad(bad + 1)} text="Bad"/>
        </>
      </div>
      <div>
      <h2>Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    </div>
  )
}

export default App

```