var panel_0 = document.getElementById("panel_0");
var panel_0__img_1 = document.getElementById("panel_0__img_1");
var panel_0__img_2 = document.getElementById("panel_0__img_2");
var panel_0__img_3 = document.getElementById("panel_0__img_3");
var panel_0__text = document.getElementById("panel_0__text");


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

function showLeftRight() {
    panel_left.classList.remove("hide");
    panel_right.classList.remove("hide");
}

function ending() {
    if (panel_right__chosen == true) {
        panel_0__img_3.classList.remove("hide");
        panel_0__text.innerHTML = "Sometimes you bake a cake, and sometimes you end up in eternal suffering. But what you gonna do? lol";
    } else {
        panel_0__img_2.classList.remove("hide");
        panel_0__text.innerHTML = "Yay you baked a cake";
    }
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
    hideAll();
    showLeftRight();
    panel_left__img_2.classList.remove("hide");
    panel_right__img_2.classList.remove("hide");
    panel_left__text.innerHTML = "Salt, Vanilla Extract, and Butter";
    panel_right__text.innerHTML = "Salt, Blood, and Java";

});

panel_right__img_1.addEventListener("click", function () {
    panel_right__chosen = true;
    hideAll();
    showLeftRight();
    panel_left__img_2.classList.remove("hide");
    panel_right__img_2.classList.remove("hide");
    panel_left__text.innerHTML = "Salt, Vanilla Extract, and Butter";
    panel_right__text.innerHTML = "Salt, Blood, and Java";
});


//Scene 3
panel_left__img_2.addEventListener("click", function () {
    hideAll();

    panel_0.classList.remove("hide");
    ending();

});

panel_right__img_2.addEventListener("click", function () {
    panel_right__chosen = true;
    hideAll();

    panel_0.classList.remove("hide");
    ending();
});

//Restart
panel_0__img_2.addEventListener("click", function () {
    hideAll();
    panel_0.classList.remove("hide");
    panel_0__img_1.classList.remove("hide");
    resetText();
});

panel_0__img_3.addEventListener("click", function () {
    hideAll();
    panel_0.classList.remove("hide");
    panel_0__img_1.classList.remove("hide");
    resetText();
});

function resetText() {
    panel_0__text.innerHTML = "It's time to bake a cake! Click to advance!";
    panel_left__text.innerHTML = "Flour, Eggs, and Baking Powder";
    panel_right__text.innerHTML = "Flour, Candles, and a Pentagram";
}
