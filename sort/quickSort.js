/**
 * 快速排序 
 * 优点：节省内存 比较次数NlogN 使用率很高的一种排序
 * 缺点：不稳定，两种条件依次排序会有干扰
 */
var tool = require("../utils/tool");
/**
 * 
 * @param {*} a Array 
 * @param {*} lowIndex int lowIndex of a
 * @param {*} highIndex int highIndex of a
 * @param {*} type int 0 for Asc 1 for Dec 
 */
function partition(a,lowIndex,highIndex,type=0){
        var i = lowIndex;
        var j = highIndex+1;
        var v = a[lowIndex];
        while(true){
            if(type==1)
            {
                while(tool.less(a[++i],v)>0) if(i==highIndex) break;
                while(tool.less(v,a[--j])>0) if(j==lowIndex) break;
                if(i>=j) break;
                tool.exch(a,i,j);
            }
            if(type==0)
            {
                while(tool.less(a[++i],v)<0) if(i==highIndex) break;
                while(tool.less(v,a[--j])<0) if(j==lowIndex) break;
                if(i>=j) break;
                tool.exch(a,i,j);
            }
        }
        tool.exch(a,lowIndex,j);
        return j;
}
/**
 * 
 * @param {*} a Array
 * @param {*} lowIndex int lowIndex of a
 * @param {*} highIndex int highIndex of a
 * @param {*} type int 0 for Asc 1 for Dec 
 */
function quickSort(a,lowIndex,highIndex,type=0){
   if(lowIndex>=highIndex) return;
   var j = partition(a,lowIndex,highIndex,type)
   quickSort(a,lowIndex,j-1,type);
   quickSort(a,j+1,highIndex,type);
}
/**
 * 
 * @param {*} a Array
 * @param {*} type int 0 for Asc 1 for Dec 
 */
function sort(a,type=0){
    quickSort(a,0,a.length-1,type);
    return a;
}
module.exports.quickSort =sort;