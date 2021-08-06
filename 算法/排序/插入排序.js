// 时间复杂度O(n^2) 空间复杂度O(1)
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++){
        for (let j = i - 1; j >= 0; j--){
            if (arr[j] > arr[i]) {
                let flag = arr[j];
                arr[j] = arr[i];
                arr[i] = flag;
                i=i-1;
            };
        }
    }
    return arr;
}
console.log(insertionSort([1, 4, 5, 2, 6, 3, 4, 8, 7]));