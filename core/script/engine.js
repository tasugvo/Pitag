// simple-buttons - numeros
// simple-buttons2 - Operadores Superiores
// simple-buttons3 - Operadores Laterais

document.addEventListener('DOMContentLoaded', () => {
    const screen = document.querySelector('.screen h1');
    const buttons = document.querySelectorAll('button');

    let itr = 0; //armazenar o valor
    let operator = ''; //armazenar operador

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;//🔍

            if (buttonText === 'AC') {
                screen.textContent = '0';
                itr = 0; // resetar a variável itr
                operator = ''; // resetar o operador
            } else if (buttonText === '=') {

                if (operator) {
                    const result = eval(`${itr}${operator}${screen.textContent}`);
                    screen.textContent = result;
                    itr = 0; // resetar a variável itr após a operação
                    operator = ''; // resetar o operador após a operação
                }
            } else if (['+', '-', 'x', '÷'].includes(buttonText)) {

                itr = parseFloat(screen.textContent);
                operator = buttonText.replace('x', '*').replace('÷', '/');
                screen.textContent = '0';
            } else {

                if (screen.textContent === '0') {
                    screen.textContent = buttonText;
                } else {
                    screen.textContent += buttonText;
                }
            } 
        });
    });
});

//verboso demais 
//verificar condião de AC
//adicionar +/- e icone de calc la embaixo