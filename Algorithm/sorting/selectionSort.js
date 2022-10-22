const selectionSort = (arr) => {
  let smallestIndex;
  for (let j = 0; j < arr.length; j++) {
    smallestIndex = j;
    let temp = arr[j];
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[smallestIndex] > arr[i]) {
        smallestIndex = i;
      }
    }
    //swap arr[j] with smallest
    arr[j] = arr[smallestIndex];
    arr[smallestIndex] = temp;
  }
  return arr;
};
const array = [7, 23, 2, 5, 8, 1, 9, 6, 56];
console.log(selectionSort(array));
