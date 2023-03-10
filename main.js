// nombre y 
// 4. Construir el algoritmo que solicite el 
// edad 
// de 3 personas y determine el 
// nombre de la persona con mayor edad.
let nombre = [];
let edad = [];
do{
    nombre.push(prompt('ingrese nombre'));
    edad.push(parseInt(prompt('ingrese edad')));
}while(confirm('confirme para ingresar nuevos datos'));

let edadMax = edad.indexOf(Math.max(...edad));
console.log(`${nombre[edadMax]} tiene ${Math.max(...edad)} es el mayor`)



// console.log(Math.max(lista))




// numero mayor de edad
// indice de la mayor edad
// imprimir






// lista.edad = prompt('ingrese edad')