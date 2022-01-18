# Web Applications

**Component**

React is JavaScript library for building user interfaces.

React components implement a render() method that takes input data and returns what to display.

In addition to taking input data (accessed by props), a component can maintain internal state data (accessed by state).

When a component’s state data changes, the rendered markup will be updated by re-invoking render().

Using props and state, we can implement an application.

The props (short for "properties") and state are both JavaScript objects.

The props are passed to the component (like parametersin a function) whereas state is managed within the component.

Pass event handlers and other functions as props to child components.

Call the function as a reference when you pass it to the component.

You can use an arrow function to wrap around an event handler and pass parameters.

The useState declares a "state variable" that lets you add React state to function components.

Always use Hooks at the top level of your React function.

**Client**

We can create an application using npx command, where <APP_NAME> is a name of an application.

The npx command will create a directory called <APP_NAME> inside the current folder.

```

$ npx create-react-app <APP_NAME>

```

Use npm command to build the app for production.

```

$ npm run build

```
**Proxy**

We can configure proxy to send the API requests from the frontend to the API on the backend.

Add the below line to its package.json file to define the proxy by backend address.

```

"proxy": "http://localhost:3001"

```

**index.js**

The index.js file renders its contents into the div-element, which is defined in the file public/index.html containing the id value of 'root'.

```

import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

```

**App.js**

The file App.js defines a React component with the name App.

```

import React from 'react'
const App = () => (
  <div>
    <p>Hello world</p>
  </div>
)

export default App

```

**package.json**

The npm install command downloads and installs the library dependencies configured in the package.json file. 

```
{
  "name": "app",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
  },
  "proxy": "http://localhost:3001"
}
```

The caret symbol ^ in the dependencies of "react" library means that when the dependencies of a project is installed, then the version of "react" will be at least 17.0.2., but the installed version of "react" can be one that has a larger patch number (the last number).

**Server**

Create index.js file for the backend server and run the web server using node command.

```

$ node index.js

```

We can run the app using npm start command.

```

$ npm start

```

By default, the application runs in localhost with http://localhost:3000 address.

Node.js runs JavaScript code in the Event Loop.

**index.js**

The purpose of the backend server is to offer data in the JSON format to the frontend. 

Create index.js file containing the following contents.

```

const express = require('express')
const app = express()

let notes = [
  {
    id: 1,
    content: "Zero to One",
    date: "2022-01-18T12:30:31.098Z",
    important: true
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Notes</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

```

![alt text](https://github.com/jylhakos/Part1/blob/main/Part1.png?raw=true)
