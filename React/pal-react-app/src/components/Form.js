import React, { Component } from 'react'

class Form extends Component{

	constructor(props){
		super(props)
		this.state={
			username:'sanjeet',
			comment:'comment',
			topic:'angular'
		}
	}
	handleUsernameChange=(event) => {
		this.setState({
			username:event.target.value
		})
	}
	handleCommentChange=(event) =>{
		this.setState({
			comment:event.target.value
		})
	}
	handleTopicsChange=(event) =>{
		this.setState({
			topic:event.target.value
		})
	}
	// handleSubmit = (event) = {
		
	// 	// alert (`${this.state.username} `)
	// 		// event.preventDefault()
	// }
	render(){
		return(
			<form>
				<div>
					<label> Username</label>
					<input type='text'value={this.state.username} onChange={this.handleUsernameChange}/>
				</div>
				<div>
					<label>Comment</label>
					<textarea value={this.state.comment} onChange={this.handleCommentChange}></textarea>

				</div>
				<div>
					<label>Topics</label>
					<select value={this.state.topic} onChange={this.handleTopicsChange}>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option vlaue="vue">Vue</option>

					</select>


				</div>
				<button type="submit">Submit</button>
			</form>





			)
	}
}
export default Form