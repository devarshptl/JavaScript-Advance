let f = function(){
	this.a = 1;
	this.b = 2;
}

let o = new f();
o.d = 5;
f.prototype.b = 3;
f.prototype.c = 4;

console.log(o.a); // 1
console.log(o.b); // 2
console.log(o.c); // 4
console.log(o.d); // 5

console.log(o); // f { a: 1, b: 2, d: 5 }

/* prototype is invisible */
console.log(f); // [Function: f]
console.log(f.prototype); //f { b: 3, c: 4 }



