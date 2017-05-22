import React, { Component } from 'react'
import { editNode } from './firebaseActions'

//Use internal state for this component to avoid polluting global state
class NodeEdit extends Component {
	componentDidMount(){
		this.setState({newProp: ''})
	}
	
	render(){
		return (
			<div>
				<input type="text" onKeyDown={(e) => {
					if(e.keyCode === 13 || e.keyCode === 9){
						this.setState({newProp: e.target.value})
					}
				}} />
				<input type="text" onKeyDown={(e) => {
					if(e.keyCode === 13){
						editNode(this.state.newProp, e.target.value)
					}
				}} />
			</div>
		)
	}
}

export default NodeEdit