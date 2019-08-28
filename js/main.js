function clickTest() {
    var x = document.getElementById("hamburger-button");
    var y = document.getElementById("disquis");
    console.log(y);
    if(x.className === "hamburger"){
        x.className += " show";
        y.className += " show";
    } else {
        x.className = "hamburger";
        y.className = "disquis";
    }
}

function carouselTimer() {
    console.log("imgElement");
    setTimeout(function () {
        var element = document.getElementById("carousel-example-div");
        var imgElement = element.children();
        console.log(imgElement);
    }, 2000);
}