$(document).ready(function(){
  console.log('crear empresa ready');

  $('#empresa_limpiar').click(function () {
    $('#rut').val('');
    $('#razonSocial').val('');
    $('#direccion').val('');
    $('#telefono').val('');
  });

  $('#empresa_crear_form').validate({
    rules: {
      rut: {
        required: true
      },
      razonSocial: {
        required: true,
      },
      direccion: {
        required: true,
      },
      telefono: {
        required: true,
      }
    },
    messages: {
      rut: 'Ingrese Rut de la empresa',
      razonSocial: 'Ingrese la Razon Social',
      direccion: 'Ingrese la direccion',
      telefono: 'Ingrese el telefono'
    }
  });
});