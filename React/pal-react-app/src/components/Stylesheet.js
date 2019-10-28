import React from 'react'
import './myStyle.css'
function Stylesheet(props){
	const heading={
		color:'red',
		fontSize:'56px',
	}
	let className=props.primary ? 'primary':''
	return(
		<div>
			<h1 className={`${className} font-xl`}>Stylesheets</h1>
			<div style={heading}>Heading</div>

		</div>

		)
}
export default Stylesheet