//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida al bootcamp de FemCoders de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log("Bienvenida al bootcamp de FemCoders de Factoría F5");

//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

let string = "Monica"
let number = 51
let autorizado = true
let noautorizado = null
let autorizacionindefinida = undefined
let objeto = {
    string : "Monica",
    apellido : "Simo"
}
let array = ["Monica","Simo"]

//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí

postres = ["helado", "tarta", "pastel"]
console.log(postres)

//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí

let coder = {
    nombre : "Monica",
    edad : 51
}
console.log(coder)
console.log("Soy " + coder.nombre + " y tengo " + coder.edad + " años")

//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.

//Escribe tu código aquí

console.log(typeof string)
console.log(typeof number)
console.log(typeof autorizado)
console.log(typeof noautorizado)
console.log(typeof autorizacionindefinida)
console.log(typeof objeto)
console.log(typeof array)

//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let x = 3
let y = 2
let resultadosuma = x + y

console.log(resultadosuma)

//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let resultadoresta = x - y

console.log(resultadoresta)


//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let resultadomulti = x * y

console.log(resultadomulti)

//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let resultadodiv = x / y

console.log(resultadodiv)


//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

let primera = 1
let segunda = 2
let compara = primera<segunda

console.log(compara)

// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí




//Ejercicio 11: completa el ejercicio

let num1 = 15
let num2 = 20

let comparision = //Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log(comparision)

//Ejercicio 12: completa el ejercicio

let num3 = 1
let num3AsString = "1"

let result = //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result) 

//Ejercicio 13: completa el ejercicio

let result2 = //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log(result2)



//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí





//OPERADORES DE LÓGICA
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

/* let a = 6;
let b = 3;

let res =  a < 10 __ b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res)

let res2 = a < 10 __ b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

let res3 = a == 5 __ b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = a == 6 __ b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let res5 = a == 0 __ b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res6 = a == 6 __ b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6) */
