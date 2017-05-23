import React from 'react'
import { connect } from 'react-redux'
import { editFactory } from './firebaseActions'

function FactoryEdit({active, onNodeEdit}){
	return (
		<div>
			<input type="text" value={active} onChange={(e) => { onNodeEdit(e.target.value) }} />
			<input type="text" onKeyDown={(e) => {
				if(e.keyCode === 13){
					editFactory(active, e.target.value)
				}
			}} />
		</div>
	)
}

const mapStateToProps = (state) => {
	return { active: state.active }
}

const mapDispatchToProps = (dispatch) => {
	return {
		onNodeEdit: (data) => {
			dispatch({type: 'SET_ACTIVE_NODE', data})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FactoryEdit)