import app from './db'

function editFactory(node, data){
	if(node){
		app.database().ref(`nodes/${node}`).update(data) 
	} else {
		console.log("No node currently selected!")
	}
}

function addChildNodes(nodeName, list){
	let nodeRef = app.database().ref(`nodes/${nodeName}/children`)
	nodeRef.remove() 
	for(let i in list){
		nodeRef.push(list[i])
	}
}

function renameFactory(oldName, newName){
	let oldRef = app.database().ref(`nodes/${oldName}/`)
	let newRef = app.database().ref(`nodes/${newName}/`)
	
	oldRef.once('value', (snapshot) => {
		newRef.set(snapshot.val(), (error) => {
			if(!error){
				oldRef.remove()
			} else {
				
			}
		})
	})
}

function deleteNode(nodeName){
	let nodeRef = app.database().ref(`nodes/${nodeName}/`)
	nodeRef.remove().catch((error) => { console.log(error) })
}

export {
	editFactory,
	addChildNodes,
	renameFactory,
	deleteNode
}