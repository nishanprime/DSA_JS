//
const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    let length = arr.length;
    let pivot = arr[Math.floor(arr.length / 2)];
    // console.log(pivot);
    // pivot = arr[length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
};

const createArray = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * n));
  }
  return arr;
};

const returnReturnAndTime = (func, algoName, parameter) => {
  let t1 = performance.now();
  console.log(func(parameter));
  let t2 = performance.now();
  console.log(algoName, ' Time taken:', (t2 - t1) / 1000);
};
const array = createArray(10);
console.log(array);
console.log(quickSort(array));
returnReturnAndTime(quickSort, 'Quick Sort', array);
// returnReturnAndTime(mergeSort, 'Merge Sort', array);
