import { createStore, combineReducers } from 'redux'

function nodeTree(state = [], action){
	switch(action.type){
		case 'ADD_NODES':
			return action.data //Just replace the whole state when something gets updated, because React will take care of efficiently updating the DOM
		default:
			return state
	}
}

function activeNode(state = '', action){
	switch(action.type){
		case 'SET_ACTIVE_NODE':
			return action.data
		default:
			return state
	}
}

let store = createStore(combineReducers({nodes: nodeTree, active: activeNode}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
