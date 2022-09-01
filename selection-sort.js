

function selectionSort(arr) {

  // Copy the original array
  let copyArr = arr.slice();
  // Create an array to store the sorted values
  let sorted = [];
  // While the array is not empty...
  while (copyArr.length) {
    // Do not move this console.log
    console.log(sorted.join(","));
    // Find the index of the minimum value in the unsorted half
    let minEl = Math.min(...copyArr)
    index = copyArr.indexOf(minEl);
    // Save and remove the value at the min index
    let removed = copyArr.splice(index, 1);
    // Add the min value to the end of the sorted array
    sorted.push(removed[0]);
  }
  console.log(sorted)
  return sorted;
}


function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0;
  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));
    // Find the index of the minimum value in the unsorted half
    let smallest = arr[divider];
    for (let i = divider + 1; i < arr.length; i++) {
      // Save the min value
      smallest = Math.min(smallest, arr[i]);
    }
    let index = arr.indexOf(smallest);
    if (divider !== index){
      arr.copyWithin(divider + 1, divider, index)
      
      arr[divider] = smallest;
    }

    divider++

    // Shift every unsorted value to the left of the min value to the right by 1

    // Put the min value at the divider

    // Increment the divider and repeat
  }
}



module.exports = [selectionSort, selectionSortInPlace];
