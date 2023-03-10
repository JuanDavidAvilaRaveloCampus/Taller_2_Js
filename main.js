// 5. Construir el algoritmo que 
// lea por teclado 
// dos números,
// si el primero es mayor al segundo 
// informar su suma y diferencia, 
// en caso contrario, informar el producto y la
// división del primero respecto al segundo.

let num1 = parseInt(prompt('Ingrese el primer número'));
let num2 = parseInt(prompt('Ingrese el segundo número'));

if ( num1 > num2 ){
    console.log(`El primer número ingresado es mayor al segundo, la suma de ambos es igual a ${num1 + num2} y su diferencia es de ${num1 - num2}`)
} else if ( num1 < num2) {
    console.log(`El primer número ingresado es menor al segundo, el producto de ambos es de ${num1 * num2} y su divición es de ${num1 / num2}`)
}

