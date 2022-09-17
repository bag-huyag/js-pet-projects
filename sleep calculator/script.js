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


// class="select"

var select1 = document.querySelector("#s1");
var startSelect1 = document.querySelector("#start_select1");
var selectOptions1 = document.querySelectorAll(".select__option1");
select1.addEventListener("click", function() {
    // document.getElementById("select").style.display = "inline";
    // document.getElementById("2").style.display = "none";


    var select1 = document.getElementById ('select1');
    var position  = ['inline','none'];
    if (select1.style.display != position[0]){
        select1.style.display = position[0];
    }
    else{
        select1.style.display = position[1];
    }

    for (let i=0; i<selectOptions1.length; i++) {
        selectOptions1[i].addEventListener("click", () => {
            startSelect1.innerText = selectOptions1[i].innerText;
            console.log("CLICKED1");
        })
    }


    return 0;
});






var select2 = document.querySelector("#s2");
var startSelect2 = document.querySelector("#start_select2");
var selectOptions2 = document.querySelectorAll(".select__option2");
select2.addEventListener("click", function() {
    // document.getElementById("select").style.display = "inline";
    // document.getElementById("2").style.display = "none";

    // console.log(123)

    var select2 = document.getElementById ('select2');
    var position  = ['inline','none'];
    if (select2.style.display != position[0]){
        select2.style.display = position[0];
    }
    else{
        select2.style.display = position[1];
    }


    for (let i=0; i<selectOptions2.length; i++) {
        selectOptions2[i].addEventListener("click", () => {
            startSelect2.innerText = selectOptions2[i].innerText;
            console.log("CLICKED2");
        })
    }

    return 0;
});




// var selecselect__option = document.querySelector(".select__option");
// select__option.addEventListener("click", function() {
// // var div1 = document.getElementById('div1'),
// //     div1html = div1.innerHTML;
//     console.log(10);
//
// }