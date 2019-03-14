const assert = require('assert')
var selectSort = require('../sort/selectSort').selectSort;
var insertSort = require('../sort/insertSort').insertSort;
var mergeSort = require('../sort/mergeSort').mergeSort;
var quickSort = require('../sort/quickSort').quickSort;
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

describe('mergeSort',()=>{
    it('mergeSort should return [3, 4, 5, 6, 7, 9]',()=>{
        var b =[5,3,4,6,7,9];
        assert.equal(4,mergeSort(b)[1])
    })
})
describe('quickSort',()=>{
    it('quickSort should return [3, 4, 5, 6, 7, 9]',()=>{
        var b =[5,3,4,6,7,9];
        assert.equal(4,quickSort(b)[1])
    })
    it('quickSort should return [9,7,6,5,4,3]',()=>{
        var b =[5,3,4,6,7,9];
        assert.equal(7,quickSort(b,1)[1])
    })
})