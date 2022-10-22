const bubbleSort = (arr) => {
  let end = arr.length;
  while (end > 0) {
    for (let i = 0; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
    end--;
  }
  return arr;
};

const array = [1, 7, 2, 5, 8, 23, 9, 6, 56];
console.log(bubbleSort(array));
