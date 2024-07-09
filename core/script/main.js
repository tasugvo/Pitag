// Definição de variáveis por tecla
const b0 = document.getElementById("btn-18");
const b1 = document.getElementById("btn-13");
const b2 = document.getElementById("btn-14");
const b3 = document.getElementById("btn-15");
const b4 = document.getElementById("btn-9");
const b5 = document.getElementById("btn-10");
const b6 = document.getElementById("btn-11");
const b7 = document.getElementById("btn-5");
const b8 = document.getElementById("btn-6");
const b9 = document.getElementById("btn-7");

// Variáveis de operação
const plus = document.getElementById("btn-16");
const minus = document.getElementById("btn-12");
const product = document.getElementById("btn-8");
const div = document.getElementById("btn-4");
const negative = document.getElementById("btn-2");

// // definicao de variaveis por tecla
// const b0 = document.querySelector("#tecladoS li:nth-child(18) > button");
// const b1 = document.querySelector("#tecladoS li:nth-child(13) > button");
// const b2 = document.querySelector("#tecladoS li:nth-child(14) > button");
// const b3 = document.querySelector("#tecladoS li:nth-child(15) > button");
// const b4 = document.querySelector("#tecladoS li:nth-child(9) > button");
// const b5 = document.querySelector("#tecladoS li:nth-child(10) > button");
// const b6 = document.querySelector("#tecladoS li:nth-child(11) > button");
// const b7 = document.querySelector("#tecladoS li:nth-child(5) > button");
// const b8 = document.querySelector("#tecladoS li:nth-child(6) > button");
// const b9 = document.querySelector("#tecladoS li:nth-child(7) > button");

// // variaveis de operacao
// const plus = document.querySelector("#tecladoS li:nth-child(16) > button");
// const minus = document.querySelector("#tecladoS li:nth-child(12) > button");
// const product = document.querySelector("#tecladoS li:nth-child(8) > button");
// const div = document.querySelector("#tecladoS li:nth-child(4) > button");
// const negative = document.querySelector("#tecladoS li:nth-child(2) > button");

// const b0 = document.querySelector("#tecladoS > button:nth-child(18)");
// const b1 = document.querySelector("#tecladoS > button:nth-child(13)");
// const b2 = document.querySelector("#tecladoS > button:nth-child(14)");
// const b3 = document.querySelector("#tecladoS > button:nth-child(15)");
// const b4 = document.querySelector("#tecladoS > button:nth-child(9)");
// const b5 = document.querySelector("#tecladoS > button:nth-child(10)");
// const b6 = document.querySelector("#tecladoS > button:nth-child(11)");
// const b7 = document.querySelector("#tecladoS > button:nth-child(5)");
// const b8 = document.querySelector("#tecladoS > button:nth-child(6)");
// const b9 = document.querySelector("#tecladoS > button:nth-child(7)");

// // Definição de variáveis de operação
// const plus = document.querySelector("#tecladoS > button:nth-child(16)");
// const minus = document.querySelector("#tecladoS > button:nth-child(12)");
// const product = document.querySelector("#tecladoS > button:nth-child(8)");
// const div = document.querySelector("#tecladoS > button:nth-child(4)");
// const negative = document.querySelector("#tecladoS > button:nth-child(2)");

// teste
console.log(b0, b1, b2, b3, b4, b5, b6, b7, b8, b9);
console.log(plus, minus, product, div, negative);

// itaradores
let number = 0;
let number2 =0;
let operating = false;
let showed_result = false;

// etc
const screen = document.querySelector("#screen h1");
const op_screen = document.querySelector("#screen h4:nth-child(1)");
const num_screen = document.querySelector("#screen > section h4:nth-child(2)");

function show_value(button) {

    const screen = document.querySelector("#screen h1");
    if (screen) {
        // Acessa o innerHTML apenas se screen não for null ou undefined
        screen.innerHTML = button.innerHTML;
    } else {
        console.error("Elemento #screen h1 não encontrado");
    }


    if (screen.innerHTML.length < 10) {
        
        if (!isNaN(parseInt(button.innerHTML))) {
            
            if (screen.innerHTML === "0" || operating || showed_result) {
                screen.innerHTML = button.innerHTML;
            } else {
                screen.innerHTML += button.innerHTML;
            }
            
        } else if (button.innerHTML == '.' && !screen.innerHTML.includes('.') || showed_result) {
            if(showed_result){
                screen.innerText = "0";
            }
            screen.innerHTML += button.innerHTML;
        }
        operating = false;
        showed_result = false;
        console.log({ number, number2, operating, screen, op_screen });
    } else if(operating){
        screen.innerText = button.innerText;
    }
}

function delete_all() {
    screen.innerText = "0";
    op_screen.innerText = "";
    operating = false;
    showed_result = false;
    number = 0;
    number2 = 0;
    console.log({ number, number2, operating, screen, op_screen });
}

//Metodo que realiza la operacion y muestra el resultado
function operation(button) {
    if (number === 0 || showed_result) {
        number = fix_number_length(parseFloat(screen.innerText));
        op_screen.innerText = button.innerHTML;
    } else if (!showed_result) {
        if (number2 !== 0) {
            number = fix_number_length(parseFloat(screen.innerText));
        } else {
            number2 = fix_number_length(parseFloat(screen.innerText));
        }
        //Seleccion de metodo a utilizar
        op_selection(number, number2);
        op_screen.innerText = button.innerText;
        number = parseFloat(screen.innerText);
        number2 = 0;
        showed_result = true;
    }
    operating = true;
    console.log({ number, number2, operating, screen, op_screen });
}

function plus_minus(){
    if(screen.innerText !== "0"){
        screen.innerText = fix_number_length(parseFloat(screen.innerText) * -1);
        showed_result = true;
    }
}

function clean_screen(){
    screen.innerText = "0";
}

//Metodo que realiza la suma
function add(a, b) {
    return a + b;
}

//Metodo que realiza la resta
function subtract(a, b) {
    return a - b;
}

//Metodo que realiza la multiplicacion
function multiply(a, b) {
    return a * b;
}

//Metodo que realiza la division
function divide(a, b) {
    return a / b;
}

function percent() {
    if (op_screen.innerText !== "" && !showed_result) {
        number2 = number * fix_number_length(parseFloat(screen.innerText)) / 100;
        op_selection(number, number2);
        number = parseFloat(screen.innerText);
        number2 = 0;
        showed_result = true;
        operating = true;
        console.log({ number, number2, operating, screen, op_screen });
    }
}

function result() {
    if (op_screen.innerText !== "") {
        number2 = fix_number_length(parseFloat(screen.innerText));
        //Seleccion de operacion
        op_selection(number, number2);
        showed_result = true;
        op_screen.innerText = "";
        number = 0;
        number2 = 0;
    }
    console.log({ number, number2, operating, screen, op_screen });
}

function op_selection(a, b) {
    switch (op_screen.innerText) {
        case "+": //suma
            screen.innerText = fix_number_length(add(a, b));
            break;
        case "-": //resta
            screen.innerText = fix_number_length(subtract(a, b));
            break;
        case "x": //multiplicacion
            screen.innerText = fix_number_length(multiply(a, b));
            break;
        case "÷": //division
            screen.innerText = fix_number_length(divide(a, b));
            break;
        default:
            screen.innerText = "Syntax Error";
    }
}

//Metodo que revisa la longitud del numero a mostrar en pantalla
function fix_number_length(element, width = 11){
    //Longitud del numero a mostrar
    let number_length = String(element).length;

    //Comparar si la longitud del numero es mayor al espacio disponible
    //y si el numero contiene decimales
    if(number_length > width && String(element).includes('.')){
        let number_parts = String(element).split('.');
        let int_length = number_parts[0].length;

        //Si la longitud del numero entero es menor al espacio disponible
        if(int_length < width) {
            //restar al espacio disponible la longitud del entero
            //-1 que es el espacio que ocupa el punto decimal(.)
            width = width - int_length - 1;
            return element.toFixed(width);
        } else {
            return "Out of range!";
        }
    } else {
        return element;
    }
}