/**
 * 二叉堆优先队列
 * 优点：最优输入情况下 高度为logN 单次比较次数为logN
 * 缺点：输入最坏情况下 高度为N 单次比较次数为N
 */
var tool = require("../utils/tool")
function binanyHeap(size){
    var pq = Array(size);
    var N =0;
    this.isEmpty = function(){
        return N==0;
    }
    this.insert =function(value){
        pq[++N]=value;
        tool.maxHeapSwim(pq,N);
    }
    this.delMax =function(){
        var max =  pq[1];
        tool.exch(pq,1,N);
        pq[N] =null;
        tool.maxHeapsink(pq,1);
        N--;
        return max;
    }
    this.size = function(){
        return N;
    }
    this.getpq=function(){
        return pq;
    }
}
createbinanyHeap = function(size){
    return new binanyHeap(size);
}

module.exports = createbinanyHeap;