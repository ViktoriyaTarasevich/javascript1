function setEvents() {
    document.getElementById("min_value").addEventListener("click", ArrayHelper.minValue, false);
    document.getElementById("max_value").addEventListener("click", ArrayHelper.maxValue, false);
    document.getElementById("median_value").addEventListener("click", ArrayHelper.medianValue, false);
    document.getElementById("quick_sub_sum").addEventListener("click", ArrayHelper.maxSubSumN, false);
    document.getElementById("slow_sub_sum").addEventListener("click", ArrayHelper.maxSubSumN2, false);
    document.getElementById("increase_sequence").addEventListener("click", ArrayHelper.maximumSubArray, false);
}

function deleteEvents(){
    document.getElementById("min_value").removeEventListener("click", ArrayHelper.minValue, false);
    document.getElementById("max_value").removeEventListener("click", ArrayHelper.maxValue, false);
    document.getElementById("median_value").removeEventListener("click", ArrayHelper.medianValue, false);
    document.getElementById("quick_sub_sum").removeEventListener("click", ArrayHelper.maxSubSumN, false);
    document.getElementById("slow_sub_sum").removeEventListener("click", ArrayHelper.maxSubSumN2, false);
    document.getElementById("increase_sequence").removeEventListener("click", ArrayHelper.maximumSubArray, false);
}