import app from './db/db'

function editNode(node, data){
	app.database().ref('nodes/' + node).set(data) 
}

export {
	editNode
}