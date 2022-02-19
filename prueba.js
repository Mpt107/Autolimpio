
  
document.getElementById("nombre").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtnombre = input.value;
  
    const feedbacknombre = document.getElementById("feedback-nombre");
    expr = /^[a-zA-Z\_\-]{4,30}$/;
    if (!expr.test(txtnombre)) {
      feedbacknombre.innerHTML = "Solo debe tener letras y debe tener entre 4 y 30 caracteres.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbacknombre.className = "invalid-feedback";
    } else {
      feedbacknombre.innerHTML = "El nombre esta correcto";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbacknombre.className = "valid-feedback";
    }
  });

  

document.getElementById("apellido").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtapellido = input.value;

  const feedbackapellido = document.getElementById("feedback-apellido");
  expr = /^[a-zA-Z\_\-]{4,30}$/;
  if (!expr.test(txtapellido)) {
    feedbackapellido.innerHTML = "debe tener entre 4 y 30 caracteres.";
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    feedbackapellido.className = "invalid-feedback";
  } else {
    feedbackapellido.innerHTML = "El apellido es correcto";
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    feedbackapellido.className = "valid-feedback";
  }
});


document.getElementById("rut").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtrut = input.value;

  const feedbackrut = document.getElementById("feedback-rut");
  expr = /^[0-9]{7,8}$/;
  if (!expr.test(txtrut)) {
    feedbackrut.innerHTML = "debe contener  7 u 8 digitos.";
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    feedbackrut.className = "invalid-feedback";
  } else {
   feedbackrut.innerHTML = "El Rut es correcto";
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    feedbackrut.className = "valid-feedback";
  }
});

document.getElementById("dv").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtdv = input.value;

  const feedbackdv = document.getElementById("feedback-dv");
  expr = /^[0-9kK]{1}$/;
  if (!expr.test(txtdv)) {
    feedbackdv.innerHTML = "el digito verificador debe tener 1 digito.";
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    feedbackdv.className = "invalid-feedback";
  } else {
   feedbackdv.innerHTML = "El digito verificador esta correcto";
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    feedbackdv.className = "valid-feedback";
  }
});


document.getElementById("direccion").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtdireccion = input.value;

  const feedbackdireccion = document.getElementById("feedback-direccion");
  expr = /^[a-zA-Z\_\-]{4,80}$/;
  if (!expr.test(txtdireccion)) {
    feedbackdireccion.innerHTML = "debe tener como minimo 4 maximo 80 caracteres";
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    feedbackdireccion.className = "invalid-feedback";
  } else {
   feedbackdireccion.innerHTML = "la direccion es correcta";
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    feedbackdireccion.className = "valid-feedback";
  }
});

document.getElementById("marca").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtmarca = input.value;

  const feedbackmarca = document.getElementById("feedback-marca");
  expr = /^[a-zA-Z\_\-]{4,20}$/;
  if (!expr.test(txtmarca)) {
    feedbackmarca.innerHTML = "debe contener minimo 4 y maximo 40 caracteres.";
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    feedbackmarca.className = "invalid-feedback";
  } else {
   feedbackmarca.innerHTML = "La marca es correcta";
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    feedbackmarca.className = "valid-feedback";
  }
});

document.getElementById("modelo").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtmodelo = input.value;

  const feedbackmodelo = document.getElementById("feedback-modelo");
  expr = /^[a-zA-Z\_\-]{4,20}$/;
  if (!expr.test(txtmodelo)) {
    feedbackmodelo.innerHTML = "debe contener entre 4 y 20 caracteres.";
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    feedbackmodelo.className = "invalid-feedback";
  } else {
   feedbackmodelo.innerHTML = "El modelo esta correcto";
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    feedbackmodelo.className = "valid-feedback";
  }
});


document.getElementById("ano").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtano = input.value;

  const feedbackano = document.getElementById("feedback-ano");
  expr = /^[0-9]{4}$/;
  if (!expr.test(txtano)) {
    feedbackano.innerHTML = "el año debe ser de 4 digitos";
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    feedbackano.className = "invalid-feedback";
  } else {
   feedbackano.innerHTML = "El año esta correcto";
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    feedbackano.className = "valid-feedback";
  }
});