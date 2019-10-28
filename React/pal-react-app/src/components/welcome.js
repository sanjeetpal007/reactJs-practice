import React, {Component} from 'react'
// statefull class Component
class Welcome extends Component{
	render(){
		const {name,heroname}=this.props
		return (
			<div>
			<h1>Class Component {name} {heroname}</h1>
			</div>
		)
	}
}
export default Welcome