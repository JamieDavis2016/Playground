function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);
  // filter the collection
  return collection.filter(function (obj) {
    for(var i = 0; i < srcKeys.length; i++) {
      // for(var a in obj) {
      //   console.log(a);
      // }
      // console.log(!obj.hasOwnProperty(srcKeys[i]));
       console.log(obj[srcKeys[i]]);
       console.log(obj[srcKeys[i]]);
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: "a" }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var srcKeys = Object.keys(source);

  collection.forEach(obj => {
    for(var i = 0; i < srcKeys.length; i++) {
      if(obj.hasOwnProperty(srcKeys[i]) && obj[srcKeys[i]] === source[srcKeys[i]]) {
      arr.push(obj);
      }
    }
  });

  console.log(arr);
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })


// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });






function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  //match keys
  // for(var i = 0; i < collection.length; i++) {
  // for(var x in source) {
  //     if(collection[i].hasOwnProperty(x) && source[x] == collection[i][x]) {
  //         arr.push(collection[i]);
  //     }
  //   }
  // }

  collection.filter((obj) => {
    for(var x in source)
      if(obj.hasOwnProperty(x) && source[x] == obj[i]) {
        console.log("a");
        arr.push(obj);
      }
  }); 
  
  console.log(arr);
  // Only change code above this line
  return arr;
}

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })