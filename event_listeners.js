function setEvents() {
    document.getElementById("min_value").addEventListener("click", ArrayHelper.MinValue, false);
    document.getElementById("max_value").addEventListener("click", ArrayHelper.MaxValue, false);
    document.getElementById("median_value").addEventListener("click", ArrayHelper.MedianValue, false);
    document.getElementById("quick_sub_sum").addEventListener("click", ArrayHelper.MaxSubSumN, false);
    document.getElementById("slow_sub_sum").addEventListener("click", ArrayHelper.MaxSubSumN2, false);
    document.getElementById("increase_sequence").addEventListener("click", ArrayHelper.IncreasingSequence, false);
}

function deleteEvents(){
    document.getElementById("min_value").removeEventListener("click", ArrayHelper.MinValue, false);
    document.getElementById("max_value").removeEventListener("click", ArrayHelper.MaxValue, false);
    document.getElementById("median_value").removeEventListener("click", ArrayHelper.MedianValue, false);
    document.getElementById("quick_sub_sum").removeEventListener("click", ArrayHelper.MaxSubSumN, false);
    document.getElementById("slow_sub_sum").removeEventListener("click", ArrayHelper.MaxSubSumN2, false);
    document.getElementById("increase_sequence").removeEventListener("click", ArrayHelper.IncreasingSequence, false);
}