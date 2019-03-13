/**
 * 选择排序 
 * 优点：算法是稳定的 两个条件依次排序 第二次不会破坏第一次的排序结果
 * 缺点：时间复杂度是O（N^2）
 */
var tool =require("./utils/tool")
/**
 * 
 * @param {*} a Array 
 * @param {*} type int 0 升序 1降序 
 */

function selectSort (a,type=0){
  var aLen = a.length;
  for(var i =1; i<aLen ;i++)
  {
      var max =i;
      var min =i;
     for(var j= i+1;j<aLen;j++)
     {
        if(tool.less(a[j],a[min])<0) min =j;
        if(tool.less(a[j],a[max])>0) max =j;
     }
     if(type == 0){
         tool.exch(a,i,min);
     }
     if(type ==1) {
        tool.exch(a,i,max);
     }
  }
  return a
}
module.exports.selectSort=selectSort;