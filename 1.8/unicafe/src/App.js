import React, { useState } from 'react'

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

const Statistics = (props) => {
  return (
    <>
    <All good={props.good} neutral={props.neutral} bad={props.bad}/>
    <Average good={props.good} neutral={props.neutral} bad={props.bad}/>
    <Positive good={props.good} neutral={props.neutral} bad={props.bad}/>
    </>
  )
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
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    </div>
  )
}

export default App