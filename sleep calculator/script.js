// выбор дисплея
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



var result__times = document.querySelectorAll(".result__time");
var result__timesH = document.querySelectorAll(".result__timeH");
var result__timesM= document.querySelectorAll(".result__timeM");


var select_temp1 = 0;
var select_temp2 = 0;

var arrH = [result__times.length];
var arrM = [result__times.length];

var select1 = document.querySelector("#s1");
var startSelect1 = document.querySelector("#start_select1");
var selectOptions1 = document.querySelectorAll(".select__option1");
select1.addEventListener("click", function() {
    //панель выбора значений
    var select1 = document.getElementById ('select1');
    var position  = ['inline','none'];
    if (select1.style.display != position[0]){
        select1.style.display = position[0];
    }
    else{
        select1.style.display = position[1];
    }

    //сохранение выбора в буфе
    for (let i=0; i<selectOptions1.length; i++) {
        selectOptions1[i].addEventListener("click", () => {
            startSelect1.innerText = selectOptions1[i].innerText;
            select_temp1 = selectOptions1[i].innerText;
            // console.log(select_temp1);


            select_temp1 = select_temp1 - 9;
            for (let j=0; j<result__times.length; j++) {
                if (select_temp1 < 0) {
                    select_temp1 = 24 - Math.abs(select_temp1);
                }

                if (select_temp1 >= 24) {
                    select_temp1 = select_temp1 - 24;
                }

                // window.result__timesH[j].innerHTML = select_temp1;
                arrH[j] = select_temp1;
                select_temp1 = select_temp1 + 1;

            }
            for (let t = 0; t < selectOptions2.length; t++) {
                result__timesM[t].innerHTML = arrM[t];
                result__timesH[t].innerHTML = arrH[t];
            }
        })
        console.log(arrH,arrM);
        // arrM = [];
        // arrH = [];
    }

});



var select2 = document.querySelector("#s2");
var startSelect2 = document.querySelector("#start_select2");
var selectOptions2 = document.querySelectorAll(".select__option2");
select2.addEventListener("click", function() {
    //панель выбора значений
    var select2 = document.getElementById ('select2');
    var position  = ['inline','none'];
    if (select2.style.display != position[0]){
        select2.style.display = position[0];
    }
    else{
        select2.style.display = position[1];
    }

    //сохранение выбора в буфе
    // var tmpArr = [0,0,0,0,0,0];
    for (let i=0; i<selectOptions2.length; i++) {
        selectOptions2[i].addEventListener("click", () => {
            startSelect2.innerText = selectOptions2[i].innerText;
            select_temp2 = Number(selectOptions2[i].innerText);

            // console.log(select_temp2);

            // select_temp1 = selectOptions1[0].innerHTML;
            // window.select_temp2 = select_temp2 + 30;

            for (let j=0; j<result__times.length; j++) {
                if (select_temp2 >= 60) {
                    // select_temp1 = select_temp1 + 1;
                    // console.log(window.result__timesH[j].innerHTML);
                    // console.log(window.result__timesH[j].innerHTML);
                    select_temp2 = select_temp2 - 60;
                    // window.result__timesH[j].innerHTML++;
                    arrH[j]++;
                    // console.log(j);
                    for (let k = j; k < result__times.length-1; k++) {
                        arrH[k+1] = arrH[k+1] + 1;
                    }

                    if (select_temp1 < 0) {
                        select_temp1 = 24 - Math.abs(select_temp1);
                    }

                    if (select_temp1 >= 24) {
                        select_temp1 = select_temp1 - 24;
                    }

                    // window.result__timesH[j+1].innerHTML++;
                    // window.result__timesH[j+2].innerHTML++;
                    // window.result__timesH[j+3].innerHTML++;
                    // window.result__timesH[j+4].innerHTML++;
                }
                // result__timesM[j].innerHTML = select_temp2;
                arrM[j] = select_temp2;
                select_temp2 += 30;



                // console.log(result__timesM[j]);
            }

            for (let t = 0; t < selectOptions2.length; t++) {
                result__timesM[t].innerHTML = arrM[t];
                result__timesH[t].innerHTML = arrH[t];
            }
        })
        console.log(arrH,arrM);
    }
    // console.log(arrH, arrM);

    //перенос из массивов в блоки
    // for (i = 0; i < result__times.length; i++) {
    //
    //     result__timesH[i].innerHTML = arrH[i];
    //     result__timesM[i].innerHTML = arrM[i];
    // }

});

