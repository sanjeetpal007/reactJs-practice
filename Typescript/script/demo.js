console.log('hello world');
console.log('this is good');
function greetPerson(name){
	let greet;
	if(name=="Chandler"){
		 greet="hello Chandler";


	}else{
		 greet ="HI there";
	}
	console.log(greet);
}
greetPerson("Chandler");

var a=1;
var b=2;
if(a==1){
	var a=10;
	///var is functional scope
	//re-declare is possible
	let b=20;
	//let is block scope
	//re-declare is not-possible
	console.log(a);
	console.log(b);
}
console.log(a);
console.log(b);

/* for loop */

for(var i=1;i<=5;i++){
	setTimeout(function(){console.log(i);},1000);
}
for(let i=1;i<=5;i++){
	setTimeout(function(){console.log(i);},1000);
}
/*const keyword */
let num1;
const num2=2;

 const obj1={
	name:"sanjeet"
};
console.log(obj1.name);
//cannot alter the object but we can alter the property of object

obj1.name="pal";
console.log(obj1.name);

const PI=3.14;
const MAX_SIZE=100;
var getRegValue = function(){
	return 10;
};
console.log(getRegValue());
const getArrowvalue=() => {
	return 103;
}
const getArrowvalues = (m,bonus) => 10*m+bonus;
const getArrowvaluess = m => 10*m;

console.log(getArrowvaluess(5));
console.log(getArrowvalues(5,100));
console.log(typeof getArrowvalues);
/* lexical this*/
var employee={
	id:1237,
	greet:function(){
		var self=this;
		setTimeout(function(){console.log(self.id);},1000);
	}
}
var employees={
	id:1257,
	greet:function(){
		setTimeout(()=>console.log(this.id),1000);
	}
}
employees.greet();
let percentBonus = () => 400;
let getValue=function(value=10,bonus=5*percentBonus()){
	console.log(value+bonus);
	console.log(arguments.length);
}
getValue();
getValue(20);
getValue(undefined,10);
getValue(60,100);
/* rest operator */

let displayColor=function(){
	for(let i in arguments){
		console.log(arguments[i]);
	}
}
let displayColors=function(message,...colors){
	console.log(message);
	// console.log(colors);
	console.log(arguments.length);
	for(let i in colors){
		console.log(colors[i]);
	}
}

let message="list of color";
let colorArray=['orange','yellow','indigo'];
displayColors(message,...colorArray);
// displayColors(message,'red');
// displayColors(message,'red','blue');
// displayColors(message,'red','blue','green');
/* spread operator ES2015*/

/* object Literals */

let firstname="sanjeet";
let lastname="pal";
let person={
	// firstname : firstname,
	// lastname : lastname
	firstname,
	lastname
};
// console.log(person.firstname);
// console.log(person.lastname);
function createPerson(firstname,lastname,age){
	let fullname=firstname+" "+lastname;
	return {firstname,
		lastname,
		fullname,
		isSenior(){return age>60;}
	// 	isSenior:function(){
	// 	return age>60;
	// }
	}
}
let p=createPerson("sanjeet","pal",61);
console.log(p.firstname+" first "+p.lastname,p.fullname+" "+p.isSenior());
/*object literal part-2 */
 
let ln="last name";
 let person2={
 	"first name":"sanjeet",
 	[ln]:"pal"

 };
 console.log(person2["first name"]+person2[ln]);
 console.log(person2);

 /* distructure array */
 let employee2=["sagar","pal","Male"];
 let [fname,...elements]=employee2;
 // let [,,gender]=employee2;
 // console.log(gender);
 console.log(fname,elements)

 /* destructive objects */

 let employee3={
 	fname3:"sanjeet",
 	lname3:"pal",
 	gender3:"Male"
 };
let {fname3,lname3,gender3}=employee3;
 console.log(fname3);
 console.log(lname3);
 console.log(gender3);

let {fname3:f,lname3:l,gender3:g}=employee3;
 console.log(f);
 console.log(l);
 console.log(g);
/* String Templates */

let user="amardeep";
let greet =`Welcome 'single ' "souble " ${user} to school /n
	 Going to second line
`;
console.log(greet);

/*  for loop */

let colors=['red','blue','green'];
for (let index in colors){
	console.log(colors[index]);
}
for (let color of colors){
	console.log(color);
}

let letters ="ABC";
for(let latter of letters){
	console.log(latter);
}
/* classes */
//classes are not hoisted not callable before declare
// let p5=new Person4();
class Person4{
	greet(){}
}
//method are hoisted can be called before declared
let p3=new Person4();
employee4();
function employee4(){}
employee4();
console.log(typeof Person4);
//adding method to class is sameas adding protoype to class
console.log(p3.greet===Person4.prototype.greet);

/* class body and defination */
class Person5{
	constructor(name){
		this.name=name;
		console.log(this.name+"constructor");
	}
	static staticMethod(){
		console.log("static method");
	}
	greetPerson(){
		console.log("hello "+this.name);
	}
}
let p5=new Person5("sanjeet");
Person5.staticMethod();
p5.greetPerson();

/* class inheritance */
class Person6{
	constructor(name){
		console.log(name+"person constructor");
	}
	getId(){
		return 10;
	}
}
class Employee6 extends Person6{
	constructor(name){
		//parents clas constructor need to call subclass constructors

		super(name);
		// super();
		console.log(name+"employees constructor");
	}
	getId(){
		return super.getId();
	}
}
let e6=new Employee6("pal");
console.log(e6.getId()); 
/*  Introduction to modules(sepration concern ) */
