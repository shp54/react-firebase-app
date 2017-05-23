import app from './db/db'

function editFactory(node, data){
	app.database().ref('nodes/' + node).set(data) 
}

function addChildNodes(nodeName, list){
	let nodeRef = app.database().ref('children/' + nodeName)
	nodeRef.remove() 
	for(let x in list){
		nodeRef.push({value: x})
	}
}

export {
	editFactory,
	addChildNodes
}