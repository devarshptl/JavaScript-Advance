// let reg = new new RegExp("pattern", "flags");

/* 
 let reg = /pattern/;
 let reg = /pattern/flag;

*/

let str = "Welcome to Daily Tution.";

let reg = new RegExp("daily","i");

/*

let reg = /daily/;
*/

console.log(str.search(reg)); // 11




/***********************************************/

/* flags: 

i  = case sentitive
g = global
m = multiline search
u = unique search 
p = stick search


*/
