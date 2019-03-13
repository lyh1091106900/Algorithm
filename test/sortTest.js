const assert = require('assert')
var selectSort = require('../sort/selectSort').selectSort;
var insertSort = require('../sort/insertSort').insertSort;
describe('selectSort',()=>{
    it('selectSort should return [1,2,3]',()=>{
        assert.equal(2,selectSort([1,3,2])[1])
    })
})

describe('insertSort',()=>{
    it('insertSort should return [1,2,3]',()=>{
        assert.equal(2,insertSort([1,3,2],1)[1])
    })
})