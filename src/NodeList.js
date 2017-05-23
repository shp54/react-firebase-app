import React from 'react'

function NodeList({ nodes }){
	return (
		<ul>
		{nodes.map((node) => {
			return (<li key={node.key}>{node.value}</li>)
		})}
		</ul>
	)
}

export default NodeList

