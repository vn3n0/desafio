$(document).ready(function(){
  console.log('crear empresa ready');

  $('#empresa_limpiar').click(function () {
    $('#razonSocial').val('');
    $('#direccion').val('');
    $('#telefono').val('');
  });

  $('#empresa_editar_form').validate({
    rules: {
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
      razonSocial: 'Ingrese la Razon Social',
      direccion: 'Ingrese la direccion',
      telefono: 'Ingrese el telefono'
    }
  });
});