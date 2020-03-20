// Implement Insertion Sort
function insertionSort(arr) {
  
  // Loop through array
  for(let i = 0; i < arr.length; i++){
    // Create temp variable for current element
    let curVal = arr[i];
    // Create variable and set equal to previous element's index
    let j;
    // Loop backwards while index >= 0 and current element > temp variable
    for (j = i - 1; j >=0 && arr[j] > curVal; j--){
      // Set next element equal to current element
      arr[j + 1] = arr[j]

    }
    // Set next element equal to temp
    arr[j + 1] = curVal
    
  } 
    return arr; 
  }
  
  console.log(insertionSort([8, 7, 6, 9, 5])); //Output: [5, 6, 7, 8, 9]