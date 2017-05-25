import React from 'react'
import { connect } from 'react-redux'
import { editFactory } from '../firebaseActions'

function FactoryEdit({activeNodeName, allNodes, onNodeEdit}){
	let activeNode = allNodes.filter((node) => node.name === activeNodeName)[0]

	return (
		<div>
			<input type="text" value={activeNodeName} onChange={(e) => { onNodeEdit(e.target.value) }} />
			<input type="text" value={activeNode ? activeNode.numChildren : ''} onChange={(e) => { editFactory(activeNodeName, { numberOfChildren: e.target.value })} } /><br />
			Min: <input type="text" placeholder='0' value={activeNode ? activeNode.min : ''} onChange={(e) => { editFactory(activeNodeName, { min: e.target.value })} } /><br />
			Max: <input type="text" placeholder='100' value={activeNode ? activeNode.max : ''} onChange={(e) => { editFactory(activeNodeName, { max: e.target.value })} } /><br />
		</div>
	)
}

const mapStateToProps = (state) => {
	return { activeNodeName: state.active, 	
	         allNodes: state.nodes }
}

const mapDispatchToProps = (dispatch) => {
	return {
		onNodeEdit: (data) => {
			dispatch({type: 'SET_ACTIVE_NODE', data})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FactoryEdit)