import React, { Component } from 'react'
import NodeList from './NodeList'
import NodeEdit from './NodeEdit'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
		<NodeList />
		<NodeEdit />
      </div>
    )
  }
}

export default App
