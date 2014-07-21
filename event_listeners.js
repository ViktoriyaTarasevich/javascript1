function setEvents() {
    document.getElementById('min_value').addEventListener('click',
        setData(document.arrayWorker.outputValue.value, ArrayHelper.maxValue, document.getElementById('array')), false);
    document.getElementById('median_value').addEventListener('click',
        setData(document.arrayWorker.outputValue.value, ArrayHelper.medianValue, document.getElementById('array')), false);
    document.getElementById('quick_sub_sum').addEventListener('click',
        setData(document.arrayWorker.outputValue.value, ArrayHelper.maxSubSumN, document.getElementById('array')), false);
    document.getElementById('slow_sub_sum').addEventListener('click',
        setData(document.arrayWorker.outputValue.value, ArrayHelper.maxSubSumN2, document.getElementById('array')), false);
    document.getElementById('increase_sequence').addEventListener('click',
        setData(document.arrayWorker.outputValue.value, ArrayHelper.maximumSubArray, document.getElementById('array')), false);
}

function deleteEvents(){
    document.getElementById('min_value').removeEventListener('click',
        setData(document.arrayWorker.outputValue.value, ArrayHelper.minValue, document.getElementById('array')), false);
    document.getElementById('max_value').removeEventListener('click',
        setData(document.arrayWorker.outputValue.value, ArrayHelper.maxValue, document.getElementById('array')), false);
    document.getElementById('median_value').removeEventListener('click',
        setData(document.arrayWorker.outputValue.value, ArrayHelper.medianValue,document.getElementById('array')), false);
    document.getElementById('quick_sub_sum').removeEventListener('click',
        setData(document.arrayWorker.outputValue.value, ArrayHelper.maxSubSumN, document.getElementById('array')), false);
    document.getElementById('slow_sub_sum').removeEventListener('click',
        setData(document.arrayWorker.outputValue.value, ArrayHelper.maxSubSumN2, document.getElementById('array')), false);
    document.getElementById('increase_sequence').removeEventListener('click',
        setData(document.arrayWorker.outputValue.value, ArrayHelper.maximumSubArray, document.getElementById('array')), false);
}

function setData(container, value,argument){
    container = value(argument);
}
