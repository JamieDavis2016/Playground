
function activateNavBar() {
var nav = document.getElementById('nav');

if(nav.className === "nav") {
    nav.className += " active";
} else {
    nav.className = "nav";
}
}