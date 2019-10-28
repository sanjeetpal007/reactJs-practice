import React , { Component } from 'react'
//condition operator 
//if/else
//Elements Variable
//Ternary conditional operator

// short circuit operator
 class Usergreeting extends Component{

 	constructor(props){
 		super(props)
 		this.state={
 			isLoggedIn:true
 		}
 	}
 	render(){
 		if(this.state.isLoggedIn){
 			return(
 				<div>hello</div>
 				)
 		}else{
 			return(
 			<div>Never get it</div>
 			)
 		}




 		// let message
 		// if(this.state.isLoggedIn){	
 		// 	message=<div>Welcome sanjeet</div>			
 		// }else{
 		// 	message=<div>welcome Guest</div>
 		// }
 		// return(
 		// 	<div>{message}</div>
 		// 	)

 		// return(
 		// 	this.state.isLoggedIn ? <div> welcome sanjeet <div> : <div>welcome guest</div> )
 	}
 }
 export default Usergreeting