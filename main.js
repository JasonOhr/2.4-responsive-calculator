var answer=0;
var numberAsText = "";
var accumulated_number=[];
var decimal = false;
var operator = false;
var operator_used = "";

function operatorPressed(){
    switch(operator_used){
        case "+":
            var num = accumulated_number.pop() + numberAsText;
            console.log(num,accumulated_number);
            accumulated_number.push(num);


    }
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
            console.log("operator ",operator);
            if (operator && accumulated_number.length > 0){
                pushNumberToArray(numberAsText);
                operatorPressed();
                numberAsText="";


            }else if (operator){
                pushNumberToArray(numberAsText);
                numberAsText = "";

            }

            numberAsText += calc_input;
            display.textContent = numberAsText.toString();

            break;
        case 'operator':
            if(numberAsText.length == 0) {
                display.textContent = "0";
            //}else if(operator && accumulated_number.length > 0){
            //    //operatorPressed();
            //    operator_used = button.textContent;
            }else{
                operator=false;
                operator_used = button.textContent;
                display.textContent = button.textContent;
                operator=true;
            }
            break;
        case 'special': ;
            break;
        case 'equal': ;
            break;
        case 'decimal':
            if (!decimal) {
                numberAsText += calc_input;
                display.textContent = numberAsText.toString();
                decimal = true;
            }
            break;
        case 'clear-btn':
            answer = 0;
            numberAsText = "";
            accumulated_number = [];
            display.textContent = "0";
            decimal=false;
            break;
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
[].forEach.call(document.querySelectorAll('.decimal'),
    function(element) {
        element.addEventListener('click',alertButton);
    },false);