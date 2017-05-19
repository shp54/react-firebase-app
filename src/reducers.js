import { createStore } from 'redux'

//Create Redux store
function nodeTree(state = [], action){
	switch(action.type){
		case 'ADD_NODES':
			return action.data //Just replace the whole state when something gets updated, because React will take care of efficiently updating the DOM
		default:
			return state
	}
}

let store = createStore(nodeTree)

export default store
