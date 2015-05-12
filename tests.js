var assert = require('assert')

function Car(name, loc){
  this.name = name
  this.loc = loc
}
Car.prototype.move = function() {
	this.loc++;
};



describe('Car', function(){
  describe('#move()', function(){
    it('should increase the location', function(){
    	var c = new Car("BMW",4);
    	c.move();
      assert.equal(5, c.loc);
    })
  })
})

