function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
for(var keyd in source) {
}
  for(var key in collection) {
      if(source[keyd] === collection[key][keyd]) {
        arr.push(collection[key]);
      } 
    }
   console.log(arr);
  // Only change code above this line
  return (arr);
}

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })