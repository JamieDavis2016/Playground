function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
  
    //Get all capitals and make them lowercase
    //if there is a capital letter change it to lowercase and add a dash
    //add a dash where there is a space
    for(var i = 0; i < str.length; i++) {
      if(str[i].isUpperCase()) {
        console.log("a");
      }
    }
  
    console.log(str);
    return str;
  }
  
  spinalCase('This Is Spinal Tap');