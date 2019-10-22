 // export let fname="Chandler33";
 // export let lname="pal";

let fname="Chandler353";
let lname="Chandler33";
let obj={
	name:"joey"
}
console.log("module B loaded");
export{fname,lname,obj}

let xname="samir";
export default xname;



/* exporting function and classes */

export function greet(message){
	console.log(message);
};
export class GreetMessage{
	constructor(){
		console.log("constructor");
	}
	greet(){
		console.log("greet function");
	}
}

/* sets and  maps */ 

// set is list of without duplicate
//maps is collection of key value pairs
let mySet=Object.create(null);
mySet.id=1;
if(mySet.id){
	console.log("id exists");
}

let myMap=Object.create(null);
myMap.name="Saurab";
let val=myMap.name;
console.log(val);
myMap[100]="Hello";
console.log(myMap["100"]);

//number 100 and string refe to same object
let ob1={};
let ob2={};
myMap[ob1]="World";
console.log(myMap[ob2]);//weather we use ob1 or ob2 we still have world
console.log(ob1.toString());
console.log(ob2.toString());


let mySet2=new Set();
let ob11={};
let ob21={};
mySet2.add("hello");
mySet2.add(1);
mySet2.add(ob11);
mySet2.add(ob21);
console.log(mySet2.size);
let mySet3=new Set([1,2,3,4,5,5,5,5,5,5]);
console.log(mySet3.size);

let chainSet=new Set().add("hello").add("world");
console.log(chainSet.size);
console.log(mySet2.has(1));
console.log(mySet2.delete(3));
console.log(mySet2.size);

/* weaksets */
//weaksets help in garbage collection
//weakset and only store objects refereance not primitive object refence is weak
let mySet4=new Set();
let key={};
mySet4.add(key);
console.log(mySet4.size);//1
key=null;//referencing to null doesn;t delete mySet4 properties 
console.log(mySet4.size);//1 

key =[...mySet4][0];
//Creating a weakset

let set=new WeakSet();
let key_weakset={}
set.add(key_weakset);
console.log(set.has(key_weakset));
console.log(set.size);
key_weakset=null;
/* maps */
let myMap3=new Map();
myMap3.set("fname","chandler");
myMap3.set("age",301);
console.log(myMap3.get("age"));
let obmap={};
let obmap2={};
myMap3.set(obmap,10);
myMap3.set(obmap2,20);
console.log(myMap3.get(obmap2));
myMap3.delete("fname");
myMap3.clear();//remove all the properties
console.log(myMap3.size);
console.log(myMap3.has("fname"));

/* Iteration over Maps */

let myMap_iter=new Map([
	["fname","sanjeet"],
	["lname","pal"]

	]);
// for(let [key,value] of myMap_iter.entries()){
// 	console.log(key+value)
// }
for(let entry of myMap_iter.entries()){
	console.log(`${entry[0]}->${entry[1]}`);
}
for (let value of myMap_iter.values()){
	console.log(value);
}
for(let key of myMap_iter.keys()){
	console.log(key);
}
/* for Each */
// var numbers=[2,4,6,8,10,12,14];
// numbers.forEach(arrayFunction);
// function arrayFunction(element,index,array){
// 	console.log("arr["+index+"]="+element);
// }
//for each map using Maps
// let myMap_foreach=new Map([["fname","sanjeet"],["lname","pal"]]);
// myMap_foreach.forEach(mapFunction);
// function mapFunction(value,key,callingMap){
// 	console.log(key+" "+value);//fname sanjeet //lname pal
// 	console.log(myMap_foreach===callingMap);//true
// }
//foreach map using sets
// let mySet_iter=new Set([1,2,3]);
// mySet_iter.forEach(setFunction);
// function setFunction(value,key,callingSet){
// 	console.log(key+" "+value);//1 1 2 2 3 3 
// 	console.log(mySet_iter === callingSet);//true
// }

/* weakmaps */
//keys acn only be object and object references must be weak
let myMap_weakmap=new WeakMap();
let obj_weak={};
myMap_weakmap.set(obj_weak,"hello world");
console.log(myMap_weakmap.get(obj_weak));
obj_weak=null;


/* symbols */
//purpose of symbols is to generate unique id
//
let s = Symbol("first Sysmbol");
console.log(typeof s);
console.log(s.toString());

let s2=Symbol("Test");
let s3=Symbol("Test");
console.log(s2==s3);//false

let s4=Symbol.for('RegSymbol');
//symbol.for first check if symbol is already register in register before creting symbols
let s5=Symbol.for('RegSymbol');
console.log(s4===s5);//true

console.log(Symbol.keyFor(s4));//RegSymbol to get description 


let fname_symbol=Symbol("First naem");
let persob={
	[fname_symbol]:"goosefile"
};
console.log(Object.getOwnPropertyNames(persob));
console.log(Object.getOwnPropertySymbols(persob));


/* Symbol iterator */


// for...of -->iterator methosd--> symbol.iterator
let str_symbol="hello";
let arr_symbol=[1,2,3];
let num_symbol=5;
let obj_symbol={name:"Chandler"};
console.log("for string "+typeof str_symbol[Symbol.iterator]);
console.log("for array "+typeof arr_symbol[Symbol.iterator]);
console.log("for number "+typeof num_symbol[Symbol.iterator]);
console.log("for object "+typeof obj_symbol[Symbol.iterator]);


/*38 iterables ans iterators */ 
//Iterable is any object who implement a key symbol.iterator
//Iterator is object that is going to implements next method that is going to access next value
/*Iterable{
	[symbol.Iterator]():Iterator
}
Iterator{
	next():IResultObj
}
IResultObj{
	value:any datatype
	done:boolen if iteration is complete
}
*/

let iterable=[1,2,3,4,5,6,7,8,9];
function createIterator(array){
	let count=0;
	return {
		next:function(){
			return count < array.length?
			{value:array[count++],done:false}:
			{value:undefine,done:true};
		}
	}
}
let myIterator = createIterator(iterable);
console.log(myIterator.next());//value 1 false
console.log(myIterator.next());//value 2 false
console.log(myIterator.next());//value 3 false


/* Iterating Objects */
//object is not iteratble
let person_iter={
	fname:"sanjeesfdgt",
	lname:"pal"
};

person_iter[Symbol.iterator]=function(){
	let properties=Object.keys(person_iter);
	let count=0;
	let isDone=false;
	let next=()=>{
		if(count>=properties.length){
			isDone=true;
		}
		return {done:isDone,value:this[properties[count++]]};
	}
	return {next};
}

for (let p of person_iter){
	console.log(p);//symbol is not function
}

/* Generator */

//generator which can be pause and run another function and the n resume the pause function

function *createGenerator(){
	yield 1;
	console.log("After 1st yield");
	yield 2;
}
let myGen=createGenerator();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());

let person_iter_gen={
	fname:"sanjeesfddasfasdgt",
	lname:"pal"
};
person_iter_gen[Symbol.iterator]=function*(){
	let properties=Object.keys(person_iter_gen);
for(let t of properties){
	yield this[t];
}
};
for (let p of person_iter_gen){
	console.log(p);
};

/* 41 enter typescript  only work with type script*/
//typescript is superset of javascritp that compile to plain javascript

var x=10;

// var info:any;
// info =10;
// info="hello";
// info=true;
// var information;

// enum Eyecolor {brown=1,black,blue};
// var myEyeColor=Eyecolor.brown;
// console.log(myEyeColor);

// let strarr1:string[]=["hello","world"];
// let strarr2:Array<string> =['hello','world'];
// let anyArr: any[]=["hello",10,true];
// let myTuple:[string,number]=["hi",20];
// console.log(myTuple[0]);

// class Person_typescript{
// 	public fname:string;
// 	public lname:string;
// 	constructor(fname:string,lname:string){
// 		this.fname=fname;
// 		this.lname=lname;
// 	}
// };
// class person2{
// 	constructor(public fname:string,public lname:string){

// 	}
// };

// interface Person{
// 	fname:string;
// 	lname:string;
// 	age:number;
// }
// let employee1:Person={
// 	fname:"sanjeet palk";
// 	lname:"pal",
// 	age:20

// }

// @component({
// 	selector:'my-app',
// 	template:'<h1>This is a replacement of my-app</h1>'
// })
// export class AppComponent{

// }

//learn more promises,reflection,proxy.typedefination