// 4. Implement Selection Sort
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
 
  //Loop till the second last element
  for (let i = 0; i < arr.length - 1; i++){
    //Loop after the i till the last element
    for (let j = i + 1; j < arr.length; j++){  
      //If jth element is less than the ith element then swap
      if( arr[j] < arr[i]) swap(arr, j, i)
      //Change < to > for sorting in descending order
    }
  }
  
  return arr;
}

console.log(selectionSort([1, 8, 2, 4, 5]));