function destroyer(arr) {

    console.log(arr);
    var newArray = [];
      for (var i = 1; i < arguments.length; i++) {  
        if(arr.includes(item => item != arguments[i])) {
          newArray.push(arr[i]);
        }
      }
      console.log(newArray);
      // Remove all the values
      return arr;
    }
    
    console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
    destroyer([1, 2, 3, 1, 2, 3], 2, 3);