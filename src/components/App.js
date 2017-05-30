import React, { Component } from 'react'
import FactoryList from './FactoryList'
import FactoryEdit from './FactoryEdit'
import '../css/App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
		<FactoryEdit />
		<FactoryList />
      </div>
    )
  }
}

export default App
