// 1. Construir el algoritmo para un programa que: 
// ingrese tres notas de un alumno, 
// si el promedio es menor o igual a 3.9 mostrar un mensaje "Estudie“, 
// de lo contrario un mensaje que diga "becado"
alert("Por favor al ingresar las notas, tenga en cuenta en que el rango es de 0 a 5.0, no escriba 50 por que el sistema no tomará en cuenta su nota. Recuerde utilizar punto ('.') y no coma (',')")
let nota_1 = prompt("Ingrese la primera nota.")
nota_1 = parseInt(nota_1,10)
let nota_2 = prompt("Ingrese la segunda nota.")
nota_2 = parseInt(nota_2,10)
let nota_3 = prompt("Ingrese la tercera nota.")
nota_3 = parseInt(nota_3,10)
let promedio = (nota_1 + nota_2 + nota_3) / 3
promedio.toFixed(1)
if (promedio <= 3.9){
    alert("Su nota es: " + promedio + "\nEstudie webón >:^")
}
else{
    alert("Tu nota es: " + promedio + "\nFelicidades te has ganado una beca para ir a venezuela")
}