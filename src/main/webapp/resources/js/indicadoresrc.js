function chkFunc(x) {
	$('#chkweek').val(x);
}

function grabarIndicadores() {
	//var a = $('#distSegura').val();
	//console.log("function ->"+a)
	error = 0;
	
	var listOfObjects = [];
	
	//console.log(IndicadorDistRecorrida())
	//console.log(IndicadorExVelocidad())
	//console.log(AceleracionesBruscas())
	//console.log(FrenadasBruscas())
	//console.log(EcoDriving())
	//console.log(FueraHorario())

	var vIndicadorDistRecorrida = IndicadorDistRecorrida()
	if(vIndicadorDistRecorrida == 1){
		return error = 1;
	}
	/*var vIndicadorExVelocidad = IndicadorExVelocidad()
	if(vIndicadorExVelocidad == 1){
		return error = 1;
	}
	var vAceleracionesBruscas = AceleracionesBruscas()
	if(vAceleracionesBruscas == 1){
		return error = 1;
	}
	var vFrenadasBruscas = FrenadasBruscas()
	if(vFrenadasBruscas == 1){
		return error = 1;
	}
	var vEcoDriving = EcoDriving()
	if(vEcoDriving == 1){
		return error = 1;
	}
	var vFueraHorario = FueraHorario()
	if(vFueraHorario == 1){
		return error = 1;
	}*/
	listOfObjects.push(vIndicadorDistRecorrida);
	/*listOfObjects.push(vIndicadorExVelocidad);
	listOfObjects.push(vAceleracionesBruscas);
	listOfObjects.push(vFrenadasBruscas);
	listOfObjects.push(vEcoDriving);
	listOfObjects.push(vFueraHorario);
	*/
	console.log(JSON.stringify(listOfObjects))
	
	 $.ajax({
		    type: "POST",           
		    contentType : 'application/json; charset=utf-8',
		    url: 'editarindicad',    		         	    
  	   	data: JSON.stringify(listOfObjects),
  	   	dataType : 'json',
  	    success: function(response){
	    	
	    	console.log('r:'+JSON.stringify(response))	      	    
	    } ,
	        error: function(result,request, status, error) {
	        	console.log('e:'+error);
	        }
	   })  
	
	
}

function FueraHorario() {
	error = 0;
	
   	if (document.getElementById("HInicio").value == "") {
 		document.getElementById("HInicior").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var HInicio = $('#HInicio').val();
 		document.getElementById("HInicior").className = "form-group has-success";
 	}
   	
 	if (document.getElementById("HFin").value == "") {
 		document.getElementById("HFinr").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var HFin = $('#HFin').val();
 		document.getElementById("HFinr").className = "form-group has-success";
 	}
 	
 	if (document.getElementById("ptjeNegFHorario1").value == "") {
 		document.getElementById("ptjeNegFHorario1r").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var ptjeNegFHorario1 = $('#ptjeNegFHorario1').val();
 		document.getElementById("ptjeNegFHorario1r").className = "form-group has-success";
 	}
 	
 	if (document.getElementById("ptjeNegFHorario2").value == "") {
 		document.getElementById("ptjeNegFHorario2r").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var ptjeNegFHorario2 = $('#ptjeNegFHorario2').val();
 		document.getElementById("ptjeNegFHorario2r").className = "form-group has-success";
 	}	
 	
 	if (document.getElementById("ptjeNegFHorario3").value == "") {
 		document.getElementById("ptjeNegFHorario3r").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var ptjeNegFHorario3 = $('#ptjeNegFHorario3').val();
 		document.getElementById("ptjeNegFHorario3r").className = "form-group has-success";
 	}	
 	
 	if (document.getElementById("ptjeBonFHorario").value == "") {
 		document.getElementById("ptjeBonFHorarior").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var ptjeBonFHorario = $('#ptjeBonFHorario').val();
 		document.getElementById("ptjeBonFHorarior").className = "form-group has-success";
 	}	
 	
 	 	
	var min = $("#slider61").slider("option", "values")[0],
    max = $("#slider61").slider("option", "values")[1];
	
	var min2 = $("#slider62").slider("option", "values")[0],
    max2 = $("#slider62").slider("option", "values")[1];
	
	var min3 = $("#slider63").slider("option", "values")[0],
    max3 = $("#slider63").slider("option", "values")[1];
 	
 	
 	var objEco = {
 			pes:1,descripcion: "Fuera de Horario", param1: HInicio, param2: HFin,
 			param3: null,param4: null, moderadominimo: min, moderadomaximo: max,
 			severominimo: min2, severomaximo: max2, extremominimo: min3,
 			extremomaximo: max3,
 			ptjenegativo: ptjeNegFHorario1, ptjenegativo2: ptjeNegFHorario2, ptjenegativo3: ptjeNegFHorario3,
 			bonificacion : ptjeBonFHorario
	};
 	
 	return objEco;
 	
}


function EcoDriving() {
	error = 0;
	
   	if (document.getElementById("ptjeNegEcoD1").value == "") {
 		document.getElementById("ptjeNegEcoD1r").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var ptjeNegEcoD1 = $('#ptjeNegEcoD1').val();
 		document.getElementById("ptjeNegEcoD1r").className = "form-group has-success";
 	}
   	
 	if (document.getElementById("ptjeNegEcoD2").value == "") {
 		document.getElementById("ptjeNegEcoD2r").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var ptjeNegEcoD2 = $('#ptjeNegEcoD2').val();
 		document.getElementById("ptjeNegEcoD2r").className = "form-group has-success";
 	}
 	
 	if (document.getElementById("ptjeNegEcoD3").value == "") {
 		document.getElementById("ptjeNegEcoD3r").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var ptjeNegEcoD3 = $('#ptjeNegEcoD3').val();
 		document.getElementById("ptjeNegEcoD3r").className = "form-group has-success";
 	}
 	
 	if (document.getElementById("ptjeBonEcoD").value == "") {
 		document.getElementById("ptjeBonEcoDr").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var ptjeBonEcoDr = $('#ptjeBonEcoDr').val();
 		document.getElementById("ptjeBonEcoDr").className = "form-group has-success";
 	}	
 	 	
	var min = $("#slider51").slider("option", "values")[0],
    max = $("#slider51").slider("option", "values")[1];
	
	var min2 = $("#slider52").slider("option", "values")[0],
    max2 = $("#slider52").slider("option", "values")[1];
	
	var min3 = $("#slider53").slider("option", "values")[0],
    max3 = $("#slider53").slider("option", "values")[1];
 	
 	
 	var objEco = {
 			pes:1,descripcion: "Eco Driving", param1: null, param2: null,
 			param3: null,param4: null, moderadominimo: min, moderadomaximo: max,
 			severominimo: min2, severomaximo: max2, extremominimo: min3,
 			extremomaximo: max3,
 			ptjenegativo: ptjeNegEcoD1, ptjenegativo2: ptjeNegEcoD2, ptjenegativo3: ptjeNegEcoD3,
 			bonificacion : ptjeBonEcoD
	};
 	
 	return objEco;
 	
}

function FrenadasBruscas() {
	error = 0;
	
   	if (document.getElementById("frenadasBruscPorKm").value == "") {
 		document.getElementById("frenadasBruscPorKmr").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var frenadasBruscPorKm = $('#frenadasBruscPorKm').val();
 		document.getElementById("frenadasBruscPorKmr").className = "form-group has-success";
 	}
   	
 	if (document.getElementById("frenadasBruscEvMax").value == "") {
 		document.getElementById("frenadasBruscEvMaxr").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var frenadasBruscEvMax = $('#frenadasBruscEvMax').val();
 		document.getElementById("frenadasBruscEvMaxr").className = "form-group has-success";
 	}
 	
 	if (document.getElementById("ptjeNegFrenBrusca1").value == "") {
 		document.getElementById("ptjeNegFrenBrusca1r").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var ptjeNegFrenBrusca1 = $('#ptjeNegFrenBrusca1').val();
 		document.getElementById("ptjeNegFrenBrusca1r").className = "form-group has-success";
 	}
 	
 	if (document.getElementById("ptjeNegFrenBrusca2").value == "") {
 		document.getElementById("ptjeNegFrenBrusca2r").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var ptjeNegFrenBrusca2 = $('#ptjeNegFrenBrusca2').val();
 		document.getElementById("ptjeNegFrenBrusca2r").className = "form-group has-success";
 	}
 	
 	if (document.getElementById("ptjeNegFrenBrusca3").value == "") {
 		document.getElementById("ptjeNegFrenBrusca3r").className = "form-group has-error";
 		return error = 1;
 	} else {
 		document.getElementById("ptjeNegFrenBrusca3r").className = "form-group has-success";
 		var ptjeNegFrenBrusca3 = $('#ptjeNegFrenBrusca3').val();
 	}

 	if (document.getElementById("ptjeBonFrenBrusca").value == "") {
 		document.getElementById("ptjeBonFrenBruscar").className = "form-group has-error";
 		return error = 1;
 	} else {
 		document.getElementById("ptjeBonFrenBrusca").className = "form-group has-success";
 		var ptjeBonFrenBruscar = $('#ptjeBonFrenBrusca').val();
 	}
   	
 	 	
	var min = $("#slider41").slider("option", "values")[0],
    max = $("#slider41").slider("option", "values")[1];
	
	var min2 = $("#slider42").slider("option", "values")[0],
    max2 = $("#slider42").slider("option", "values")[1];
	
	var min3 = $("#slider43").slider("option", "values")[0],
    max3 = $("#slider43").slider("option", "values")[1];
 	
 	
 	var objFrenBruscas = {
 			pes:1,descripcion: "Frenadas bruscas", param1: frenadasBruscPorKm, param2: frenadasBruscEvMax,
 			param3: null,param4: null, moderadominimo: min, moderadomaximo: max,
 			severominimo: min2, severomaximo: max2, extremominimo: min3,
 			extremomaximo: max3,
 			ptjenegativo: ptjeNegFrenBrusca1, ptjenegativo2: ptjeNegFrenBrusca2, ptjenegativo3: ptjeNegFrenBrusca3,
 			bonificacion : ptjeBonFrenBruscar
	};
 	
 	return objFrenBruscas;
 	
}

function AceleracionesBruscas() {
	error = 0;
	
   	if (document.getElementById("acBruscasPorKm").value == "") {
 		document.getElementById("acBruscasPorKmr").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var acBruscasPorKm = $('#acBruscasPorKm').val();
 		document.getElementById("acBruscasPorKmr").className = "form-group has-success";
 	}
   	
 	if (document.getElementById("acBruscasEventosMax").value == "") {
 		document.getElementById("acBruscasEventosMaxr").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var acBruscasEventosMax = $('#acBruscasEventosMax').val();
 		document.getElementById("acBruscasEventosMaxr").className = "form-group has-success";
 	}
 	
 	if (document.getElementById("ptjeNegAcBruscas1").value == "") {
 		document.getElementById("ptjeNegAcBruscas1r").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var ptjeNegAcBruscas1 = $('#ptjeNegAcBruscas1').val();
 		document.getElementById("ptjeNegAcBruscas1r").className = "form-group has-success";
 	}
 	
 	if (document.getElementById("ptjeNegAcBruscas2").value == "") {
 		document.getElementById("ptjeNegAcBruscas2r").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var ptjeNegAcBruscas2 = $('#ptjeNegAcBruscas2').val();
 		document.getElementById("ptjeNegAcBruscas2r").className = "form-group has-success";
 	}
 	
 	if (document.getElementById("ptjeNegAcBruscas3").value == "") {
 		document.getElementById("ptjeNegAcBruscas3r").className = "form-group has-error";
 		return error = 1;
 	} else {
 		document.getElementById("ptjeNegAcBruscas3r").className = "form-group has-success";
 		var ptjeNegAcBruscas3 = $('#ptjeNegAcBruscas3').val();
 	}

 	if (document.getElementById("ptjeBonAcBruscas").value == "") {
 		document.getElementById("ptjeBonAcBruscasr").className = "form-group has-error";
 		return error = 1;
 	} else {
 		document.getElementById("ptjeBonAcBruscasr").className = "form-group has-success";
 		var ptjeBonAcBruscas = $('#ptjeBonAcBruscas').val();
 	}
   	
 	 	
	var min = $("#sliderac1").slider("option", "values")[0],
    max = $("#sliderac1").slider("option", "values")[1];
	
	var min2 = $("#sliderac2").slider("option", "values")[0],
    max2 = $("#sliderac2").slider("option", "values")[1];
	
	var min3 = $("#sliderac3").slider("option", "values")[0],
    max3 = $("#sliderac3").slider("option", "values")[1];
 	
 	
 	var objAcBruscas = {
 			pes:1,descripcion: "Aceleraciones bruscas", param1: acBruscasPorKm, param2: acBruscasEventosMax,
 			param3: null,param4: null, moderadominimo: min, moderadomaximo: max,
 			severominimo: min2, severomaximo: max2, extremominimo: min3,
 			extremomaximo: max3,
 			ptjenegativo: ptjeNegAcBruscas1, ptjenegativo2: ptjeNegAcBruscas2, ptjenegativo3: ptjeNegAcBruscas3,
 			bonificacion : ptjeBonAcBruscas
	};
 	
 	return objAcBruscas;
 	
}

function IndicadorExVelocidad() {
	error = 0;
	
   	if (document.getElementById("vmax").value == "") {
 		document.getElementById("vmaxr").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var vmax = $('#vmax').val();
 		document.getElementById("vmaxr").className = "form-group has-success";
 	}
   	
 	if (document.getElementById("ptjeNegExcesoV1").value == "") {
 		document.getElementById("ptjeNegExcesoV1r").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var ptjeNegExcesoV1 = $('#ptjeNegExcesoV1').val();
 		document.getElementById("ptjeNegExcesoV1r").className = "form-group has-success";
 	}
 	
 	if (document.getElementById("ptjeNegExcesoV2").value == "") {
 		document.getElementById("ptjeNegExcesoV2r").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var ptjeNegExcesoV2 = $('#ptjeNegExcesoV2').val();
 		document.getElementById("ptjeNegExcesoV2r").className = "form-group has-success";
 	}
 	
 	if (document.getElementById("ptjeNegExcesoV3").value == "") {
 		document.getElementById("ptjeNegExcesoV3r").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var ptjeNegExcesoV3 = $('#ptjeNegExcesoV3').val();
 		document.getElementById("ptjeNegExcesoV3r").className = "form-group has-success";
 	}
 	
 	if (document.getElementById("ptjeBonExcesoV").value == "") {
 		document.getElementById("ptjeBonExcesoVr").className = "form-group has-error";
 		return error = 1;
 	} else {
 		document.getElementById("ptjeBonExcesoVr").className = "form-group has-success";
 		var ptjeBonExcesoV = $('#ptjeBonExcesoV').val();
 	}
   	
 	 	
	var min = $("#sliderv1").slider("option", "values")[0],
    max = $("#sliderv1").slider("option", "values")[1];
	
	var min2 = $("#sliderv2").slider("option", "values")[0],
    max2 = $("#sliderv2").slider("option", "values")[1];
	
	var min3 = $("#sliderv3").slider("option", "values")[0],
    max3 = $("#sliderv3").slider("option", "values")[1];
 	
 	
 	var objExVelocidad = {
 			pes:1,descripcion: "Excesos de velocidad", param1: vmax, param2: null,
 			param3: null,param4: null, moderadominimo: min, moderadomaximo: max,
 			severominimo: min2, severomaximo: max2, extremominimo: min3,
 			extremomaximo: max3,
 			ptjenegativo: ptjeNegExcesoV1, ptjenegativo2: ptjeNegExcesoV2, ptjenegativo3: ptjeNegExcesoV3,
 			bonificacion : ptjeBonExcesoV
	};
 	
 	return objExVelocidad;
 	
}

function IndicadorDistRecorrida() {
	error = 0;
	
   	if (document.getElementById("distSegura").value == "") {
 		document.getElementById("distSegurar").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var distSegura = $('#distSegura').val();
 		document.getElementById("distSegurar").className = "form-group has-success";
 	}
   	
 	if (document.getElementById("distSeguraM").value == "") {
 		document.getElementById("distSeguraMr").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var distSeguraM = $('#distSeguraM').val();
 		document.getElementById("distSeguraMr").className = "form-group has-success";
 	}
 	
 	if (document.getElementById("ptjeNegDistanciaR1").value == "") {
 		document.getElementById("ptjeNegDistanciaR1r").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var ptjeNegDistanciaR1 = $('#ptjeNegDistanciaR1').val();
 		document.getElementById("ptjeNegDistanciaR1r").className = "form-group has-success";
 	}
 	
 	if (document.getElementById("ptjeNegDistanciaR2").value == "") {
 		document.getElementById("ptjeNegDistanciaR2r").className = "form-group has-error";
 		return error = 1;
 	} else {
 		var ptjeNegDistanciaR2 = $('#ptjeNegDistanciaR2').val();
 		document.getElementById("ptjeNegDistanciaR2r").className = "form-group has-success";
 	}
 	
 	if (document.getElementById("ptjeNegDistanciaR3").value == "") {
 		document.getElementById("ptjeNegDistanciaR3r").className = "form-group has-error";
 		return error = 1;
 	} else {
 		document.getElementById("ptjeNegDistanciaR3r").className = "form-group has-success";
 		var ptjeNegDistanciaR3 = $('#ptjeNegDistanciaR3').val();
 	}
   	
 	if (document.getElementById("ptjeBonDistanciaR").value == "") {
 		document.getElementById("ptjeBonDistanciaRr").className = "form-group has-error";
 		return error = 1;
 	} else {
 		document.getElementById("ptjeBonDistanciaRr").className = "form-group has-success";
 		var ptjeBonDistanciaRr = $('#ptjeBonDistanciaRr').val();
 	}
 	
	var min = $("#slider").slider("option", "values")[0],
    max = $("#slider").slider("option", "values")[1];
	
	var min2 = $("#slider2").slider("option", "values")[0],
    max2 = $("#slider2").slider("option", "values")[1];
	
	var min3 = $("#slider3").slider("option", "values")[0],
    max3 = $("#slider3").slider("option", "values")[1];
	
	var week = $('#chkweek').val();
 	
	console.log("bonific"+parseInt(ptjeBonDistanciaRr))
 	var objDistRecorrida = {
 			peso:1, descripcion: "Distancia Recorrida", param1: week, param2: distSegura,
 			param3: distSeguraM, param4: null, moderadominimo: parseInt(min), moderadomaximo: parseInt(max),
 			severominimo: parseInt(min2), severomaximo: parseInt(max2), extremominimo: parseInt(min3),
 			extremomaximo: parseInt(max3),
 			ptjenegativo: parseInt(ptjeNegDistanciaR1), ptjenegativo2: parseInt(ptjeNegDistanciaR2), 
 			ptjenegativo3: parseInt(ptjeNegDistanciaR3),
 			bonificacion : parseInt(ptjeBonDistanciaRr)
	};
 	
 	return objDistRecorrida;
 	
}


/*$(document).ready(function(){

  $('#contrato_limpiar').click(function () {
    $('#nombre').val('');
    $('#empresaRut').val('');
    $('#fechaInicio').val('');
    $('#fechaTermino').val('');
    $('#maContrato').val('');
    $('#oaContrato').val('');
    $('#observaciones').val('');
  });

  $('#contrato_crear_form').validate({
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

  $('.input-group.date').datepicker({
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

});*/