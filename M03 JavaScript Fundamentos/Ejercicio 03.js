/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
if (x === y) {
   return true;
} else {
   return false;
}
return x === y 
}
var resultado = sonIguales(10,"10")
console.log(resultado)

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
console.log(str1.length)
console.log(str2.length)
return str1.length === str2.length
}

var resultado = tienenMismaLongitud("hola" , "adios")
console.log(resultado)

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if (num < 90) return true
   else return false
}

var resultado = menosQueNoventa(80)
console.log (resultado) 


function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if (num > 50) return true
   else return false
}

var resultado = mayorQueCincuenta(60)
console.log(resultado)

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   var residuo = num % 2
   if (residuo ===0) return true
   else return false
}

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   var resultado = esPar (num)
   if (resultado === false) return true
   else return false
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
