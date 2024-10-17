//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo number.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log("Hola soy tu consola y juntas vamos a aprender Javascript");

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida al bootcamp de FemCoders de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log("Bienvenida al bootcamp de FemCoders de Factoría F5");

//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

let string = "Monica";
let number = 51;
let autorizado = true;
let noautorizado = null;
let autorizacionindefinida = undefined;
let objeto = {
  string: "Monica",
  apellido: "Simo",
};
let array = ["Monica", "Simo"];

//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola.

//Escribe tu código aquí

postres = ["helado", "tarta", "pastel"];
console.log(postres);

//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí

let coder = {
  nombre: "Monica",
  edad: 51,
};
console.log(coder);
console.log("Soy " + coder.nombre + " y tengo " + coder.edad + " años");

//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.

//Escribe tu código aquí

console.log(typeof string);
console.log(typeof number);
console.log(typeof autorizado);
console.log(typeof noautorizado);
console.log(typeof autorizacionindefinida);
console.log(typeof objeto);
console.log(typeof array);

//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let x = 3;
let y = 2;
let resultadosuma = x + y;

console.log(resultadosuma);

//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let resultadoresta = x - y;

console.log(resultadoresta);

//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let resultadomulti = x * y;

console.log(resultadomulti);

//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let resultadodiv = x / y;

console.log(resultadodiv);

//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

let primera = 1;
let segunda = 2;
let compara = primera > segunda;

console.log(compara);

// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

let compara2 = primera < segunda;

console.log(compara2);

//Ejercicio 11: completa el ejercicio

let num1 = 15;
let num2 = 20;

let comparision = num1 < num2; //Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log(comparision);

//Ejercicio 12: completa el ejercicio

let num3 = 1;
let num3AsString = "1";

let result = typeof num3 == typeof num3AsString; //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result);

//Ejercicio 13: completa el ejercicio

let result2 = num3 == num3AsString; //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log(result2);

//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí

let minombre = "Monica";
let miapellido = "Simo";
let minombrecompleto = minombre + " " + miapellido;

console.log(minombrecompleto);

//OPERADORES DE LÓGICA
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

let res = a < 10 && b > 1; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res);

let res2 = a < 10 && b < 1; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2);

let res3 = a == 5 && b == 5; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3);

let res4 = a == 6 || b == 0; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4);

let res5 = a == 0 || b == 3; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5);

let res6 = a == 6 && b == 3; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6);

//Ejercicio 16 Crear lista de usuarios con id, nombre y email. Crear función añadir usuarionuevo y una función eliminar usuario por id.

let userList = [
  {
    id: 1,
    name: "Layla",
    email: "layla@gmail.com",
  },
  {
    id: 2,
    name: "Nacho",
    email: "nacho@gmail.com",
  },
  {
    id: 3,
    name: "Mònica",
    email: "monica@gmail.com",
  },
  {
    id: 4,
    name: "Elena",
    email: "elena@gmail.com",
  },
];

function agregarUsuario(id, name, email) {
  const newUser = {
    id: id,
    name: name,
    email: email,
  };
  userList.push(newUser);
  console.log(userList);
}
agregarUsuario(5, "Pepe", "pepe@gamil.com");

function clearUser(id) {
  let filterList = [];
  for (let user of userList) {
    if (user.id != id) {
      filterList.push(user);
    }
  }
  userList = filterList;
  console.log(userList);
}
clearUser(4);

// Función para actualizar el email, la función debe recibir el id del usuario y el nuevo email updateEmail(id, email)

function updateEmail(id, email) {
  const upList = [];
  for (let user of userList) {
    if (user.id != id) {
      upList.push(user);
    } else {
      user.email = email;
      upList.push(user);
    }
  }
  userList = upList;
  console.log(userList);
}

updateEmail(2, "juan.ignacio@gmail.com");

// Ejercicio 17  Números impares: Crear un programa que muestre en consola los números impares entre el 0 y el 20.

for (let num = 0; num < 20; num= num+2) {
  console.log(num);
}

// Ejercicio 18: Crear un programa que al ingresar el nombre de una nueva canción añada esta a la lista y muestra la lista en consola. 

let playList = [
  { id: 1, son: "The final count down" },
  { id: 2, son: "Yesterday" },
  { id: 3, son: "November rain" },
];

function printList (id, son) {
  const newPlayList = {
    id: id,
    son: son,
  };
  playList.push(newPlayList);
  console.log(playList);
  }

printList(4, "It's raining men");

// Ejercicio 19 Bucle For...of: Crea un array de nombres y utiliza un bucle for...of para imprimir cada nombre en la consola.

let nameList = ["Mònica","Vicente","Alejandro", "Amparo", "Pilar", "Daniela", "Belén", "Verónica","Maria"]

for (const element of nameList) {
  console.log(element);  
}

// Ejercicio 20 Funciones: Crea una función llamada saludar que acepte un nombre como parámetro y retorne un mensaje de saludo.

function saludar(nombre){
  console.log("Hola " + nombre)
}

saludar("Mònica");

// Ejercicio 21 Parámetros y Argumentos: Crea una función llamada calcularAreaRectangulo que acepte dos parámetros: base y altura. 
// La función debe calcular y retornar el área del rectángulo.

function calcularAreaRectangulo (base,altura){
  areaRectangulo = base * altura;
  console.log("El área de un rectángulo de base " + base + " y altura " + altura + " es igual a " + areaRectangulo + ".");
}

calcularAreaRectangulo(4, 2);


