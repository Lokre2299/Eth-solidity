const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());








class Car {
    park() {
        return 'stopped';
    }
    drive() {
        return 'vroom';
    }

}

let car;
beforeEach(() =>{
    car = new Car();
    console.log('First instance is about park function');
    console.log('Second instance is about drive function');

});
describe('Car',() => {
    it('has a park function', () => {
        assert.equal(car.park(), 'stopped');

    })
    it('has a drive function',() =>{
        assert.equal(car.drive(), 'vroom');
    })

}); 