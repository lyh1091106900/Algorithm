const assert = require('assert')
var createbinanyHeap = require("../queue/binaryHeap")

describe('binaryHeap',()=>{
    var bh = createbinanyHeap(10);
    it('binaryHeap delMaxTest',()=>{
        [1,3,4,8,5,14,2,46].forEach(function(value){
            bh.insert(value)
        })
        assert.equal(46,bh.delMax());
        assert.equal(14,bh.delMax());
    })

}
)
