ArrayHelper = {
    maxSubSumN2 : function getMaxSubSumn2(value){
        var array = ArrayHelper.arrayParsing(value);
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            var tempSum = 0;
            for (var j = i; j < array.length; j++) {
                tempSum += array[j];
                sum = Math.max(sum, tempSum);
            }
        }
        setData(sum);
        return sum;
    },

    /**O(n)*/
    maxSubSumN: function getMaxSumSubn(value){
        var array = ArrayHelper.arrayParsing(value);
        var maxSum = 0, partialSum = 0;
        for (var i=0; i<array.length; i++) {
            partialSum += array[i];
            maxSum = Math.max(maxSum, partialSum);
            if (partialSum < 0) partialSum = 0;
        }
        setData(maxSum);
        return maxSum;
    },

    minValue : function searchMin(value){
        var array = ArrayHelper.arrayParsing(value);
        var min = array[0];
        for (var i = 1; i < array.length; i++) {
            if (min > array[i]) {
                min = array[i];
            }
        }
        setData(min);
        return min;
    },

    maxValue: function searchMax(value){
        var array = ArrayHelper.arrayParsing(value);
        var max = array[0];
        for (var i = 1; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }
        setData(max);
        return max;
    },

    medianValue: function searchMedian(value){
        var array = ArrayHelper.arrayParsing(value);
        var med = 0;
		function sortNumber(a,b) {
			return a - b;
		}
        array.sort(sortNumber);
        var half = Math.floor(array.length/2);
		if(array.length % 2){
            setData(array[half]);
            return array[half];
        }
		else{
            setData((array[half-1] + array[half]) / 2.0)
            return (array[half-1] + array[half]) / 2.0;
        }
    },

    maximumSubArray: function getMaximumSubArray(value){
        var arr = ArrayHelper.arrayParsing(value);
        var result = [];
        var increasingSubSequence = [];
        var  index = 0;
        increasingSubSequence[0] = index;

        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < arr[increasingSubSequence[index]]) {
                for (var j = 0; j <= index; j++) {
                    if (arr[i] < arr[increasingSubSequence[j]]) {
                        increasingSubSequence[j] = i;
                        break;
                    }
                }
            } else if (arr[i] == arr[increasingSubSequence[index]]) {

            } else {
                increasingSubSequence[++index] = i;
            }
        }

        var longestIncreasingSubSequence = [];
        longestIncreasingSubSequence[index] = arr[increasingSubSequence[index]];

        for (var i = index - 1; i >= 0; i--) {
            if (increasingSubSequence[i] < increasingSubSequence[i + 1]) {
                longestIncreasingSubSequence[i] = arr[increasingSubSequence[i]];
            } else {
                for (var j = increasingSubSequence[i + 1] - 1; j >= 0; j--) {
                    if (arr[j] > arr[increasingSubSequence[i]] && arr[j] < arr[increasingSubSequence[i + 1]]) {
                        longestIncreasingSubSequence[i] = arr[j];
                        increasingSubSequence[i] = j;
                        break;
                    }
                }
            }
        }

        setData(longestIncreasingSubSequence.toString());
        return longestIncreasingSubSequence.toString();
    },

    arrayParsing: function parseFromString(){
       if (arguments[0] && arguments[0] instanceof Array)
            return arguments[0];
       var form = document.getElementById('array');
	   var cleanerStringRegex = /[A-Za-zА-яа-я]/;
	   var cleanedString = form.value.replace(cleanerStringRegex,' ');
	   var splitRegex = /[\s,\._]+/;
       var tempArray = cleanedString.split(splitRegex);
	   var resultArray = [];
	   for(var i = 0; i < tempArray.length; i++){
			resultArray[i] = Number(tempArray[i]);
		}
		return resultArray;
    }

}

function setData(value){
    document.array_worker.outputValue.value = value;
}



