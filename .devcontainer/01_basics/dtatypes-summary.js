/* Javascript is a dynamicaly typed language it means variabe can hold values of different types during runtime 

and in typescript we have to firestly mentioned the datatypes of tht values.

Primitive Dtataypes: String, Number, Boolean, Undefined, Null, Symbol, Bigint
Which returns the number

Non-Primitive datatypes: Object, Array, Function
Which return the reference only.
*/

const score=100;      //type: Number
const score1=100.3    // type: Number
const mobile ="Iphone"  //type: String
const ready =true;      // type: Boolean
let temp;               // type: Undefined
const men =null;        // type: Object
 const abc= Symbol('123');
const abcd= Symbol('123');
const value=682792807694784774n;  // type: Object

// console.log(typeof score);
// console.log(typeof score1);
// console.log(typeof mobile);
// console.log(typeof ready);
// console.log(typeof temp);
// console.log(typeof men);
// console.log(typeof value);

// console.log(abc===abcd)  // answer is false       symbol variable is act as a unique key.

//Array
let ab=['swapnil','swaroop','kiran']

// console.log( typeof ab);  // Type of Array is Object

//Object

let sd={
    age:12,
    name: 'ganu',
    villege:'pune',
    married: false

}
// console.log(typeof sd); // Typeof Object is Object

// Function
let sp= function(){
    console.log("Hello World");
}

// console.log(typeof sp);  // Type of function is Function Object

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// Types of memory
// Stack Memory  Heap Memory

/* Stack memory gives the copy of the code And Heap memory Gives the reference 
//the changes that are perform  as a child code it directly change the main value i.e parent value.*/

let num=18;
let num1=num;
// console.log("The value of Num is "+num)
num1=19;
// console.log(num)
// console.log(num1)

let ap={
    height:18,
    weight:40,
    city:"Pune"
}
let px=ap;
px.city="Mumbai";
console.log(ap.city)
console.log(px.city)