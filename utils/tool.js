/*
工具类 方便实现算法的比较等
*/
/**
 * 
 * @param {*} a1 int
 * @param {*} a2 int
 * return 返回 a1是否大于a2
 */
function less(a1,a2){
    return a1-a2
}
/**
 * 
 * @param {*} a Array
 * @param {*} index1 int  index of a
 * @param {*} index2 int  index of a
 * 实现 index1 和 index2 索引之间的互换
 */
function exch(a,index1,index2){
  var temp = a[index1];
  a[index1] =a[index2];
  a[index2] = temp;
}

/**
 * 
 * @param {*} a Array
 * @param {*} k int index of a
 * 实现堆的上浮 根节点最大(大顶堆)
 */
function maxHeapSwim(a,k){
  while(k>1,less(a[parseInt(k/2)],a[k])<0){
    exch(a,parseInt(k/2),k);
    k = parseInt(k/2)
  }
}
/**
 * 
 * @param {*} a Array
 * @param {*} k int index of a
 * 实现堆的上浮 根节点最小(小顶堆)
 */
function minHeapSwim(a,k){
  while(k>1,less(a[parseInt(k/2)],a[k])>0){
    exch(a,parseInt(k/2),k);
    k = parseInt(k/2)
  }
}
/**
 * 
 * @param {*} a Array
 * @param {*} k int index of a
 * 实现堆的下沉 根节点最大(大顶堆)
 */
function maxHeapsink(a,k){
  var N = a.length;
  while(k<=N){
    var j = 2*k;
    if((j+1)<N&&less(a[j],a[j+1])<0) j++
    if(less(a[k],a[j])<0)
    exch(a,k,j);
    k=j;
  }
}
/**
 * 
 * @param {*} a Array
 * @param {*} k int index of a
 * 实现堆的下沉 根节点最小(小顶堆)
 */
function minHeapsink(a,k){
  var N = a.length;
  while(k<=N){
    var j = 2*k;
    if((j+1)<N&&less(a[j],a[j+1])>0) j++
    if(less(a[k],a[j])>0)
    exch(a,k,j);
    k=j;
  }
}
module.exports = {less,exch,maxHeapSwim,minHeapSwim,maxHeapsink,minHeapsink};