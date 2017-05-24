import React from 'react'
import { connect } from 'react-redux'
import { editFactory } from '../firebaseActions'

function FactoryEdit({active, onNodeEdit}){
	return (
		<div>
			<input type="text" value={active} onChange={(e) => { onNodeEdit(e.target.value) }} />
			<input type="text" onChange={(e) => { editFactory(active, { numberOfChildren: e.target.value })} } /><br />
			Min: <input type="text" placeholder='0' onChange={(e) => { editFactory(active, { min: e.target.value })} } /><br />
			Max: <input type="text" placeholder='100' onChange={(e) => { editFactory(active, { max: e.target.value })} } /><br />
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