class Employee {
	constructor(name){
		this.name = name;
		this.age = 24;
	}
	EmployeeName(){
		console.log(`Employee Name : ${this.name}`);
	}
}


class Member extends Employee {
	constructor(name,salary){
		super(name);
		this.name = name;
		this.salary = salary;
		this.age = 26;
	}

	EmployeeName(){
		console.log(`Name : ${this.name}, Age : ${this.age}, Salary : ${this.salary}`);
	}
}

let obj = new Member("Neel Patel",35000);
obj.EmployeeName(); // Name : Neel Patel, Age : 26, Salary : 35000




/******************************************/
// String Representation
const dt = new Date();

console.log(dt); // 2019-09-10T15:33:13.959Z
console.log(dt.toString()); // Tue Sep 10 2019 21:03:13 GMT+0530 (India Standard Time)

console.log(typeof dt); // object
console.log(typeof dt.toString()); // string

