/*variables in javascript*/

const name = "SUBHODIP" // for constant value
let address = 'school para' // for changable value
let no = 94254;
console.log(name); // for printing the value
console.table([name, address, no])  // for printing the value in table form 



/*datatypes in javascript*/

let name1 = "subho" // string datatype
let no1 = 56 // number datatype
let result = true // boolean datatype(true/false)
let string = null // null is a standalone datatype , and null is an object...
// Eg: if server is not receiving data of temp then it sends you null not 0 deg, bcz 0 is also a temp
let string1; // undefined datatype 
// symbol datatype = unique 
// object

console.log(typeof name1); // it helps to give the info of which type of datatype is this....

// Datatype types:

//1.primitive datatype
// 7 types : Strings,Numbers,Boolean,Null,undefined,symbol,BigInt >>

let value = Symbol('123')
let valueid = Symbol('123')
console.log(value === valueid); // the values are same but when you use symbol then it being all different in values

//2.Non-primitive datatype
// Arrays,Objects,Functions >>

let arr = ["Subh", "Arnab", "Engineer", 32]; // define a array 

let myobj = {
    name: "Subh",
    age: 22,
    occupation: "enginner"
} // define an object

let myfunc = function () {
    console.log("Hello world");
} // define a function as a variable


//Javascript is Dynamic



/* datatype conversion*/


let number = 33;
let name2 = String(number);
console.log(name2);
console.log(typeof (name2));

//here if the following conversion is happen:
//null = NaN
//undefined= undefined
//string to number= NaN
//boolean= 1/0



/* Comparison */


console.log(2 > 1) // the result gives you in true or false format
// the comparisons are >,<,>=,<=,==,!=
// in == is used for checking the equality of two oparands but in === checks the oparands and also the datatypes of them are equal or not
console.log("2" === 1);





/* Memory used: */

// Stack memory is used in Primitive datatypes
// Heap memory is used in non-primitive datatype
let channelname = "Subhvlogs"
let anothername = channelname; 
anothername = "Deep-think"

console.log(channelname);// the value is still stored in the channelname variable
console.log(anothername);//the new value will overwrite the copy value of the channelname variable

// the heap value gives you the reference of the the data that you stored in the variable


let oneuser = {
    email: "djvbkjdbv.com"
}

let twouser = oneuser
twouser.email = "zjhdcusdg.com";

console.log(oneuser);// here it gives the reference of the oneuser to the twouser value
console.log(twouser);// here we change the value of the twouser so the value of the oneuser will also be changed

// the modern way to add strings is: >>>
let name3 = 'Subh'
let roll = 72

console.log(`hello my name is ${name3} and my roll no is ${roll}`) // here we use the backticks and ${variable name} 

// some methods of strings >>>
// tolowercase , touppercase , substring , indexOf , charAt , slice , trim , replace etc....

const url="subhodip@gmail.com"
console.log(url.replace('@','_')); // replace method of string




/* Number and maths*/

const num=400 // here the js consider default it as a number datatype 
const balance =new Number(500) // here you defined the datatype is a number
console.log(balance);
console.log(balance.toFixed(3)); // for getting in the form of the decimal no


const hundred=100000;
console.log(hundred.toLocaleString()); // it represent the value in like this 1,00,000

// MATH LIBRARY
console.log(Math.abs(-4)); // it gives the absolute value of the given value
console.log(Math.round(4.6)); //it gives the rounded value
console.log(Math.random()) // it gives the random values in between 1 to 0
//to avoid the the case if we want the value under 1 to 10
console.log(Math.random()*10+1); 

// here we want the random value in the range of 10 to 20
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);
const minx="thsi is mhy own ";



/* Dates in JS */

let mydate=new Date();
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());


// the typeof of the date is OBJECT

let mytimestamp=Date.now()
console.log(Math.floor(mytimestamp/1000)); // it gives the hoe=w much time is spent through the first day of year in sec....
console.log(`${mydate.getDay()}/${mydate.getMonth()}/${mydate.getFullYear()}`);




/* ARRAYS */

let myarr=[1,2,3,4,5];
console.log(myarr);


//some methos are >>>

// myarr.push(6); // it helps to add elements in the array
// myarr.pop(4); // it helps to remove an element from array
// myarr.unshift(9) // it helps to add the element in the first of the array 
// myarr.shift() // it helps to remove the first element of the array
// myarr.includes(10) // it helps to find that the element is avialable or not
// myarr.join() // it helps to convert it into string
// myarr.slice(1,3) // it helps to print the to print the values which are in given range like = [1,2]
                    // it does not change the original array
// myarr.splice(1,3) // it hepls to print the to print the values which are in given range like = [1,2,3]
                        // it changes the original array like = [0,4,5]




const marvel_heroes=['Captain America','Iron man'];
const dc_heroes=['Superman','batman'];
//marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); // here the 2nd array is pushed but 2nd array becomes the one element of the array
// const allheroes=marvel_heroes.concat(dc_heroes);
// console.log(allheroes); // here the two array are become merge sucessfully >>>
// new mwthod to do it same as follows ->
// const all_new_heroes=[...marvel_heroes,...dc_heroes];
// console.log(all_new_heroes);





const realone_array=[1,2,3,[5,6],5,8,[5,[8,6]]]  // here you can see that array in array in array is avialable
const anotherone_array =realone_array.flat(Infinity)
console.log(anotherone_array); // here the flat method helps to concetenated in oine array

console.log(Array.from("Subhodip")); // it hepls to convert the string to array




/* OBJECTS */


//create an object
const info1={

    name1:"Subhodip Dey",
    roll : 35, //formula on sale formula on duty  
    number: 9434332017,
    google: "subhodipdey@gmail.com",
    formula: "++subhodip++",
    formula2: "",
}


const info= 

{
    name2:"Subhodip",
    roll2:12000321072,
    "location":"Raniganj",
    email:"Subh@gmial.com",
    isloggedin:true,
}

console.log(info.email); // fetch the data by dot method

console.log(info["location"]) // fetch the string type data from object in square type method

Object.freeze(info); // if we want to freeze the object means noone can change the data of the object

