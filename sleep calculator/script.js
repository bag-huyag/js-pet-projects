var bottom_back1 = document.querySelector(".result__restart1");
bottom_back1.addEventListener("click", function() {
    document.getElementById("1").style.display = "inline";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
});

var bottom_calculator__wrap = document.querySelector(".calculator__btn");
bottom_calculator__wrap.addEventListener("click", function() {
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "inline";
    document.getElementById("3").style.display = "none";
});

var bottom_calculator__wrap3 = document.querySelector(".calculator__btnZzz");
bottom_calculator__wrap3.addEventListener("click", function() {
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "inline";
});

var bottom_back2 = document.querySelector(".result__restart2");
bottom_back2.addEventListener("click", function() {
    document.getElementById("1").style.display = "inline";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
});