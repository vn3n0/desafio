$(document).ready(function(){
  console.log('editar patio ready');

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

  $('#patio_editar_form').validate({
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

$('#geoCercaString').dblclick(function(){
    $('#myModal').modal('show');
   });

$("#myBtn2").click(function() {
	$("#myModal2").modal();

});

$('#geoCercaString').on('click', function(e){
	  e.preventDefault();
	  $(this).css('border-color', 'lightblue');
	});

function removeLine() {
	  var path = poly.getPath();
	  path.clear();	  
	  poly.setMap(map);
	  bermudaTriangle.setMap(null);
	  //poly.setMap(null);
	  $('#geoCercaString').val("");
  }


Dropzone.options.dropzoneForm = {
	paramName : "file", // The name that will be used to transfer the file
	autoProcessQueue : true,
	maxFilesize : 10, // MB            
	uploadMultiple : false,
	addRemoveLinks : true,
      removedfile: function(file) {
    	  var name = file.name;  
    	  var id = document.getElementById("id").value;
    	  $.get( "otajax.html", { accion: 9, id: id, tipo: 1, file: name } );
    	  
    	 /*ajax=objetoAjax();
         ajax.open("GET", 'otajax.html?accion=9&id=' + id + '&tipo=1&file='+name);
         ajax.send(null);*/            	  
    	  file.previewElement.remove(); 
    	  exit;
    	  },
    	  init : function(){
    		  
    		  this.on("thumbnail", function(file) {
    	            console.log(file); // will send to console all available props
    	            file.previewElement.addEventListener("click", function() {
    	               //alert(file.name);
    	            	window.location.href = file.name;
    	            });
    	        });
    		  
    		  			var self = this;
    		  			if(document.getElementById("archivo").value != ""){
    		  				
    		  				var archivos = document.getElementById("archivo").value;
    		  				var archivoArr = archivos.split(",");
    		  				var archivo = "";
    		  				
    		  				for (i = 0; i < archivoArr.length; i++) {
    		  					archivoArr[i]
    		  					var existingFile = {name: archivoArr[i],accepted: true,fullPath: archivoArr[i]};
    		  					self.files.push(existingFile);
								self.emit("addedfile", existingFile);
								//self.emit("thumbnail", existingFile);
								//self.emit("thumbnail", existingFile, "http://localhost:8080/patiocontratistas/resources/img/iconpdf.jpg");								
								self.emit("thumbnail", existingFile, "http://test1.samtech.cl/barrioindustrialmel/resources/img/iconpdf.jpg");
								self.emit("success", existingFile);
								self.emit("complete", existingFile);
							}
    		  				
    		  			}
    	  },
  	previewsContainer : ".dropzone-previews"

};