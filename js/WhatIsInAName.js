function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    for(var i = 0; i < collection.length; i++) {
      if(collection[i].last == "Capulet") {
        arr.push(collection[i].first, collection[i].last);
      }
    }
    console.log(arr);
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });