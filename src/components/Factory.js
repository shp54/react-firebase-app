import React from 'react'
import { addChildNodes } from '../firebaseActions'
import NodeList from './NodeList'

function generateChildNodes(node){
	if(parseInt(node.numChildren, 10)){ //Generate list of child nodes and push them to Firebase
		let results = []
		let min = parseInt(node.min, 10) || 0
		let max = parseInt(node.max, 10) || 100
		for(let i = 0; i < node.numChildren; i++){
			let node = Math.floor(Math.random() * (max - min)) + min
			results.push(node)
		}
		console.log(results)
		addChildNodes(node.name, results)
	}
}

function Factory({ node, isActive, onNodeClick }){
	return (
		<li onClick={(e) => { 
			e.preventDefault()
			onNodeClick(node)
		}}>
			{node.name}: {node.numChildren}
			<input type='button' value='Generate' onClick={(e) => {
				e.preventDefault()
				generateChildNodes(node)
			}} />	
			
			{(isActive) ? <NodeList nodes={node.children} /> : ''}
		</li>
	)
}

export default Factory