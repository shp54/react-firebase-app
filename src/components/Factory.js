import React from 'react'
import { addChildNodes } from '../db/firebaseActions'
import NodeList from './NodeList'
import '../css/Factory.css'
import plusIcon from '../icons/plus.svg'
import minusIcon from '../icons/minus.svg'

function generateChildNodes(node){
	if(parseInt(node.numChildren, 10)){ //Generate list of child nodes and push them to Firebase
		let results = []
		let min = parseInt(node.min, 10) || 0
		let max = parseInt(node.max, 10) || 100
		for(let i = 0; i < node.numChildren; i++){
			let node = Math.floor(Math.random() * (max - min)) + min
			results.push(node)
		}
		addChildNodes(node.name, results)
	}
}

function Factory({ node, isActive, onNodeClick }){
	return (
		<li>
			<span onClick={(e) => { 
				e.preventDefault()
				if(!isActive){
					onNodeClick(node)
				} else {
					onNodeClick('')
				}
			}}>
				<img src={isActive ? minusIcon : plusIcon} className='list-icon' alt={isActive ? 'Expanded' : 'Collapsed' } />
				{node.name}: {node.numChildren} ({node.min || 0} : {node.max || 100})
			</span>
			
			{isActive ?
			<span>
				<input type='button' value='Generate' onClick={(e) => {
							e.preventDefault()
							generateChildNodes(node)
				}} className='generateButton' />
				<NodeList nodes={node.children} />
			</span> : ''}			
		</li>	
	)
}

export default Factory