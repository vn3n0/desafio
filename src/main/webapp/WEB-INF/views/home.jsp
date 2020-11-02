<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
   pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page session="true"%>
<%@taglib prefix="core" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.util.*"%>
<%@ page import="cl.walmart.desafio.model.*"%>

<!DOCTYPE html>
<html>

<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>LIDER | DESAFIO</title>

	<link href="resources/css/bootstrap4.min.css" rel="stylesheet">
	 <link href="resources/font-awesome/css/font-awesome.css" rel="stylesheet">
	 <link href="resources/css/animate.css" rel="stylesheet">
	 <link href="resources/css/style.css" rel="stylesheet">
	 <link href="resources/css/plugins/toastr/toastr.min.css" rel="stylesheet">
	 <link rel="shortcut icon" type="image/x-icon" href="https://www.lider.cl/images/favicon.ico">
	 <link href="resources/css/plugins/dataTables/datatables.min.css" rel="stylesheet">
	 <link href="resources/js/plugins/jquery-ui/jquery-ui.min.css"
	    rel="stylesheet">
	 <link href="resources/css/plugins/iCheck/custom.css" rel="stylesheet">
	 <link href="resources/css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css"
	    rel="stylesheet">
         
 <style>
 
.samtech-navx {
	background-color: #0071CE;
}

.top-navigation .nav>li a:hover, .top-navigation .nav>li a:focus {
      background-color: inherit;
    color: #1ab394;
}

.logonew {
    width:200px; /* you can use % */
    height: auto;
}

.btn-search {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
}

.preciofont{
font-size: 23px;
color: red;
}

/*svg {
  position: absolute;
  top: calc(50% - 100px);
  left: 0;
  width: 190px;
  height: 190px;
  background: yellow;
}

image {
  width: 150px;
  height: 150px;
}*/
</style>
</head>

<body class="top-navigation gray-bg">
	
    				
				
				<nav class="navbar samtech-navx">
				     <a href="#">
					    <img src="resources/img/logo.png" class="logonew">
				  	</a>
				
				  <div>
				  	
				    <!--<form class="form-inline my-2 my-lg-0">-->
				    <label for="tags"></label>
				      <input class="form-control mr-sm-2" type="search" placeholder="¿Qué producto buscas?" aria-label="Search" id="productosAuto">
				      <button onClick="validar()" class="btn btn-outline-success btn-search my-2 my-sm-0">Buscar</button>
				     <!--</form>-->
				  </div>
				</nav>
             	
				<div id="page-wrapper" class="gray-bg">
				
				<div class="row border-bottom"></div>
				
				<div class="wrapper wrapper-content animated fadeInRight">
					<div id="div_table" class='row'>
							<%
						 if (request.getAttribute("product_list") != null && !(request.getAttribute("product_list")).equals("")) {
							 List<Product> product_list = new ArrayList();
							 product_list = (List)request.getAttribute("product_list");
							 
							 for (int i = 0; i < 6; i++) {
								 %>
								 
								 <div class="col-sm-2 border-dark mb-3">
									 <div class="card" style="width: 18rem;">
										  
										  <object type="image/svg+xml" data="https://<%=product_list.get(i).getImage()%>">
										  	<img href="aple.png" alt="lamanz">
										  </object>
										  
									  
									  <div class="card-body">
									    <h5 class="card-title"><b>Marca - <%=product_list.get(i).getBrand()%></b></h5>
									    <p class="card-text">Descripcion - <%=product_list.get(i).getDescription()%></p>
									    <p class="card-text preciofont">$<%=product_list.get(i).getPrice()%></p>
									    
									    
									    <%if(product_list.get(i).getDscto().equals("S")){ %>
									    
									    <p class="card-text">50% de descuento</p>
									    
									    <%} %>
									    
									    <a href="#" class="btn btn-primary">Comprar</a>
									  </div>
									</div>
								</div>
								 
								 <%
							 }
						 }
						 %>
					</div>
			     </div>
		    </div>	   
		    
      

	<!-- Mainly scripts -->
	<script src="resources/js/jquery-3.1.1.min.js"></script>
	<script src="resources/js/plugins/jquery-ui/jquery-ui.min.js"></script>
	<script src="resources/js/bootstrap4.min.js"></script>
	<script src="resources/js/plugins/metisMenu/jquery.metisMenu.js"></script>
	<script src="resources/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
	<script src="resources/js/plugins/dataTables/datatables.min.js"></script>
	<!-- Custom and plugin javascript -->
	<script src="resources/js/inspinia.js"></script>
	<script src="resources/js/plugins/pace/pace.min.js"></script>
	<!-- iCheck -->
	<script src="resources/js/plugins/iCheck/icheck.min.js"></script>
	<!-- ChartJS-->
	<script src="resources/js/plugins/chartJs/Chart.min.js"></script>
	<!-- JSKnob -->
	<script src="resources/js/plugins/jsKnob/jquery.knob.js"></script>
	
	      <script>
	      
	      
	      function validar(){
	    	  
	    	  var productosAuto = $("#productosAuto").val();
	    	  
	    	  
	    	  var isnumber = /^\d*$/.test(productosAuto)
	    	
	    	  if(isnumber){
	    		  $.ajax({
		    		    type: "POST",           
		    		    url: 'searchProductoById',    		         	    
			     	   	data: { productosAuto : productosAuto },
			     	    success: function(response){

		     	    	$("#div_table").html(response);
		     	    	console.log('r:'+response)	      	    
		     	    	
		     	    } ,
				        error: function(result,request, status, error) {
				        	console.log('e:'+error);
				        },
				        done: function(response){
			     	    	
			     	    	$("#div_table").html(response);
			     	    	//console.log('r:'+response)	      	    
			     	    	
			     	    } 
		     	   })
	    		  
	    	  }else{
	    	 $.ajax({
	    		    type: "POST",           
	    		    url: 'searchProducto',    		         	    
		     	   	data: { productosAuto : productosAuto },
		     	    success: function(response){

	     	    	$("#div_table").html(response);
	     	    	//console.log('r:'+response)	      	    
	     	    	
	     	    } ,
			        error: function(result,request, status, error) {
			        	console.log('e:'+error);
			        },
			        done: function(response){
		     	    	
		     	    	$("#div_table").html(response);
		     	    	console.log('r:'+response)	      	    
		     	    	
		     	    } 
	     	   })
	    	  }
	     	   
	          }	
	      
          $( function() {
              var availableTags = [
                  <%=request.getAttribute("productosAuto")%>
                ];
              
             $( "#productosAuto" ).autocomplete({
               source: availableTags,
               minLength: 1
             });
            } );
	      </script>
</body>

</html>
