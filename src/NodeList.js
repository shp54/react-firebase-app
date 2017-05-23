import React from 'react'
import { connect } from 'react-redux'
import Node from './Node'

function NodeList({nodes, setActiveNode}){
	return (
		<ul>
		{nodes.map((node) => 
			(<Node key={node.name} node={node} onNodeClick={(node) => setActiveNode(node.name)} />)
		)}
		</ul>
	)
}

const mapStateToProps = (state) => { 
	return { nodes: state.nodes } 
}

const mapDispatchToProps = (dispatch) => {
	return {
		setActiveNode: (data) => {
			dispatch({type: 'SET_ACTIVE_NODE', data})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NodeList)