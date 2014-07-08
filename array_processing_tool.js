/**O(n^2)*/
function getMaxSubSum(array){
    var sum = 0;
    for(var i =0;i< array.length;i++){
        var tempSum = 0;
        for(var j = 1; j < array.length; j++){
            tempSum += array[j];
            sum = Math.max(sum,tempSum);
        }
    }
    return maxSum;
}

/**O(n)*/
function getMaxSumSub(array){
    var sum = 0;
    var sumOfSubArray = 0;
    for(var i = 0; i<array.length,i++;){
        sumOfSubArray += array[i];
        sum = Math.max(sum,sumOfSubArray);
        if(sumOfSubArray < 0){
            sumOfSubArray = 0;
        }
    }
    return sum;
}

function searchMin(array){
    var min = array[0];
    for(var i = 1; i< array.length; i++){
        if (min>array[i]){
            min = array[i];
        }
    }
    return min;
}

function searchMax(array){
    var max = array[0];
    for (var i = 1; i< array.length; i++){
        if (max < array[i]){
            max = array[i];
        }
    }
    return max;
}

function searchMedian(array) {
    var med = 0;
    var sortArray = array.sort();
    if (array.length % 2 === 0){
        med = (sortArray[Math.floor(array.length)] + sortArray[Math.floor(array.length)+1])/2
    }
    else
    {
        med = sortArray[Math.floor(array.length)];
    }
    return med;
}

function getIncreasingSequence(array){
    var result = [];
    for (var i = 0; i < array.length;i++){
        for (var j = 0; j< array.length; j++){
            if (result[j-1]<array[i] && array[i] < result[j]){
                result[j] = array[i];
            }
        }
    }
}

