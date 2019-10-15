function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  //Get all capitals and make them lowercase
  //if there is a capital letter change it to lowercase and add a dash
  //add a dash where there is a space / regex to match any special character
  str = str.toLowerCase();
  var regexForWhitespace = /[^ _]/;
  
  console.log(regexForWhitespace.test(str));
  str = str.replace(regexForWhitespace, "-");

  // for(var i = 0; i < str.length; i++) {
  //   console.log(str[i]); 
  //   console.log(regexForWhitespace.test(str[i]));
  // }

  console.log(str);
  return str;
}

spinalCase('This Is Spinal Tap');