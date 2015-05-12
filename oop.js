console.log('hello world!');

function Car(name, loc){
  this.name = name
  this.loc = loc
}
Car.prototype.move = function() {
	this.loc++;
};




var car = new Car("myCar", 12);
car.move()
console.log(car.name  + car.loc);
