import React from 'react'

function Node({ node }){
	return (<li key={node.name}>{node.name}: {node.data}</li>)
}

export default Node