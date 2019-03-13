/**
 * 插入排序 
 * 优点：算法是稳定的 两个条件依次排序 第二次不会破坏第一次的排序结果 输入最优情况下比较次数比选择排序要少的多
 * 缺点：最差情况下时间复杂度是O（N^2）
 * 
 */
var tool =require("./utils/tool")
/**
 * 
 * @param {*} a Array 
 * @param {*} type int 0 升序 1降序 
 */
function insertSort(a,type =0){
 
  var aLen = a.length;
  for(var i =1; i<aLen ;i++)
  {
      if(type==0)
      for(var j=i;j>0&&tool.less(a[j],a[j-1])<0;j--){
        tool.exch(a,j,j-1);
      }
      else
      for(var j=i;j>0&&tool.less(a[j],a[j-1])>0;j--){
        tool.exch(a,j,j-1);
      }
  }
  return a
}
console.log(insertSort([1,3,2],1))
module.exports.insertSort=insertSort;