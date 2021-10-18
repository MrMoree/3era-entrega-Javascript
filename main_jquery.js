let total_ingresos = 0
let total_gastos = 0
let flag_borrado = 0;
let flag_borradoIng = 0;

leer();
leer2();

// ------------------------- CARGA INGRESOS Y GASTOS -------------------------


$("#holaIngresos").click(function (e) {
    
    e.preventDefault();
    
    let tituloIHtml = document.getElementById('tituloIngreso').value;
    let precioIHtml = document.getElementById('precioIngreso').value;
    
    let ingresoForm = {
        tituloIHtml,
        precioIHtml
    }
    
    if (localStorage.getItem('storageIngresos') === null) {
        
        if (tituloIHtml != "" && precioIHtml > 0) {
            
            let ingresosDeForm = [];
            ingresosDeForm.push(ingresoForm)
            localStorage.setItem('storageIngresos', JSON.stringify(ingresosDeForm))
            
            let indicadorI = ingresosDeForm.length - 1;
            let ingresitoI = "ingreso" + indicadorI.toString();
            let tituloI = ingresosDeForm[indicadorI].tituloIHtml;
            let precioI = ingresosDeForm[indicadorI].precioIHtml;
            localStorage.setItem(ingresitoI, JSON.stringify(tituloI))
            
            
            document.getElementById('tbody').innerHTML +=
            `
            <tr class="borrarIngresos" id="${ingresitoI}TR">
            <td>${tituloI}</td>
            <td>${precioI}</td>
            <td><button id="${ingresitoI}X" onclick="eliminarIngreso(this);"> <img src="xRoja.png" alt="x" width="20" /></button></td>
            </tr>
            `;
            
        }
        
    } else {
        
        if (tituloIHtml != "" && precioIHtml > 0) {
            
            let ingresosDeForm = JSON.parse(localStorage.getItem('storageIngresos'))
            ingresosDeForm.push(ingresoForm);
            localStorage.setItem('storageIngresos', JSON.stringify(ingresosDeForm))
            
            let indicadorI = ingresosDeForm.length - 1
            let ingresitoI = "ingreso" + indicadorI.toString();
            let tituloI = ingresosDeForm[indicadorI].tituloIHtml;
            let precioI = ingresosDeForm[indicadorI].precioIHtml;
            localStorage.setItem(ingresitoI, JSON.stringify(tituloI))
            
            
            document.getElementById('tbody').innerHTML +=
            `
            <tr class="borrarIngresos" id="${ingresitoI}TR">
            <td>${tituloI}</td>
            <td>${precioI}</td>
            <td><button id="${ingresitoI}X" onclick="eliminarIngreso(this);"> <img src="xRoja.png" alt="x" width="20" /></button></td>
            </tr>
            `;
            
        }
        
    }
    
    document.getElementById('formularioIngresos').reset();
    
});


$("#holaGastos").click(function (e) {
    
    e.preventDefault();
    
    let tituloGHtml = document.getElementById('tituloGasto').value;
    let precioGHtml = document.getElementById('precioGasto').value;
    
    let gastoForm = {
        tituloGHtml,
        precioGHtml
    }
    
    if (localStorage.getItem('storageGastos') === null) {
        
        if (tituloGHtml != "" && precioGHtml > 0) {
            let gastosDeForm = [];
            gastosDeForm.push(gastoForm)
            localStorage.setItem('storageGastos', JSON.stringify(gastosDeForm))
            
            let indicadorG = gastosDeForm.length - 1
            let gastitoG = "gasto" + indicadorG.toString();
            let tituloG = gastosDeForm[indicadorG].tituloGHtml;
            let precioG = gastosDeForm[indicadorG].precioGHtml;
            localStorage.setItem(gastitoG, JSON.stringify(tituloG))
            
            
            document.getElementById('tbody2').innerHTML +=
            `
            <tr class="borrarGastos" id="${gastitoG}TR">
            <td>${tituloG}</td>
            <td>${precioG}</td>
            <td><button id="${gastitoG}X" onclick="eliminarGasto(this);"> <img src="xRoja.png" alt="x" width="20" /></button></td>
            </tr>
            `;
        }
        
    } else {
        
        if (tituloGHtml != "" && precioGHtml > 0) {
            let gastosDeForm = JSON.parse(localStorage.getItem('storageGastos'))
            gastosDeForm.push(gastoForm);
            localStorage.setItem('storageGastos', JSON.stringify(gastosDeForm))
            
            let indicadorG = gastosDeForm.length - 1
            let gastitoG = "gasto" + indicadorG.toString();
            let tituloG = gastosDeForm[indicadorG].tituloGHtml;
            let precioG = gastosDeForm[indicadorG].precioGHtml;
            localStorage.setItem(gastitoG, JSON.stringify(tituloG))
            
            
            document.getElementById('tbody2').innerHTML +=
            `
            <tr class="borrarGastos" id="${gastitoG}TR">
            <td>${tituloG}</td>
            <td>${precioG}</td>
            <td><button id="${gastitoG}X" onclick="eliminarGasto(this);"> <img src="xRoja.png" alt="x" width="20" /></button></td>
            </tr>
            `;
        }
        
    }
    
    document.getElementById('formularioGastos').reset();
    
});


// ------------------------- LEER INGRESOS Y GASTOS -------------------------


function leer() {
    
    if (localStorage.getItem('storageIngresos') != null) {
        
        let ingresosDeForm = JSON.parse(localStorage.getItem('storageIngresos'));
        
        for (let i = 0; i < ingresosDeForm.length; i++) {
            let ingresito1 = "ingreso" + i.toString();
            let titulo1 = ingresosDeForm[i].tituloIHtml;
            let precio1 = ingresosDeForm[i].precioIHtml;
            localStorage.setItem(ingresito1, JSON.stringify(titulo1))
            
                        
            document.getElementById('tbody').innerHTML +=
            `
            <tr class="borrarIngresos" id="${ingresito1}TR">
            <td>${titulo1}</td>
            <td>${precio1}</td>
            <td><button id="${ingresito1}X" onclick="eliminarIngreso(this);"> <img src="xRoja.png" alt="x" width="20" /></button></td>
            </tr>
            `;
            
            
        }
        
    }
    
}



function leer2() {
    
    if (localStorage.getItem('storageGastos') != null) {
        
        let gastosDeForm = JSON.parse(localStorage.getItem('storageGastos'));
        
        for (let i = 0; i < gastosDeForm.length; i++) {
            let gastito2 = "gasto" + i.toString();
            let titulo2 = gastosDeForm[i].tituloGHtml;
            let precio2 = gastosDeForm[i].precioGHtml;
            localStorage.setItem(gastito2, JSON.stringify(titulo2))
            
            if (flag_borrado == 0)
            document.getElementById('tbody2').innerHTML +=
            `
            <tr class="borrarGastos" id="${gastito2}TR">
            <td>${titulo2}</td>
            <td>${precio2}</td>
            <td><button id="${gastito2}X" onclick="eliminarGasto(this);"> <img src="xRoja.png" alt="x" width="20" /></button></td>
            </tr>
            `
        }
    }
    
    flag_borrado = 0;
}

// ------------------------- ELIMINAR INGRESOS / GASTOS -------------------------


function eliminarIngreso(obj) {
    
    let IDIng = $(obj).attr("id");
    let ingresito2 = IDIng.substring(0, IDIng.length - 1);
    let indiceIng = ingresito2.substring(ingresito2.length - 1)
    
    //Elminando linea tabla
    let eliminarTRIng = ingresito2 + "TR"
    let eliminar2 = document.getElementById(eliminarTRIng);
    eliminar2.parentNode.removeChild(eliminar2);
    
    let ingresosDeForm = JSON.parse(localStorage.getItem('storageIngresos'));
    ingresosDeForm.splice(parseInt(indiceIng), 1);
    localStorage.setItem('storageIngresos', JSON.stringify(ingresosDeForm))
    
    for (let i = 0; i <= ingresosDeForm.length; i++) {
        let chauIngreso = "ingreso" + i.toString();
        localStorage.removeItem(chauIngreso);
        
        let pape = ingresosDeForm[i].tituloIHtml;
        localStorage.setItem(chauIngreso, JSON.stringify(pape));
        
    }
}



function eliminarGasto(obj) {
    
    let ID = $(obj).attr("id");
    let gastito2 = ID.substring(0, ID.length - 1);
    let indice = gastito2.substring(gastito2.length - 1)
    
    //Elminando linea tabla
    let eliminarTR = gastito2 + "TR"
    let eliminar = document.getElementById(eliminarTR);
    eliminar.parentNode.removeChild(eliminar);
    
    let gastosDeForm = JSON.parse(localStorage.getItem('storageGastos'));
    gastosDeForm.splice(parseInt(indice), 1);
    localStorage.setItem('storageGastos', JSON.stringify(gastosDeForm))
    
    for (let i = 0; i <= gastosDeForm.length; i++) {
        let chauGasto = "gasto" + i.toString();
        localStorage.removeItem(chauGasto);
        
        let pape = gastosDeForm[i].tituloGHtml;
        localStorage.setItem(chauGasto, JSON.stringify(pape));
        
    }
    
}



// ------------------------- BOTONES RESET -------------------------



$("#chau").click(function (e) {
    
    e.preventDefault();
    
    let ingresosDeForm = JSON.parse(localStorage.getItem('storageIngresos'));
    
    for (let i = 0; i < ingresosDeForm.length; i++) {
        let chauIngreso = "ingreso" + i.toString();
        localStorage.removeItem(chauIngreso);
    }
    localStorage.removeItem('storageIngresos');
    $('.borrarIngresos').remove();
    $("#resultados").remove();
    //localStorage.clear();    
});

$("#chau2").click(function (e) {
    
    e.preventDefault();
    
    let gastosDeForm = JSON.parse(localStorage.getItem('storageGastos'));
    
    for (let i = 0; i < gastosDeForm.length; i++) {
        let chauGasto = "gasto" + i.toString();
        localStorage.removeItem(chauGasto);
    }
    localStorage.removeItem('storageGastos');
    $('.borrarGastos').remove();
    $("#resultados").remove();
});


$("#resetTotal").click(function (e) {
    
    e.preventDefault();
    
    $("#chau").click();
    $("#chau2").click();
    $("#resultados").remove();
})



// ------------------------- CALCULADORA SALDOS -------------------------


$("#botonResumen").click(function () {
    
    let ingresosDeForm = [];
    ingresosDeForm = JSON.parse(localStorage.getItem('storageIngresos'));
    let gastosDeForm = [];
    gastosDeForm = JSON.parse(localStorage.getItem('storageGastos'));
    
    for (let i = 0; i < ingresosDeForm.length; i++) {
        total_ingresos = total_ingresos + parseFloat(ingresosDeForm[i].precioIHtml);
    }
    console.log(total_ingresos);
    
    for (let i = 0; i < gastosDeForm.length; i++) {
        total_gastos = total_gastos + parseFloat(gastosDeForm[i].precioGHtml);
    }
    console.log(total_gastos);
    
    saldo = total_ingresos - total_gastos;
    console.log("saldos es" + saldo);
    
    // $("#saldos").append(`<div>
    // <p class= borrar> INGRESOS: $${total_ingresos}</p>
    // <p class= borrar> GASTOS: $${total_gastos}</p>
    // <b class= borrar> SALDO: $${saldo}</b>
    // </div>`);
    
    $("#saldos").append(`
    <div class="table-responsive" id="resultados">
    <table class="table table-responsive table-borderless">
    <thead>
    <tr class="bg-light">
    <th scope="col" width="70%">Dinero</th>
    <th scope="col" class="text-end" width="30%"><span>Total</span></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><img src="https://i.imgur.com/VKOeFyS.png" width="25"> Ingresos</td>
    <td class="text-end"><span class="fw-bolder">$${total_ingresos}</span> <i class="fa fa-ellipsis-h ms-2"></i></td>
    </tr>
    <tr>
    <td><img src="https://i.imgur.com/nmnmfGv.png" width="25"> Gastos</td>
    <td class="text-end"><span class="fw-bolder">$${total_gastos}</span> <i class="fa fa-ellipsis-h ms-2"></i></td>
    </tr>
    <tr>
    <td><img src="https://i.imgur.com/nmnmfGv.png" width="25"> Saldo Disponible</td>
    <td class="text-end"><span class="fw-bolder">$${saldo}</span> <i class="fa fa-ellipsis-h ms-2"></i></td>
    </tr>
    </tbody>
    </table>
    </div>
    `);
    
    
});