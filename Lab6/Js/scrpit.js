
var i = 0;
var p;


function genera_tabla() {
    var aleatorio = Math.floor((999 - 4) * Math.random()) + 1;

    //Ordenamiento
    const bubbleSort = arr => {
        const l = arr.length;
        for (let i = 0; i < l; i++) {
            for (let j = 0; j < l - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }

        return arr;
    };


    const arr = [aleatorio, 25, 40, 32, 67, 12, 43, 31, 65, 2];
    const result = bubbleSort(arr);
    console.log(result);

    var minimo = Math.min.apply(null, arr); // minimo 
    var maximo = Math.max.apply(null, arr); // maximo

    console.log(minimo); //se muetsra en consola
    console.log(maximo);

    var h1 = document.createElement("div");


    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var hilera = document.createElement("tr");
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode("Numero " + arr[i]);
    celda.setAttribute('width', "40" * i);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);
    tblBody.appendChild(hilera);
    i++;
    console.log(i);
    tabla.appendChild(tblBody);

    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "1";
    tabla.setAttribute("border", "1");
}

