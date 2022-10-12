const mergeSortedArrayToNewSortedArray = (arr1, arr2) => {
  const finalArray = [];
  let firstItemArray1 = arr1[0];
  let firstItemArray2 = arr2[0];
  let i = 1;
  let j = 1;
  while (firstItemArray1 || firstItemArray2) {
    console.log(firstItemArray1, firstItemArray2);
    if (!firstItemArray2 || firstItemArray1 < firstItemArray2) {
      console.log(
        `${firstItemArray1} is smaller than ${firstItemArray2} so pushing ${firstItemArray1}`
      );
      finalArray.push(firstItemArray1);
      console.log(finalArray);

      firstItemArray1 = arr1[i];
      i++;
    } else {
      console.log(
        `${firstItemArray2} is smaller than ${firstItemArray1} so pushing ${firstItemArray2}`
      );

      finalArray.push(firstItemArray2);
      console.log(finalArray);

      firstItemArray2 = arr2[j];
      j++;
    }
  }

  return finalArray;
};

console.log(mergeSortedArrayToNewSortedArray([1, 3, 3], [2, 4, 6, 6, 9])); // [1,2,3,4,5,6,6,7,8]
