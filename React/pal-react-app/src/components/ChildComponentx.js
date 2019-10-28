import React from 'react'

function ChildComponentx(props){
	return(
		<div>
			<button onClick={() => props.getHandler('child')}>Greet Parent </button>
		</div>
		)
}
export default ChildComponentx