/* Despliega menú responsive cuando se clickea en el menú hamburguesa*/
function myFunction() {
    var x = document.getElementById("menu-header");
    if (x.className === "menu-header") {
      x.className += " responsive";
    } else {
      x.className = "menu-header";
    }
  }

// Validación del formulario de contacto.html
// si falta algún campo obligatorio, aparece un alerta; si no, envia
// los datos y muestra un cartel informando el envío exitoso.  
function validacionForm(){
    let inputNombre = document.forms["comentarioForm"]["inputNombre"].value;
    let inputApellido = document.forms["comentarioForm"]["inputApellido"].value;
    let inputEmail = document.forms["comentarioForm"]["inputEmail"].value;
    let inputDireccion = document.forms["comentarioForm"]["inputDireccion"].value;
    // let inputPiso = document.forms["comentarioForm"]["inputPiso"].value;
    // let inputDepto = document.forms["comentarioForm"]["inputDepto"].value;
    let inputCP = document.forms["comentarioForm"]["inputCP"].value;
    let inputLocalidad = document.forms["comentarioForm"]["inputLocalidad"].value;
    let inputComentario = document.forms["comentarioForm"]["inputComentario"].value;

    if(inputNombre == "" || inputApellido == "" || inputEmail == "" || inputDireccion == "" || inputCP == "" || inputLocalidad == "" || inputComentario == ""){
        return alert("Complete los campos obligatorios, por favor");
    }else {
            confirm("Tu comentario fue enviado exitosamente!");
        }
}


