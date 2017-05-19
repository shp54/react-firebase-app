import React from 'react'

function Node({ node }){
	return (<li>{node.name}: {node.data}</li>)
}

export default Node