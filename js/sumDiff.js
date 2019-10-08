function diffArray(arr1, arr2) {
    var newArr, tempArray = [];
  
    tempArray.push(arr1, arr2);
  
    for(var i = 0; i < tempArray.length; i++) {
      if(tempArray[i] == arr1[i]) {
        newArr.push();
      }
    }
    
    // Same, same; but different.
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);