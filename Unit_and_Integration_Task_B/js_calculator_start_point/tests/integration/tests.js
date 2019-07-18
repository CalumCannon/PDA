var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  //Do the arithmetical operations update the display with the result of the operation?
  it('do the operations update the display with result', function(){
        running_total = element(by.css('#running_total'))
        element(by.css('#number2')).click();
        element(by.css('#operator_add')).click();
        element(by.css('#number2')).click();
          element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })

  //Can multiple operations be chained together?
  it('can multiple operations be chained', function(){
        running_total = element(by.css('#running_total'))
        element(by.css('#number2')).click();
        element(by.css('#operator_add')).click();
        element(by.css('#number2')).click();
        element(by.css('#operator_add')).click();
        element(by.css('#number2')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('6')
  })

  //Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  it('can have negative numbers', function(){
        running_total = element(by.css('#running_total'))
        element(by.css('#number2')).click();
        element(by.css('#operator_subtract')).click();
        element(by.css('#number9')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('-7')
  })

  //Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  it('can have non real numbers', function(){
        running_total = element(by.css('#running_total'))
        element(by.css('#number5')).click();
        element(by.css('#operator_divide')).click();
        element(by.css('#number2')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('2.5')
  })

  //Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  it('can have large numbers', function(){
        running_total = element(by.css('#running_total'))
        element(by.css('#number5')).click();
        element(by.css('#number5')).click();
        element(by.css('#number5')).click();

        element(by.css('#operator_multiply')).click();

        element(by.css('#number5')).click();
        element(by.css('#number5')).click();
        element(by.css('#number5')).click();

        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('308025')
  })

/*If a number is divided by zero, is the output 'Not a number'? (You will need to modify the Calculator model to meet this requirement). */
it('should return NaN is division by 0 is attempted', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number2')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('NaN')
})

});
