$(document).ready(function(){
  console.log('crear usuario ready');

  $('#usuario_limpiar').click(function () {
    $('#usuario').val('');
    $('#password1').val('');
    $('#password2').val('');
    $('#nombre').val('');
    $('#correo').val('');
    $('#telefono').val('');
    $('#empresaRut').val('');
  });

  $('#usuario_crear_form').validate({
    rules: {
      usuario: {
        required: true
      },
      password1: {
        required: true
      },
      password2: {
        equalTo: "#password1",
        required: true
      },
      nombre: {
        required: true
      },
      correo: {
        required: true
      },
      telefono: {
        required: true
      },
      empresaRut: {
        required: true
      }
    },
    messages: {
      usuario: 'Ingrese nombre de usuario',
      password1: 'Ingrese la contraseña',
      password2: 'Confirme la contraseña',
      nombre: 'Ingrese la nombre completo',
      correo: 'Ingrese el correo',
      telefono: 'Ingrese el telefono',
      empresaRut: 'Seleccione una empresa'
    }
  });
});