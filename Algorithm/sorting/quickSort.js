const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    let length = arr.length;
    let pivot = arr[length - 1];
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

const array = [7, 23, 2, 56, 8, 1, 9, 6, 4];
console.log(quickSort(array));
