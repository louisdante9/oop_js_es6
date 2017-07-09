import chai from "chai";
const {Person, Employee} = require("../app");

let expect = chai.expect
let should = chai.should()
let assert = chai.assert
let p = new Person('louis');
let e = new Employee('manager', 'tony')
describe("Test the behavior of person class",  () => {
    it('should return a string',
     ()=> {
        expect(e.name).to.be.a('string');
        
    })
     it('should return true when passed doWork via expect()',
     ()=> {
        
        expect(e.doWork()).to.equal('tony is working');
        
    })
    it('should return true for employee being an instance of person class',
     ()=> {
        expect(p).to.be.an.instanceof(Person);
       
    })
    
})
