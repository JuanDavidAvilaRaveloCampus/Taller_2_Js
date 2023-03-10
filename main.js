// 2. Dado un número indicar: 
// si es par o impar y si es mayor de 10.

let no_Number = prompt("Ingrese un número: ");
let number = parseInt(no_Number);
let resto = number % 2; 
if ( resto == 0  && number > 10){
    alert("Su numero es par y es mayor a 10")
} else if ( resto == 0  && number == 10){
    alert("Su numero es par y es 10")
} else if ( resto != 0  && number >= 10){
    alert("Su numero no es par, pero es mayor a 10")
} else if ( resto == 0  && number <= 9){
    alert("Su numero es par y es menor a 10")
} else if ( resto != 0  && number <= 9){
    alert("Su numero es impar y es menor a 10")
};
