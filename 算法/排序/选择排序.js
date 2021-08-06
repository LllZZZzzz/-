// 平均时间复杂度O(n^2) 空间复杂度O(1)
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = i+1; j < arr.length; j++){
            if (arr[i] > arr[j]) {
                let flag = arr[i];
                arr[i] = arr[j];
                arr[j] = flag;
            }
        }
    }
    return arr;
};
console.log(selectionSort([5, 8, 1, 5, 4, 6, 2]));