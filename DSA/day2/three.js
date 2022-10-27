function linearSearch(arr, target) {
    for (let i in arr) {
      if (arr[i] === target) return i
    }
  
    return -1
  }
  
  console.log("index of number is :" +linearSearch([1, 2, 3, 4], 1)) 
  console.log("index of number is :" +linearSearch([1, 2, 3, 4], 4)) 
  console.log("index of number is :" +linearSearch([1, 2, 3, 4], 2)) 
  console.log("index of number is :" +linearSearch([3, 4, 1, 6, 3], 6))