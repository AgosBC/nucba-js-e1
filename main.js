function isEven(num) {
    if(isNaN(num)) {
        console.log("error ingrese unicamente numeros");
        return;
    }
    num % 2 === 0 ? console.log("Es par") : console.log("Es impar");
}

function getMaxValue(num1, num2) {
    if (num1 === num2){
        console.log(`Los numeros son iguales`);
        return ("Los numeros son iguales");
    }
    if(num1 < num2) {
        console.log(`${num2} es mayor`)
        return (`${num2} es mayor`);
    } 
    if (num2 < num1) {
        console.log(`${num1} es mayor`);
        return(`${num1} es mayor`);
    }
}

function isAMultipleOfFive(num) {
    num % 5 === 0 ? console.log("Es multiplo de 5") : console.log("No es multiplo de 5");
}

function count(num) {
    for (let i = 0; i < num; i++) {
        console.log(i+1);
    }
}

function repeatWord(word, num) {
    if(!isNaN(word)) {
        console.log("Primero escribe la palabra entre '' y luego el numero de veces que quieras que se repita");
    }

    for (let i = 0; i < num; i++) {
        console.log(word);
    }
}

function printArray(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

function skipFifthPosition(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(i != 4) {
            console.log(arr[i]);
        }     
    }
}

function multiply(arr, num) {
    arr.forEach(element => {
        console.log("resultado = " + element * num)
    });
}


