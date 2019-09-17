// Maps

const myMap = new Map();

let keyString = "keyString",
	keyObj = {},
	keyFunction = function(){};

myMap.set(keyString,"Key String Value");
myMap.set(keyObj,"Key Object");
myMap.set(keyFunction, "KeyFunction value");

console.log(myMap.size); //3 

console.log(myMap.get(keyString)); // Key String Value

console.log(myMap.get(keyObj)); // Key Object
console.log(myMap.get(keyFunction)); // KeyFunction value

myMap.set(NaN, "Not a Number");
console.log(typeof NaN); //number
console.log(myMap.get(NaN)); // Not a Number



for (let [key,value] of myMap){
	console.log(`Map Key : ${key} , Map Value : ${value}`);
}
/* Map Key : keyString , Map Value : Key String Value
Map Key : [object Object] , Map Value : Key Object
Map Key : function(){} , Map Value : KeyFunction value
Map Key : NaN , Map Value : Not a Number */




const newMap = new Map([
		[1,`one`],
		[2,`two`]
	]);

newMap.forEach(function(value,key){
	console.log(`Map Key : ${key} , Map Value : ${value}`)
});
/*
Map Key : 1 , Map Value : one
Map Key : 2 , Map Value : two*/