//list rendering//key and anti-pattern
import React from 'react'

function NameList(){
	const names=['sanjeet','bruce','pal','sagar']

	const persons=[
	{
		id:1,
		name:'sanjeet',
		age:20,
		skill:'programming'

	},
	{
		id:2,
		name:'amardeep',
		age:12,
		skill:'nothing'
	},
	{
		id:3,
		name:'saurab',
		age:30,
		skill:'expert spy'
	}


	]

	const personList=persons.map(person => (<h2>I am {person.name}  {person.age} {person.skill}</h2>))
	const personList_name=names.map((name,index) => (<h2 key={name}>{index}{name}</h2>))
	return(	
			<div>This is NameList
			<h1>{names[0]}</h1>
			<h2>{names[3]}</h2>
			<div>{names.map(name => <h2>{name}</h2>)}</div>
				
				<div>{personList}</div>
				<div>{personList_name}</div>

			</div>

		)

}
export default NameList