import React, { Component } from 'react'

class ClassClick extends Component{
	clckHandler(){
		console.log("button is clicked")
	}
	render(){
		return(
			<div>
				<button onClick={this.clckHandler}>Click</button>
			</div>
			)
	}
}
export default ClassClick