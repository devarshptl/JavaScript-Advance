let weakMap = new WeakMap();

let obj = {},obj1 = {};

weakMap.set(obj,"private");
weakMap.set(obj1,"private Data");


console.log(weakMap.get(obj1)); // private Data

for(let [key,value] of weakMap){
	console.log(key);
	console.log(value);
}// send error : weakmap not iterable