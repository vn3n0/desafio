$(document).ready(function(){

  $('#contrato_limpiar').click(function () {
    $('#nombre').val('');
    $('#empresaRut').val('');
    $('#fechaInicio').val('');
    $('#fechaTermino').val('');
    $('#maContrato').val('');
    $('#oaContrato').val('');
    $('#observaciones').val('');
  });

  $('#contrato_editar_form').validate({
    rules: {
      nombreContrato: {
        required: true
      },
      empresaRut: {
        required: true
      },
      fechaInicio: {
        required: true
      },
      fechaTermino: {
        required: true
      },
      usuario: {
        required: true
      }
    },
    messages: {
      nombre: 'Ingrese Nombre del Contrato',
      empresaRut: 'Seleccione Empresa',
      fechaInicio: 'Seleccione fecha inicio del contrato',
      fechaTermino: 'Seleccione fecha termino del contrato',
      usuario: 'Seleccione Usuario'
    }
  });

  $('#contrato_editar_form .input-group.date').datepicker({
    language: 'es',
    todayBtn: "linked",
    keyboardNavigation: false,
    forceParse: false,
    calendarWeeks: true,
    autoclose: true,
    format: "dd-mm-yyyy"
  });

  $('#empresaRut').change(function(){
    var empresaRut = $('#empresaRut').val();
    $.ajax({
      type: 'GET',
      url: 'usuariosEmpresa?id='+empresaRut,
      success: function (outcome) {
        console.log(outcome);
        var usuario_select = $('#usuario').empty();
        $('<option value="">Seleccione Usuario</option>').appendTo(usuario_select);
        outcome.map(function (usuario) {
          console.log(usuario);
          console.log(usuario.usuario +'-'+ usuario.nombre);
          $('<option value="'+usuario.usuario+'">'+usuario.nombre+'</option>').appendTo(usuario_select);
        });
      }
    });
  });

});