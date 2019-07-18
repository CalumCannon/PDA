var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })
  //

  it('it can add', function(){
    calculator.previousTotal = 1;
    calculator.add("4");
    assert.equal(5, calculator.runningTotal)
  })

  it('it can subtract', function(){
    calculator.previousTotal = 7;
    calculator.subtract("4");
    assert.equal(3, calculator.runningTotal)
  })

  it('it can multiply', function(){
    calculator.previousTotal = 3;
    calculator.multiply("5");
    assert.equal(15, calculator.runningTotal)
  })

  it('it can divide', function(){
    calculator.previousTotal = 21;
    calculator.divide("7");
    assert.equal(3, calculator.runningTotal)
  })

  it('it can concat numbers', function(){
    calculator.numberClick(2);
    calculator.numberClick(2);
    assert.equal(22, calculator.runningTotal)
  })

  it('it can chain operations', function(){
    calculator.numberClick(1);
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    calculator.operatorClick("*");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(6, calculator.runningTotal)
  })

  it('it can clear running total without affecting calculation', function(){
    calculator.numberClick(1);
    calculator.operatorClick("+");
    calculator.numberClick(1);
    calculator.operatorClick("=");


    calculator.operatorClick("+");
    calculator.numberClick(1);
    calculator.clearClick();

    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.operatorClick("=");

    assert.equal(4, calculator.runningTotal)
  })
  



});
