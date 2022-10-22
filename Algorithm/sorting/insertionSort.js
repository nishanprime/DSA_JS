const insertionSort = (arr) => {
  console.log(arr);
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numberToInsert;
  }
};
const array = [7, 23, 2, 5];

console.log(insertionSort(array));
console.log(array);
