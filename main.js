var answer=0;
var numberAsText = "";
var accumulated_number=[];
var decimal = false;
var operator = false;

function operatorPressed(){

}
function equalPressed(){

}
function pushNumberToArray(number){
    accumulated_number.push(number);
}
function alertButton(event){
    var button = event.target;

    var calc_input = button.textContent;//
    var button_type = button.className;
    var display = document.getElementById('answer');
    switch (button_type){
        case 'number':

            break;
        case 'operator': console.log(button.textContent);
            break;
        case 'special': ;
            break;
        case 'equal': ;
            break;
        case 'clear-btn':
    }
    if(calc_input === "ac"){
        answer = 0;
        numberAsText = "";
        accumulated_number = [];
        display.textContent = "0";
        decimal=false;

    }
    else if(numberAsText.length == 0 && button_type != "number" ){

        display.textContent = "0";
        return;
    }else if (button.className == 'number'){


            if (calc_input === "." && !decimal){
                numberAsText += calc_input;
                display.textContent = numberAsText.toString();
                decimal = true;

            }else if(Number(calc_input)){
                numberAsText += calc_input;
                display.textContent = numberAsText.toString();

            }

    }else if(button.className == "operator"){

        pushNumberToArray(numberAsText);
        numberAsText = "";


    }



}


[].forEach.call(document.querySelectorAll('.number'),
    function(element) {
        element.addEventListener('click',alertButton);
    },false);

[].forEach.call(document.querySelectorAll('.operator'),
    function(element) {
        element.addEventListener('click',alertButton);
    },false);

[].forEach.call(document.querySelectorAll('.special'),
    function(element) {
        element.addEventListener('click',alertButton);
    },false);
[].forEach.call(document.querySelectorAll('.clear-btn'),
    function(element) {
        element.addEventListener('click',alertButton);
    },false);