function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line    
  var srcKeys = Object.keys(source);

  console.log(srcKeys);
// obj.hasOwnProperty(srcKeys[i]) || 
// obj[srcKeys[i]] !== source[srcKeys[i]]
  collection.filter(item => {
    for(var i = 0; i < srcKeys.length; i++) {
    }
    if(item.hasOwnProperty(source)) {
      arr.push(item);
    }
  });

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });