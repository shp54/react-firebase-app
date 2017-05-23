import React from 'react'
import { addChildNodes } from './firebaseActions'
import NodeList from './NodeList'

function generateChildNodes(node){
	console.log("Generate child nodes!")
	if(parseInt(node.data, 10)){ //Generate list of child nodes and push them to Firebase
		let results = []
		let min = 0
		let max = 12
		for(let i = 0; i < node.data; i++){
			let node = Math.floor(Math.random() * (max - min)) + min
			results.push(node)
		}
		console.log(results)
		addChildNodes(node.name, results)
	}
}

function Factory({ node, active, onNodeClick }){
	return (
		<li onClick={(e) => { 
			e.preventDefault()
			onNodeClick(node)
		}}>
			{node.name}: {node.data}
			<input type='button' value='Generate' onClick={(e) => {
				e.preventDefault()
				generateChildNodes(node)
			}} />	
			
			{(active) ? <NodeList nodes={node.children} /> : ''}
		</li>
	)
}

export default Factory