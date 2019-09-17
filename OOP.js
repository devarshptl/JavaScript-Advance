// Object oriented programming

/************************************/
const obj ={};
const y = obj; //  creating reference
y.d = "property created using reference";
console.log(obj.d); //property created using reference




/********* class ****************/
class Model{
	constructor(arg1,arg2){
		this.arg1 = arg1;
		this.arg2 = arg2;
	}
	show(){
		console.log(this.arg1,this.arg2);
	}
}

const instance = new Model("devarsh", 59);
console.log(instance instanceof Model); // true

instance.show(); // devarsh 59


