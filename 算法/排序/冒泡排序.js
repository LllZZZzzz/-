// 平均时间复杂度：O(n^2) 空间复杂度 O(1)
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - i-1; j++){
            if (arr[j] > arr[j + 1]) {
                const flag = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = flag;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([0,1,4,2,8,7,3]))