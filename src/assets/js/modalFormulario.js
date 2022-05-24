var antUsu = localStorage.getItem("Usuarios");
    antUsu = JSON.parse(antUsu);
var flag = "a";

    if (antUsu == null) {
        antUsu = [];
       /*  flag = "b"; */
    }
    
function guarda(){
    var nombre = document.getElementById("inlineFormInputGroupNombre").value;
    var sexo = document.getElementById("inlineFormInputGroupSexo").value;
    var correo = document.getElementById("inlineFormInputGroupCorreo").value;
    var fechaNac = document.getElementById("inlineFormInputGroupFechaNacimiento").value;
        
    var registros = JSON.stringify ({
        nombre: nombre,
        sexo: sexo,
        correo: correo, 
        fechaNacimiento: fechaNac 
    });
    /* if (flag == "b") { */
        antUsu.push(registros); 
        localStorage.setItem("Usuarios", JSON.stringify(antUsu));  
    /* }else{
        localStorage.setItem("Usuarios", JSON.stringify(antUsu));
        flag = "a";
    } */
    document.getElementById("inlineFormInputGroupNombre").value = "Tu nombre ";
    document.getElementById("inlineFormInputGroupSexo").value = "Elige tu sexo";
    document.getElementById("inlineFormInputGroupCorreo").value = " ";
    document.getElementById("inlineFormInputGroupFechaNacimiento").value = "2000/01/01";
}
/* 
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formularioSubs").addEventListener('submit', validarFormulario); 
  });
   */
  function validarFormulario() {
    var usuario = document.getElementById('inlineFormInputGroupNombre').value;
    var sexo = document.getElementById('inlineFormInputGroupSexo').value;
    var correo = document.getElementById('inlineFormInputGroupCorreo').value;
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(usuario.length == 0 && sexo == 'Elige tu sexo' && correo.length == 0) {
      alert('Nombre, sexo y correo no especificados');
      return;
    }else if(!re.test(correo)){
        alert('Correo invalido');
    }else{
        this.guarda();
    }
  }
/* var antUsu = localStorage.getItem("Usuarios");
antUsu = JSON.parse(antUsu);

if (antUsu == null) antUsu = [];

function guarda() {
    var nombre = document.getElementById("inlineFormInputGroupNombre").value;
    var sexo = document.getElementById("inlineFormInputGroupSexo").value;
    var correo = document.getElementById("inlineFormInputGroupCorreo").value;
    var fechaNac = document.getElementById("inlineFormInputGroupFechaNacimiento").value;

    var registros = JSON.stringify({
        nombre: nombre,
        sexo: sexo,
        correo: correo,
        fechaNacimiento: fechaNac
    });
    antUsu.push(registros);
    localStorage.setItem("Usuarios", JSON.stringify(antUsu));
    document.getElementById("inlineFormInputGroupNombre").value = " ";
    document.getElementById("inlineFormInputGroupSexo").value = " ";
    document.getElementById("inlineFormInputGroupCorreo").value = " ";
    document.getElementById("inlineFormInputGroupFechaNacimiento").value = " ";

} */
