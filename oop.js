console.log('hello world!');

function Car(name, loc){
  this.name = name
  this.loc = loc
}
Car.prototype.move = function() {
	this.loc++;
};



function Van (name, loc) {
	Car.call(this,name,loc);

}	

//Van.prototype.__proto__ = Car.prototype;
Van.prototype = Object.create(Car.prototype);
Van.prototype.something = function  () {
	console.log("something!!")
}




var v = new Van("Audi",13);

v.move();
v.something();

console.log(v instanceof Van)
console.log(v instanceof Car)

console.log(v.loc);
console.log(v.name);
