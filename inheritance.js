// parent class

class Person{
	constructor(fname,lname) {
		this.fname = fname;
		this.lname = lname;
	}
}


class Age extends Person{
	constructor(fname,lname,age){
		super(fname,lname,age);
		this.age = age;
	}

	showUp(){
		console.log(this.fname + ' ' + this.lname); 
		console.log(`your age is ${this.age}`);
	}
}

let obj = new Age('Devarsh','Patel',18);
obj.showUp(); // Devarsh Patel
              // your age is 18

console.log(obj.fname); //Devarsh
