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
const marca = document.getElementById('marca')
const modelo = document.getElementById('modelo')

const ano = document.getElementById('ano')

form.addEventListener('submit', (e) => {
  let messages = []

   const direccion = document.getElementById('direccion')

      let comb =  /[A-Za-z0-9]/;

      if(direccion.value.match(comb))
      {
      return true;
      }
      else
      {
        messages.push('direccion deberia ser solo letras, numeros y espacios');
      e.preventDefault()
      errorElement.innerText = messages.join(', ')
      }

  })


form.addEventListener('submit', (e) => {
  let messages = []

   
      let numeros = /^[-+]?[0-9]+$/;
      if(ano.value.match(numeros))
      {
      return true;
      }
      else
      {
        messages.push('Año debe ser solo caracteres numericos');
      e.preventDefault()
      errorElement.innerText = messages.join(', ')
      }
   

  })

  
  form.addEventListener('submit', (e) => {
    let messages = []
  
     const nombre = document.getElementById('nombre')

        let letras = /^[A-Za-z]+$/;

        if(nombre.value.match(letras))
        {
        return true;
        }
        else
        {
          messages.push('Nombre deberia ser solo letras');
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
        }
  
    })

    form.addEventListener('submit', (e) => {
      let messages = []
    
       const apellido = document.getElementById('apellido')
  
          let letras = /^[A-Za-z]+$/;
  
          if(apellido.value.match(letras))
          {
          return true;
          }
          else
          {
            messages.push('apellido deberia ser solo letras');
          e.preventDefault()
          errorElement.innerText = messages.join(', ')
          }
    
      })

  form.addEventListener('submit', (e) => {
    let messages = []
  
     const modelo = document.getElementById('modelo')

        let letras = /^[A-Za-z]+$/;

        if(modelo.value.match(letras))
        {
        return true;
        }
        else
        {
          messages.push('Modelo deberia ser solo letras');
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
        }
  
    })


   



    form.addEventListener('submit', (e) => {
      let messages = []
    
       const marca = document.getElementById('marca')
  
          let letras = /^[A-Za-z]+$/;
  
          if(marca.value.match(letras))
          {
          return true;
          }
          else
          {
            messages.push('Marca deberia ser solo letras');
          e.preventDefault()
          errorElement.innerText = messages.join(', ')
          }
    
      })

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
  if (ano.value.length > 4 ||ano.value.length < 4 ){
    messages.push('Año debe ser de 4 caracreres')
  }
  if (marca.value.length >= 20  ){
    messages.push('Marca debe ser de maximo 20 caracteres')
  }
  if (modelo.value.length >= 20  ){
    messages.push('Modelo debe ser de maximo 20 caracteres')
  }

  if (rut.value.length > 8 || rut.value.length < 8 ){
    messages.push('Rut debe ser de 8 digitos')
  }
  if (div.value.length > 1 ||div.value.length < 1 ){
    messages.push('digito virificados es de un solo digito')
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }

})

form.addEventListener('submit', (e) => {
  let messages = []

   const rut = document.getElementById('rut')

   let numeros = /^[-+]?[0-9]+$/;
   if(rut.value.match(numeros))
   {
   return true;
   }
   else
   {
     messages.push('rut debe ser solo caracteres numericos');
   e.preventDefault()
   errorElement.innerText = messages.join(', ')
   }
  })

  form.addEventListener('submit', (e) => {
    let messages = []
  
     const dv = document.getElementById('dv')
  
     let numeros =/^[-+]?[0-9kK]+$/;
     if(dv.value.match(numeros))
     {
     return true;
     }
     else
     {
       messages.push('dv debe ser solo caracteres numericos');
     e.preventDefault()
     errorElement.innerText = messages.join(', ')
     }})


