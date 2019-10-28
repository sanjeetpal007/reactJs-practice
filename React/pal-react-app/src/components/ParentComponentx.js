import React, {Component} from 'react'
import ChildComponentx from './ChildComponentx'
// statefull class Component
class ParentComponentx extends Component{
	constructor(props){
		super(props)
		this.state={
			parentName:"parent"
		}
		this.getParentName=this.getParentName.bind(this)
		
	}
	getParentName(childName){
		// alert `Hello ${this.state.parentName} from ${childName}`
		alert (this.state.parentName)
		alert (childName + " " + (this.state.parentName) )
	}

	render(){
		
		return (
			<div>
			<h1>Class Component </h1>
		
			<ChildComponentx getHandler={this.getParentName} />
			</div>
		)
	}
}
export default ParentComponentx