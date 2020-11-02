$(document).ready(function(){
  console.log('crear patio ready');

  $('#patio_limpiar').click(function () {
    $('#nombre').val('');
    $('#descripcion').val('');
    $('#aguaPotable').val('');
    $('#bano').val('');
    $('#redElectrica').val('');
    $('#spabhp').val('');
    $('#spamel').val('');
    $('#geoCercaString').val('');
    $('#superficie').val('');
  });

  $('#patio_crear_form').validate({
    rules: {
      nombre: {
        required: true
      },
      geoCercaString: {
        required: true,
      },
      estadoId: {
        required: true,
      }
    },
    messages: {
      nombre: 'Ingrese Nombre del patio',
      geoCercaString: 'Ingrese Geo Localizacion',
      estadoId: 'Seleccione estado'
    }
  });
});

//$('#geoCercaString').click(function(){
$('#geoCercaString').dblclick(function(){
    $('#myModal').modal('show');
   });

$('#geoCercaString').on('click', function(e){
	  e.preventDefault(); 
	  $(this).css('border-color', 'lightblue');
	});

function removeLine() {
	  var path = poly.getPath();
	  path.clear();	  
	  poly.setMap(map);
	  //poly.setMap(null);
	  $('#geoCercaString').val("");
  }

//for dynamic fields
//$(document).ready(function() {
// 	var max_fields      = 10; //maximum input boxes allowed
// 	var wrapper   		= $(".input_fields_wrap"); //Fields wrapper
// 	var add_button      = $(".add_field_button"); //Add button ID
//
// 	var x = 1; //initlal text box count
// 	$(add_button).click(function(e){ //on add input button click
// 		e.preventDefault();
// 		if(x < max_fields){ //max input box allowed
// 			x++; //text box increment
// 			$(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
// 		}
// 	});
//
// 	$(wrapper).on("click",".remove_field", function(e){ //user click on remove text
// 		e.preventDefault(); $(this).parent('div').remove(); x--;
// 	})
// });

//<div class="input_fields_wrap">
//     <button class="add_field_button">Add More Fields</button>
//     <div><input type="text" name="mytext[]"></div>
// </div>