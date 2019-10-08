function destroyer(arr) {
  for (var i = 1; i < arguments.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] == arguments[i]) {
        delete arr[j];
      }
    }
  }
  // Remove all the values
  return arr.filter(Boolean);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
destroyer([1, 2, 3, 1, 2, 3], 2, 3);