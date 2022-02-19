const boton = document.getElementById("btnCalcular");
boton.addEventListener("click", () => {


    const lavadoExterior    = $("#lavadoExterior").prop("checked");

    const lavadoMotor       = $("#lavadoMotor").prop("checked");

    let montoNeto           = 0;

    if( lavadoExterior ) {
        montoNeto = montoNeto + 7000;
    }

    if( lavadoMotor ) {
        montoNeto = montoNeto + 5000;
    }

    const impuesto  = montoNeto * 0.19;
    const total     = montoNeto + impuesto;

    



    document.getElementById("neto").innerHTML   = `<span>$ ${montoNeto}</span>`;
    document.getElementById("iva").innerHTML    = `<span>$ ${impuesto}</span>`;
    document.getElementById("total").innerHTML  = `<span>$ ${total}</span>`;
});


function displayDate(){
    document.getElementById("mostrarfecha").innerHTML = Date();
   

}



let encargado = document.getElementById("encargado");
encargado.addEventListener("change", function() {
    console.log(encargado.value)

        document.getElementById("messages").innerHTML =("su prestador de servicios fue:" + encargado.value)

   
});







	const apellido = document.getElementById("apellido").value;	
    const nombre = document.getElementById("nombre").value;	

	const mensajes = [];

    form.addEventListener('submit', e => {
        e.preventDefault();
    
	
	const validacionNombre = validarNombre(nombre);
	if( validacionNombre.length > 0 ) {
		mensajes.push( validacionNombre );
	}
	
	const validacionApellido = validarApellido(apellido);
	if( validacionApellido.length > 0 ) {
		mensajes.push( validacionApellido );
	}
	
	if( mensajes.length == 0 ) {
		guardarDatosContacto(nombre, apellido);
	} else {
		document.getElementById("mensajes").innerHTML = mensajes.join(". ");
	}
	
});

function validarNombre(nombre) {
	if(nombre.value.length > 2) {
		return "";
	} else {
		return "El nombre es muy corto.";
	}
}

function validarApellido(apellido) {
	if(apellido.value.length > 2) {
		return "";
	} else {
		return "El apellido es muy corto.";
	}
}
