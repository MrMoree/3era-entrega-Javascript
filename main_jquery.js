
let total_ingresos = 0
let total_gastos = 0

leer();
leer2();


// ------------------------- CARGA INGRESOS Y GASTOS -------------------------


$("#holaIngresos").click(function () {

    let titulo = document.getElementById('tituloIngreso').value;
    let precio = document.getElementById('precioIngreso').value;

    let ingresoForm = {
        titulo,
        precio
    }

    if (localStorage.getItem('ingresos2') === null) {

        if (titulo != "" && precio > 0) {
            let ingresosDeForm = [];
            ingresosDeForm.push(ingresoForm)
            localStorage.setItem('ingresos2', JSON.stringify(ingresosDeForm))
            leer();
        }

    } else {

        if (titulo != "" && precio > 0) {
            let ingresosDeForm = JSON.parse(localStorage.getItem('ingresos2'))
            ingresosDeForm.push(ingresoForm);
            localStorage.setItem('ingresos2', JSON.stringify(ingresosDeForm))
            leer();
        }

    }

    document.getElementById('formularioIngresos').reset();

});


$("#holaGastos").click(function () {

    let titulo2 = document.getElementById('tituloGasto').value;
    let precio2 = document.getElementById('precioGasto').value;

    let gastoForm = {
        titulo2,
        precio2
    }

    if (localStorage.getItem('gastos2') === null) {

        if (titulo2 != "" && precio2 > 0) {
            let gastosDeForm = [];
            gastosDeForm.push(gastoForm)
            localStorage.setItem('gastos2', JSON.stringify(gastosDeForm))
            leer2();
        }

    } else {

        if (titulo2 != "" && precio2 > 0) {
            let gastosDeForm = JSON.parse(localStorage.getItem('gastos2'))
            gastosDeForm.push(gastoForm);
            localStorage.setItem('gastos2', JSON.stringify(gastosDeForm))
            leer2();
        }

    }

    document.getElementById('formularioGastos').reset();

});


// ------------------------- LEER INGRESOS Y GASTOS -------------------------


function leer() {

    if (localStorage.getItem('ingresos2') != null) {

        let ingresosDeForm = JSON.parse(localStorage.getItem('ingresos2'));

        for (let i = 0; i < ingresosDeForm.length; i++) {

            let titulo = ingresosDeForm[i].titulo;
            let precio = ingresosDeForm[i].precio;
            total_ingresos = total_ingresos + parseInt(precio);

            document.getElementById('tbody').innerHTML +=
                `
            <tr>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td> <img src="xRoja.png" alt="x" width="25"/></td>
            </tr>
            `
        }

    }
}




function leer2() {

    if (localStorage.getItem('gastos2') != null) {

        let gastosDeForm = JSON.parse(localStorage.getItem('gastos2'));

        for (let i = 0; i < gastosDeForm.length; i++) {

            let gastito = "gasto" + i.toString();
            let titulo2 = gastosDeForm[i].titulo2;
            let precio2 = gastosDeForm[i].precio2;
            localStorage.setItem(gastito, JSON.stringify(titulo2))

            total_gastos = total_gastos + parseInt(precio2);

            document.getElementById('tbody2').innerHTML +=
            `
            <tr id="${gastito}TR">
            <td>${titulo2}</td>
            <td>${precio2}</td>
            <td><button id="${gastito}X" onclick="eliminarGasto(this);"> <img src="xRoja.png" alt="x" width="20" /></button></td>
            </tr>
            `
        }
    }
}

// ------------------------- ELIMINAR GASTO -------------------------

function eliminarGasto(obj) {

        let ID = $(obj).attr("id");
        let gastito = ID.substring(0, ID.length - 1);
        let indice = gastito.substring(gastito.length - 1)
        console.log(gastito);
        console.log(indice);

    localStorage.removeItem(gastito);

    let gastosDeForm = JSON.parse(localStorage.getItem('gastos2'));
    localStorage.setItem('gastos2', JSON.stringify(gastosDeForm))
    localStorage.removeItem(indice);
}



//localStorage.removeItem('image');


// ------------------------- BOTONES RESET -------------------------



$("#chau").click(function () {

    localStorage.removeItem('ingresos2');
    //localStorage.clear();

});

$("#chau2").click(function () {

    let gastosDeForm = JSON.parse(localStorage.getItem('gastos2'));

    for (let i = 0; i < gastosDeForm.length; i++) {
        let gastito = "gasto" + i.toString();
        localStorage.removeItem(gastito);
        console.log(gastito);
    }
    localStorage.removeItem('gastos2');

});


// ------------------------- CALCULADORA SALDOS -------------------------


$("#botonResumen").click(function () {

    if (banderaGastos == 1 && banderaIngresos == 1 && banderaSaldo == 1) {
        saldo = totalIngresos - totalGastos;

        $("#saldos").append(`
        <p class= borrar> INGRESOS: $${localStorage.getItem('totalIngresos')}</p>
        <p class= borrar> GASTOS: $${localStorage.getItem('totalGastos')}</p>
        <b class= borrar> SALDO: $${saldo}</b>`);

        banderaSaldo = 0;
        localStorage.setItem('saldo', saldo);
        saldo = 0

    } else if ((localStorage.getItem('flagGastos') == '1' && localStorage.getItem('flagIngresos') == '1' && localStorage.getItem('flagSaldo') == '1') && banderaSaldo == 0) {

        $("#saldos").append(`
        <p class= borrar> INGRESOS: $${localStorage.getItem('totalIngresos')}</p>
        <p class= borrar> GASTOS: $${localStorage.getItem('totalGastos')}</p>
        <b class= borrar> SALDO: $${localStorage.getItem('saldo')}</b>`);

        banderaSaldo = 2;
    }

});