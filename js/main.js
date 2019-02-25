var panel_0 = document.getElementById("panel_0");
var panel_0__img_1 = document.getElementById("panel_0__img_1");
var panel_0__img_2 = document.getElementById("panel_0__img_2");
var panel_0__img_3 = document.getElementById("panel_0__img_3");


var panel_left = document.getElementById("panel_left");
var panel_left__text = document.getElementById("panel_left__text");
var panel_left__img_1 = document.getElementById("panel_left__img_1");
var panel_left__img_2 = document.getElementById("panel_left__img_2");
var panel_left__img_3 = document.getElementById("panel_left__img_3");

var panel_right = document.getElementById("panel_right");
var panel_right__text = document.getElementById("panel_right__text");
var panel_right__img_1 = document.getElementById("panel_right__img_1");
var panel_right__img_2 = document.getElementById("panel_right__img_2");
var panel_right__img_3 = document.getElementById("panel_right__img_3");

var panel_right__chosen = false;


hideAll();
panel_0.classList.remove("hide");
panel_0__img_1.classList.remove("hide");


function hideAll() {
    panel_0__img_1.classList.add("hide");
    panel_0__img_2.classList.add("hide");
    panel_0__img_3.classList.add("hide");

    panel_left__img_1.classList.add("hide");
    panel_left__img_2.classList.add("hide");

    panel_right__img_1.classList.add("hide");
    panel_right__img_2.classList.add("hide");

    panel_0.classList.add("hide");
    panel_left.classList.add("hide");
    panel_right.classList.add("hide");
}

//Scene 1
panel_0__img_1.addEventListener("click", function () {
    hideAll();
    panel_left.classList.remove("hide");
    panel_right.classList.remove("hide");
    panel_left__img_1.classList.remove("hide");
    panel_right__img_1.classList.remove("hide");
});


//Scene 2
panel_left__img_1.addEventListener("click", function () {

});




//Scene 3
panel_left__img_2.addEventListener("click", function () {

});
