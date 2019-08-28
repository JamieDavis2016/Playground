function clickTest() {
    var x = document.getElementById("hamburger-button");
    var y = document.getElementById("disquis");
    if (x.className === "hamburger") {
        x.className += " show";
        y.className += " show";
    } else {
        x.className = "hamburger";
        y.className = "disquis";
    }
}

function stuff() {
    var element = document.getElementById("carousel-example-div");
    var imgElement = element.children;

    for (var i = 0; i < imgElement.length; i++) {
        imgElement[i].removeAttribute("hidden");
    }
}

var slideIndex = 0;
function carouselTimer() {
    var element = document.getElementById("carousel-example-div");
    var imgElement = element.children;
    for (var i = 0; i < imgElement.length; i++) {
        imgElement[i].setAttribute("hidden", "hidden");
    }
    slideIndex++;
    if(slideIndex > imgElement.length) { slideIndex = 1; }
    imgElement[slideIndex-1].removeAttribute("hidden");
    setTimeout(carouselTimer, 2000);
}