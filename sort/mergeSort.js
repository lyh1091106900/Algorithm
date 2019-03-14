/**
 * 归并排序 
 * 优点：算法是稳定的 两个条件依次排序 第二次不会破坏第一次的排序结果 比较次数NlogN
 * 缺点：内存占用大
 */
var tool =require("./utils/tool");
var aux=[];
/**
 * 升序
 * @param {*} a Array 
 * @param {*} lowIndex int low index of a
 * @param {*} higIndex int high index of a
 */

function mergeAsc(a,lowIndex,higIndex){
   var midIndex =lowIndex+parseInt((higIndex-lowIndex)/2)
   var i = lowIndex;
   var j = midIndex+1;
  
   //内存要比其他排序大的原因
   for(var k=lowIndex;k<=higIndex;k++){
       aux[k]=a[k];
   } 
   for(var k=lowIndex;k<=higIndex;k++){
       if(i>midIndex) a[k]=aux[j++]
       else if(j>higIndex) a[k]=aux[i++]
       else if(tool.less(aux[j],aux[i])<0) a[k]=aux[j++];
       else a[k]=aux[i++];
   }
   return a;
}

/**
 * 降序
 * @param {*} a Array 
 * @param {*} lowIndex int low index of a
 * @param {*} higIndex int high index of a
 */
function mergeDec(a,lowIndex,higIndex){
    var midIndex =lowIndex+parseInt((higIndex-lowIndex)/2)
    var i = lowIndex;
    var j = midIndex+1;
    //内存要比其他排序大的原因
    for(var k=lowIndex;k<=higIndex;k++){
        aux[k]=a[k];
    } 
    for(var k=lowIndex;k<=higIndex;k++){
        if(i>midIndex) a[k]=aux[j++]
        else if(j>higIndex) a[k]=aux[i++]
        else if(tool.less(aux[j],aux[i])>0) a[k]=aux[j++];
        else a[k]=aux[i++];
    }
    return a;
 }
/**
 * 递归实现归并
 * 
 * @param {*} lowIndex int low index of a
 * @param {*} midIndex int mid index of a
 * @param {*} higIndex int high index of a
 * @param {*} type int 0 for Asc 1 for Dec 
 */

function mergeSort(a,lowIndex,higIndex,type=0){
    if(higIndex>lowIndex){
       var mid = lowIndex+parseInt((higIndex-lowIndex)/2)
       mergeSort(a,lowIndex,mid);
       mergeSort(a,mid+1,higIndex);
       if(type==0){//Asc
        mergeAsc(a,lowIndex,higIndex);
       }
       if(type==1) {//Dec
        mergeDec(a,lowIndex,higIndex); 
       }
    }
}
/**
 * 
 * @param {*} a Array
 * @param {*} type  int 0 for Asc 1 for Dec 
 */
function sort(a,type =0){
    aux= Array(a.length);
    mergeSort(a,0,a.length-1,type)
    return a;
}

module.exports.mergeSort =sort;