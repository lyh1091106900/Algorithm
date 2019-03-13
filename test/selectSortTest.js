const assert = require('assert')
var selectSort = require('../sort/selectSort').selectSort;
describe('selectSort',()=>{
    it('selectSort should return [1,2,3]',()=>{
        assert.equal(2,selectSort([1,3,2])[1])
    })
})