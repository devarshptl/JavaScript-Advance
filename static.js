class Method{
	static show(){
		return "This is static method";
	}
	static onCall(){
		return `${this.show()} called using another static method`;
	}
	constructor(){
		console.log(Method.onCall()); // Method.onCall() -> this.constructor.onCall()
	}
}
console.log(Method.show()); //This is static method
console.log(Method.onCall()); //This is static method called using another static method

const obj = new Method();// This is static method called using another static method
