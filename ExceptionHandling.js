const arr = [1,2,3,4];

try {
	variable;
	console.log(`try block`);	
}
catch(e){
	console.log(e.name);
	console.log(e.message);
	console.log(e.stack);
}
finally {
	console.log(`finally executed`);
}