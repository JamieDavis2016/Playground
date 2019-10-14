function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
 
var keys = Object.keys(source);

  collection.forEach((obj) => {
    for(var i = 0; i < keys.length; i++)
    {
      var prop = Object.getOwnPropertyNames(obj);
      if(!obj.hasOwnProperty(keys[i]) || obj[keys[i]] !== source[keys[i]]) {
          return null;
      }
    }
      arr.push(obj);
  });  
  
  console.log(arr);
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })