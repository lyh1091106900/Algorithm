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

module.exports = {less,exch};