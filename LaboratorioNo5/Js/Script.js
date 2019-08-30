function myFunction() {
    document.getElementById("demo").innerHTML = "PAGINA WEB";
    document.getElementById("demo2").innerHTML = 5 + 6;
  }

  function alerta() 
{
var mensaje;
var opcion = prompt("Introduzca su nombre:", "José Gonzalez");
 
if (opcion == null || opcion == "") {
        mensaje = "Has cancelado o introducido el nombre vacío";
        } else {
            mensaje = "Hola " + opcion;
            }
            document.getElementById("ejemplo").innerHTML = mensaje;
}
window.alert("BIENVENIDO");

var x = myFunction2(4, 3);
document.getElementById("demo5").innerHTML = x;

function myFunction2(a, b) {
  return a * b;
}


var carName1 = "Volvo XC60"; // Double quotes
var carName2 = 'Volvo XC60'; // Single quotes

document.getElementById("demo6").innerHTML =
carName1 + " " + carName2; 

var x = 10;
document.getElementById("demo7").innerHTML = x;

function myFunctionboolean() {
  var x = "";
  document.getElementById("demo8").innerHTML = Boolean(x);
}

function ConfirmDemo() {
  //Ingresamos un mensaje a mostrar
  var mensaje = confirm("¿Te gusta Desarrollo Geek?");
  //Detectamos si el usuario acepto el mensaje
  if (mensaje) {
  alert("¡Gracias por aceptar!");
  }
  //Detectamos si el usuario denegó el mensaje
  else {
  alert("¡Haz denegado el mensaje!");
  }
  }
  
  function fsuma(){
 n1=document.f1.num1.value;
 n2=document.f1.num2.value;
res=document.f1.resul.value;
res=parseInt(n1)+parseInt(n2);
document.f1.resul.value=res;
 
}