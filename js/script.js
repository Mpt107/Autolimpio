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

//validacion de datos formulario

const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const direccion = document.getElementById('direccion')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (nombre.value === '' || nombre.value == null) {
    messages.push('Debe escribir su nombre')
  }
  if (apellido.value === '' || apellido.value == null) {
    messages.push('Debe escribir su apellido')
  }

  if (nombre.value.length >= 30) {
    messages.push('Nombre debe ser menor a 30 caracteres')
  }

  if (apellido.value.length >= 30) {
    messages.push('apellido debe ser menor a 30 cracteres')
  }
  if (direccion.value === '' || direccion.value == null) {
    messages.push('Debe escribir su direccion')
  }

  if (direccion.value.length >= 80) {
    messages.push('direccion debe ser menor a 80 cracteres')
  }
  

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
