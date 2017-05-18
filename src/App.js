import React, { Component } from 'react'
import NodeList from './NodeList'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
		<NodeList nodes={this.props.nodes} />
      </div>
    )
  }
}

export default App
