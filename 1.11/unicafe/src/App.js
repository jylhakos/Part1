import React, { useState } from 'react'

const Button = (props) => (

  <button onClick={props.handleClick}>{props.text}</button>

)

const All = (props) => {

  const total = props.good + props.neutral + props.bad

    return (
        <>
        <td>All:</td><td>{total}</td>
        </>
    )
}

const Average = (props) => {

  const total = props.good + props.neutral + props.bad

  let average = 0;

  if (total > 0) {
    average = ((props.good - props.bad) / total)
  }

    return (
        <>
        <td>Average:</td><td>{average}</td>
        </>
    )
}

const Positive = (props) => {

  const total = props.good + props.neutral + props.bad

  let positive = 0;

  if (total > 0) {
    positive = (props.good / total) * 100
  }
    return (
        <>
        <td>Positive:</td><td>{positive}%</td>
        </>
    )
}

const Statistic = (props) => {
  return (
    <>
    <td>{props.text}</td><td>{props.value}</td>
    </>
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
    <table>
    <tbody>
    <tr><Statistic text="Good:" value={props.good}/></tr>
    <tr><Statistic text="Neutral:" value={props.neutral}/></tr>
    <tr><Statistic text="Bad:" value={props.bad}/></tr>
    <tr><All good={props.good} neutral={props.neutral} bad={props.bad}/></tr>
    <tr><Average good={props.good} neutral={props.neutral} bad={props.bad}/></tr>
    <tr><Positive good={props.good} neutral={props.neutral} bad={props.bad}/></tr>
    </tbody>
    </table>
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