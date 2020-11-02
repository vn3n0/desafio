$(document).ready(function(){
  console.log('dashboard patio ready');
  
  $('#toggleSpinners2').click(function(){
	    $('#myModal2').modal('show');
	   });
  
	$('#filter')
	.click(function(e) {
		
		var empresa = "";
		var estado = "";
		
		estado = document.getElementById("estadoId").value;
		empresa = document.getElementById("nombre").value;
		
		window.location.href = "AjaxFilterMap.html?estado="+estado+"&empresa="+empresa;
			
								/*e.preventDefault();
								    $.ajax({
								        type: "POST",
								        url: "AjaxFilterMap.html",
								        data: { 
								            nombre: empresa,
								            estadoId: estado
								        }
								    });*/
						});
  
  
});

