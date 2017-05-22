import React, { Component } from 'react'
import { connect } from 'react-redux'
import NodeList from './NodeList'
import NodeEdit from './NodeEdit'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
		<NodeList nodes={this.props.nodes} />
		<NodeEdit />
      </div>
    )
  }
}

const mapStateToProps = (state) => { 
	return { nodes: state } 
}

const ReduxApp = connect(mapStateToProps)(App)

export default ReduxApp
