const valor = 200;
const cantidad = document.getElementById("cantidad");
const categoria = document.getElementById("categoria");
const btnResumen = document.getElementById("resumen");
const total = document.getElementById("total")
const btnBorrar = document.getElementById("borrar")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const correo = document.getElementById("correo")

btnResumen.addEventListener("click", calculaTotal);
btnBorrar.addEventListener("click", limpiaCampos);

function descuento(cat) {
    let ticket;
    
    if (categoria.value == 1) {
        dto = 0.8;
        ticket = valor - (valor * dto);
    }    
    else    
        if (categoria.value == 2) {
            dto = 0.5;
            ticket = valor - (valor * dto);
        }    
    else {
        dto = 0.15;
        ticket = valor - (valor * dto);   
    }
    return ticket;         
}

function calculaTotal() {    
    
    total.innerHTML = console.log("Total a pagar: $");
    total.innerHTML = cantidad.value * descuento(categoria.value) ;
}

function limpiaCampos() {
    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    cantidad.value = "";
    total.innerHTML = "";
}
