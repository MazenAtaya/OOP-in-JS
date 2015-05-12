var assert = require('assert')
var expect = require('expect')
require ('expect')
function Car(name, loc){
  this.name = name
  this.loc = loc
}
Car.prototype.move = function() {
	this.loc++;
};


var c = new Car("BMW",4);
describe('Car', function(){
  describe('#move()', function(){
    it('should increase the location', function(){
    	c.move();
      assert.equal(5, c.loc);
    })
  })
})

describe('Car', function(){
  describe('#move()', function(){
    it('should respond to move', function(){
      expect(c).to.respondTo("move");
    })
  })
})
