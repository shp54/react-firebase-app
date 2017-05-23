import React from 'react'

function Node({ node, onNodeClick }){
	return (
		<li onClick={(e) => { 
			e.preventDefault()
			onNodeClick(node)
		}}>{node.name}: {node.data}</li>
	)
}

export default Node