/*// ** 1 **Anchor Tag : It act as an anchor tag in html format
// This method of string value create a string that embedes this string in an <a> element 
//with a name <a name="...">String</a>

let abc="Swapnil";
let bc=abc.anchor("Hello")
console.log(bc);
// Output is <a name="Hello">Swapnil</a>

let cd= new String("to Mumbai");
let ck=cd.anchor("Welcome");
console.log(ck);  // Output <a name="Welcome">to Mumbai</a>
console.log(typeof ck);  // Output => String
*/
//******************************************************************************************************* */
//** 2 ** chatAt Method

/*// the charAt() method returns the value of string present in actual index number i.e return ths character.
//We can not assign the negative value in it, code gets run but not showing any output
//EX.
let sd="shanak";
// let sp="king"
let sk= sd.charAt(1)
console.log(sk) // output is =>s 

let pk="synechron"
let so=pk.charAt (-2)
console.log(so)  //Output not showing
*/

/*********************************************************************************************************/

/*  3  // at() method
// the at() method returns the indexed elemet of an string
// We can assign the positive nd negative value in it (Only to its length )

let sp="dhanak"
let pt=2;
console.log(`the value of an element having its index ${pt} is ${sp.at (pt)}`)  //output => a

let pk="india"
let pn=-3
console.log(`the value of an element having its index ${pn} is ${pk.at (pn)}`) // output =>d

Note: but we can not assign the value more than the string length,
 if we assign the negative and positive value more than the string length then output is undefined.
 */

 //************************************************************************************************* */

 // 4 charCodeAt() method 
 // this method is used to find the ascii value of an element present at the index value of string.
 