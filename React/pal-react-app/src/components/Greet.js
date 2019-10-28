import React from 'react'


// javascript function
// function Greet(){
// 	return <h1>Hello sanjeet</h1>;
// }

const Greet = props => {
	console.log(props);
	return (
		<div>
			<h1>hello {props.name} {props.heroname}</h1>
			{props.children}
		</div>
		)
} 
export default Greet






































