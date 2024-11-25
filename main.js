// alert("Milagros Camila Churata Ordoñez");
//variable
let nombre = "Milagros Camila Churata Ordoñez"
//constante
const Siglas_Senati = "SENATI";
//imprimir
console.log(Siglas_Senati);
console.log(nombre);
//Arrays
let edades = [23,4,25,26,87,28,9,30,31];

// for(let i=0; i < edades.length; i++) {
//     console.log(edades[i]);
// }
// for (item of edades) {
//     console.log(item);
// }
// edades.forEach(function(edad){
//     console.log(edad);
// });
edades.map(function(e){
    console.log(e);
    if (e >= 18){
        console.log(e + " es mayor de edad");
    }
    else {
        console.log(e + " es menor de edad");
    }
});

//EVENTOS EN JS
let botonHtlm = document.getElementById("prueba");
botonHtlm.addEventListener("click", function(ev){
    console.log("Alguien hizo click");
});
botonHtlm.addEventListener("mouseover", function(evd){
    console.log("Mouse encima del boton");
});
botonHtlm.addEventListener("mouseout", function(evf){
    console.log("Mouse fuera del boton");
});
//para mañana que el evennto que encontremos funcione
//solo 10 eventos que esten funcionales en js :)
