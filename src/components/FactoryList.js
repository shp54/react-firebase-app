import React from 'react'
import { connect } from 'react-redux'
import Factory from './Factory'

function FactoryList({nodes, activeNode, setActiveNode}){
	return (
		<ul>
		{nodes.map((node) => 
			(<Factory key={node.name} node={node} active={node.name === activeNode} onNodeClick={(node) => setActiveNode(node.name)} />)
		)}
		</ul>
	)
}

const mapStateToProps = (state) => { 
	return { nodes: state.nodes, activeNode: state.active } 
}

const mapDispatchToProps = (dispatch) => {
	return {
		setActiveNode: (data) => {
			dispatch({type: 'SET_ACTIVE_NODE', data})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FactoryList)