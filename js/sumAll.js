function sumAll(arr) {

    if(arr.length > 0)
    {
    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);
      var result = 0;
      for(var i = min; i <= max; i++) {
        
        result += i;
      }
  
    return result;
    }
  
    return 0;
  }
  
  console.log(sumAll([1, 4]));
  sumAll([1, 4]);
  