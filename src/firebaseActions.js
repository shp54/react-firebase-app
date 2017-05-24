import app from './db/db'

function editFactory(node, data){
	app.database().ref(`nodes/${node}`).set(data) 
}

function addChildNodes(nodeName, list){
	let nodeRef = app.database().ref(`nodes/${nodeName}/children`)
	nodeRef.remove() 
	for(let i in list){
		nodeRef.push(list[i])
	}
}

export {
	editFactory,
	addChildNodes
}