import React from 'react'
import { connect } from 'react-redux'
import { editFactory, renameFactory } from '../db/firebaseActions'

function FactoryEdit({activeNodeName, allNodes, onNodeEdit}){
	let activeNode = allNodes.filter((node) => node.name === activeNodeName)[0]

	return (
		<div className="Edit">	
			<input type='button' value='New Factory' onClick={(e) => {
				onNodeEdit('')
			}} /><br />
			{activeNodeName ? 'Active Node: ' + activeNodeName : ''}<br />
			<input type="text" onKeyDown={(e) => { 
				if(e.keyCode === 13 || e.keyCode === 9){
					let newNodeName = e.target.value
					let inputValid = true
					if(inputValid){						
						if(activeNodeName){
							renameFactory(activeNodeName, newNodeName)
						}
						onNodeEdit(e.target.value) 
					}
				}				
			}} /><br />
			Children: <input type="number" min='0' max='15' value={activeNode ? activeNode.numChildren : ''} 
				onChange={(e) => { 
					if(e.target.value > 15){
						alert("Can only generate up to 15 children!")
					} else {
						editFactory(activeNodeName, { numberOfChildren: e.target.value })
					}
				}} /><br />
			Min: <input type="number" placeholder='0' value={activeNode ? activeNode.min : ''} 
				onChange={(e) => { 
						editFactory(activeNodeName, { min: e.target.value })
					}} /><br />
			Max: <input type="number" placeholder='100' value={activeNode ? activeNode.max : ''} 
				  onChange={(e) => { 
					editFactory(activeNodeName, { max: e.target.value })
				  }} /><br />
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