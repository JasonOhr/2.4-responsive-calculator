var answer=0;
var numberAsText = "";
var accumulated_number=[];
var decimal = false;
var operator = false;
var operator_used = "";
var specialButtonUsed = "";
var equal_pressed = false;

function operatorPressed(){
    var num = 0;
    switch(operator_used){
        case "+":
            num = Number( accumulated_number.pop() ) + Number(numberAsText);
            accumulated_number.push(num);
            break;
        case "-":
            num = Number( accumulated_number.pop() ) - Number(numberAsText);
            accumulated_number.push(num);
            break;
        case "x":
            num = Number( accumulated_number.pop() ) * Number(numberAsText);
            accumulated_number.push(num);
            break;
        case "/":
            num = Number( accumulated_number.pop() ) / Number(numberAsText);
            accumulated_number.push(num);
            break;
    }
}
function specialButtonPressed(display){
    var num = 0;
    switch (specialButtonUsed){
        case "+/-":
            if(numberAsText.length > 0){
                num = Number(numberAsText)* -1;
                numberAsText = num.toString();
                display.textContent = numberAsText;
                console.log(numberAsText);

            }else if (equal_pressed){
                accumulated_number[0] *= -1;
                console.log(accumulated_number[0]);
                display.textContent = accumulated_number[0];
            }
            break;
        case "%":
            if(accumulated_number.length == 0){
                return;
            }
            else {
                switch (operator_used){
                    case "+":
                        num =  Number(accumulated_number.pop());
                        num = num + (num * Number(numberAsText) / 100 );
                        accumulated_number.push(num);
                        numberAsText = "";
                        display.textContent = num.toString();
                        break;
                    case "-":
                        num =  Number(accumulated_number.pop());
                        num = num - (num * Number(numberAsText) / 100 );
                        accumulated_number.push(num);
                        numberAsText = "";
                        display.textContent = num.toString();
                        break;
                    case "x":
                        num =  Number(accumulated_number.pop());
                        num = num * (Number(numberAsText) / 100 );
                        accumulated_number.push(num);
                        numberAsText = "";
                        display.textContent = num.toString();
                        break;
                    case "/":
                        num =  Number(accumulated_number.pop());
                        num = num / (Number(numberAsText) / 100 );
                        accumulated_number.push(num);
                        numberAsText = "";
                        display.textContent = num.toString();
                        break;
                }
            }
    }
}

function equalPressed(display){
    operatorPressed();
    display.textContent = accumulated_number[0];
    numberAsText= "";
    equal_pressed = true;
    operator = false;
}
function pushNumberToArray(number){
    accumulated_number.push(number);
}

function alertButton(event){
    var button = event.target;

    var calc_input = button.textContent;//
    var button_type = button.className;
    var display = document.getElementById('answer');
    console.log(button_type);
    switch (button_type){

        case 'number zero':
            if (numberAsText=="0") numberAsText = 0;
        case 'number':
            if(equal_pressed && !operator){
                accumulated_number = [];
                equal_pressed = false;
                numberAsText += calc_input;
                display.textContent = numberAsText.toString();
            }else {
                console.log("operator ",operator);
                numberAsText += calc_input;
                display.textContent = numberAsText.toString();
            }


            break;
        case 'operator':
            if(equal_pressed) {
                equal_pressed = false;
                numberAsText = accumulated_number.pop();
            }
            if(numberAsText.length == 0) {
                display.textContent = "0";
            }else if(operator && accumulated_number.length > 0){

                operatorPressed();
                numberAsText = "";
                operator_used = button.textContent;
            }else{
                pushNumberToArray(numberAsText);
                numberAsText = "";
                operator_used = button.textContent;
                display.textContent = button.textContent;
                operator=true;
                decimal=false;
            }
            break;
        case 'special':
            specialButtonUsed = calc_input;
            specialButtonPressed(display);
            break;
        case 'equal':
            equalPressed(display) ;
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
            equal_pressed = false;
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
[].forEach.call(document.querySelectorAll('.equal'),
    function(element) {
        element.addEventListener('click',alertButton);
    },false);