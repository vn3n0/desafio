$(document).ready(function(){
  console.log('crear usuario ready');

  $('#usuario_limpiar').click(function () {
    $('#password1').val('');
    $('#password2').val('');
    $('#nombre').val('');
    $('#correo').val('');
    $('#telefono').val('');
    $('#empresaRut').val('');
  });

  $('#usuario_editar_form').validate({
    rules: {
      password2: {
        equalTo: "#password1",
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
      password2: 'Confirme la contraseña',
      nombre: 'Ingrese la nombre completo',
      correo: 'Ingrese el correo',
      telefono: 'Ingrese el telefono',
      empresaRut: 'Seleccione una empresa'
    }
  });
});