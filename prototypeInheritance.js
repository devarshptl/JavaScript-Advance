let car = {
	Wheel : 'ford',
	Model : 'tesla',
	show(){
		console.log(`Car Model : ${this.Model} and Car Wheel : ${this.Wheel}`)
	}
}

let bike = {
	cc : 250
}

bike.__proto__ = car;
console.log(bike); // { cc: 250 }

console.log(bike.prototype); // undefined
console.log(bike.__proto__); //{ Wheel: 'ford', Model: 'tesla' }

console.log(bike.Wheel); // ford
console.log(bike.Model); // tesla

bike.show(); // Car Model : tesla and Car Wheel : ford



let bicycle = {
	cc : 10,
	__proto__ : car
}

let cycle = {
	cc : 20,
	__proto__ : bicycle
}

cycle.show(); // Car Model : tesla and Car Wheel : ford
