function clickTest() {
    var x = document.getElementById("hamburger-button");
    if(x.className === "hamburger"){
        x.className += " show";
    } else {
        x.className = "hamburger";
    }
}