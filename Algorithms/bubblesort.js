function printArray(arr, size) {
    for (let i = 0; i < size; i++) {
        console.log(arr[i] + " ");
    }
    console.log("\n")
}

function swap(arr,fn, sn) {
    let temp = arr[fn];
    arr[fn] = arr[sn];
    arr[sn] = temp;
}

function bubblesort(arr, n) {
    let swapped = false;
    for (let x = 0; x < n - 1; x++) {
        swapped = false;
        for (let j = 0; j < n - x - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr,j,j+1);
                swapped = true;
            }
        }
        if (swapped = false) {
            break;
        }
    }
}

let arr = new Array(64,231,21,46,1,90,31);
console.log("Inital Array: ");
printArray(arr, arr.length);
bubblesort(arr, arr.length);
console.log("Sorted Array: ");
printArray(arr, arr.length);
