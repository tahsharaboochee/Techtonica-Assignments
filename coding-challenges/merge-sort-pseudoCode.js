//inorder to implement merge sort it's useful to first implement a function responsible for merging to sorted arrays
// function should create a new array which is sorted and consist of all the elements in the two input arrays
function merge(arr1, arr2){
  //create an empty array take a look at the smallest vals in each input arr
    let results = [];
    let i = 0;
    let j = 0;
  //while there are still vals we haven't looked at...
  while(i < arr1.length && j < arr2.length){
    //if the val in the first arr < the second val 
    if(arr2[j] > arr1[i]){
      //push the val in the first arr into the results and move on to the next val in first arr
      results.push(arr1[i]);
      i++;
    } else {
      // if the val in the first arr > second val in 2nd arr push the val in 2nd arr into results and move on to the next val in 2nd arr
      results.push(arr2[j])
      j++;
    }
  }
  // if uneven array lengths merge until hit the end of one of the arrays 
  while(i < arr1.length) {
    results.push(arr1[i])
    i++;
  }
  while(j < arr2.length) {
      results.push(arr2[j])
      j++;
  }
  return results;
}

function mergeSort(arr) {
  //break up the arr into two halves until you have arrays that are empty or have one element
  if(arr.length <= 1) return arr; 
  //once have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
 let mid = Math.floor(arr.length/2)
 let left = mergeSort(arr.slice(0, mid));
 let right = mergeSort(arr.slice(mid));
  //once the array has been merged back together, return the merged and sorted array
  return merge(left, right)

}


let numSort = [9, 3, 1, 5, 8, 0, 6, 2];
console.log(mergeSort(numSort));
console.log(mergeSort([10,24,76,73]))