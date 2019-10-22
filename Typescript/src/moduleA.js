console.log("module A loaded");
import {fname as f, lname as l,obj} from './moduleB.js'//import statement is hostiated at top called first
console.log("moduleA 3 loaded");
// f="ross"; import are read only we cnnot overwite
obj.name="negi";//but we cna change the properyty of object
console.log(` ${f} ${l} ${obj.name}`);
// import {default as x} from '/moduleB.js';//only for single import we doenot have to specify name of variable


/* exporting function and classes */
import {greet ,GreetMessage} from './moduleB.js'

greet("Hello is function import");

let gm=new GreetMessage();
gm.greet();

/* sets and  maps */ 

