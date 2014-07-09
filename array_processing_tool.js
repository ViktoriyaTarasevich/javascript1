ArrayHelper = {
    MaxSubSumN2 : function getMaxSubSumn2(value)
    {
        var array = ArrayHelper.Array(value);
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            var tempSum = 0;
            for (var j = i; j < array.length; j++) {
                tempSum += array[j];
                sum = Math.max(sum, tempSum);
            }
        }
        return sum;
    },

    /**O(n)*/
    MaxSubSumN: function getMaxSumSubn(value)
    {
        var array = ArrayHelper.Array(value);
        var maxSum = 0, partialSum = 0;
        for (var i=0; i<array.length; i++) {
            partialSum += array[i];
            maxSum = Math.max(maxSum, partialSum);
            if (partialSum < 0) partialSum = 0;
        }
        return maxSum;
    },

    MinValue : function searchMin(value)
    {
        var array = ArrayHelper.Array(value);
        var min = array[0];
        for (var i = 1; i < array.length; i++) {
            if (min > array[i]) {
                min = array[i];
            }
        }
        return min;
    },

    MaxValue: function searchMax(value)
    {
        var array = ArrayHelper.Array(value);
        var max = array[0];
        for (var i = 1; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }
        return max;
    },

    MedianValue: function searchMedian(value)
    {
        var array = ArrayHelper.Array(value);
        var med = 0;
		function sortNumber(a,b) {
			return a - b;
		}
        array.sort(sortNumber);
        var half = Math.floor(array.length/2);
		if(array.length % 2)
			return array[half];
		else
			return (array[half-1] + array[half]) / 2.0;

    },

    IncreasingSequence: function getIncreasingSequence(value)
    {
        var arr = ArrayHelper.Array(value);
        var result = [];
		var is = [];
		var  index = 0;
		is[0] = index;

		for (var i = 1; i < arr.length; i++) {
			if (arr[i] < arr[is[index]]) {
				for (var j = 0; j <= index; j++) {
					if (arr[i] < arr[is[j]]) {
						is[j] = i;
						break;
					}
				}
			} else if (arr[i] == arr[is[index]]) {

			} else {
				is[++index] = i;
			}
		}

		var lis = [];
		lis[index] = arr[is[index]];

		for (var i = index - 1; i >= 0; i--) {
			if (is[i] < is[i + 1]) {
				lis[i] = arr[is[i]];
			} else {
				for (var j = is[i + 1] - 1; j >= 0; j--) {
					if (arr[j] > arr[is[i]] && arr[j] < arr[is[i + 1]]) {
						lis[i] = arr[j];
						is[i] = j;
						break;
					}
				}
			}
		}

		return lis.toString();
    },

    Array: function getArrayFromString(form){

	   var cleanerStringRegex = /[A-Za-zА-яа-я]/;
	   var cleandString = form.value.replace(cleanerStringRegex,' ');
	   var splitRegex = /[\s,\._]/;
       var tempArray = form.value.split(splitRegex);
	   var resultArray = [];
	   for(var i = 0; i < tempArray.length; i++){
			resultArray[i] = Number(tempArray[i]);
		}
		return resultArray;
    }

}



