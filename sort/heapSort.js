var tool = require("../utils/tool");
/*
for 循环构建大顶堆 我发觉该方法对于某些数组排序时可能会存在bug

*/
function heap_adjust1(arr, start, end){
    console.log("begin:",arr);
    console.log("start",start,end);	
    var tmp = arr[start];
	console.log(start);
    var j = start * 2;
    if(j == 0){
        j = 1;
    }
    for(; j < end; j*=2){
        if(arr[j+1]  > arr[j]){
            j++;
        }
        if(tmp < arr[j]){
            arr[start] = arr[j];
            start = j;
        }
    }
    arr[start] = tmp;
	console.log(arr);
}

/*

递归 构建大顶堆
*/
function heap_adjust2(arr, start, end){
	// console.log("begin:",arr);	
	let left = 2*start;
	let right = left+1;
	let max = start;
	//console.log("start",start,end);
	if(parseInt(end/2) == 0) return
	 if(start<=end/2)          //如果i是叶节点就不用进行调整 
    {
        if(left<=end&&arr[left]>arr[max])
        {
            max=left;
        }    

        if(right<=end&&arr[right]>arr[max])
        {
            max=right;
        }

        if(max!=start)
        {
			//	console.log("start1",start,max);
            tool.exch(arr,start,max);
            heap_adjust(arr,max,end);    //避免调整之后以max为父节点的子树不是堆 
        }

    } 
    console.log("end:",arr);	
}


//var arr =  [ 20, 17, 8, 16, 3, 7 ]

function heapsort(arr) {
    var i = parseInt(arr.length / 2);
    for (; i >= 0; i--) {
        heap_adjust2(arr, i, arr.length);
    }

    //[ 20, 17, 8, 16, 7, 3 ]
    //console.log("result1",arr);

    for (i = arr.length; i > 2; i--) {
        swap(arr, 0, i - 1);
        heap_adjust2(arr, 0, i - 2);
    }
    return arr;
}

module.exports.heapsort = heapsort
//var arr =  [ 7,3 , 8, 16, 17, 20 ]
//heap_adjust1(arr, 0, 1);
//console.log("result2",arr);