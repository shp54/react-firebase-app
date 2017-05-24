import React, { Component } from 'react'
import FactoryList from './FactoryList'
import FactoryEdit from './FactoryEdit'
import '../App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
		<FactoryList />
		<FactoryEdit />
      </div>
    )
  }
}

export default App
