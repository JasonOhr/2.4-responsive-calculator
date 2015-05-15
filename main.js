var answer=0;
var numberAsText = "";
var accumulated_number=[];
var decimal = false;


function pushNumberToArray(number){
    accumulated_number.push(number);
}
function alertButton(event){
    var button = event.target;

    var calc_input = button.textContent;//
    var button_type = button.className;

    var display = document.getElementById('answer');
    if(calc_input === "ac"){
        answer = 0;
        numberAsText = "";
        accumulated_number = [];
        display.textContent = "0";
        decimal=false;

    }
    else if(accumulated_number.length == 0 && button_type != "number" ){

        display.textContent = "0";
        return;
    }else if (Number(calc_input) || calc_input === "."){

        if (calc_input === "." && !decimal){
            console.log("Decimal clicked");
            numberAsText += calc_input;
            display.textContent = numberAsText.toString();
            decimal = true;
            return;
        }else if(Number(calc_input)){
            numberAsText += calc_input;
            display.textContent = numberAsText.toString();
            return;
        }




    }else if(calc_input === "ac"){
        answer = 0;
        numberAsText = "";
        accumulated_number = [];
        console.log(numberAsText);
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