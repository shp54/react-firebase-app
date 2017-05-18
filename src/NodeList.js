import React, { Component } from 'react'
import Node from './Node'

class NodeList extends Component {
	render(){
		return (
			<ul>
			{this.props.nodes.map((node) => 
				(<Node node={node} />)
			)}
			</ul>
		)
	}
}

export default NodeList