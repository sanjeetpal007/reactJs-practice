import React from 'react'

const Hello =() =>{
	// return (
	// 		<div>
	// 			<h1>Hello world</h1>
	// 		</div>
	// 	)
	return React.createElement('div',
		{id:'hello',className:'raw'},
		React.createElement('h1',null,'Hello Create Element'))
}

export default Hello