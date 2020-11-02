package cl.walmart.desafio.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.MongoSocketOpenException;

import cl.walmart.desafio.model.Product;
import cl.walmart.desafio.service.ProductService;

@Controller
public class ConstultaProductoController {

	@RequestMapping("/findProdDscto")
	public List findProdDscto(Model model) {
		System.out.println("in controller");

		try {

			List product_list = new ArrayList();
			product_list = ProductService.getAll();

			return product_list;

		} catch (MongoSocketOpenException e) {
			System.out.println(e.toString());
			return null;
		}

	}

	@RequestMapping(value = "/searchProducto", method = RequestMethod.POST)
	public @ResponseBody String searchProducto(Model model, HttpServletRequest request,HttpServletResponse response) {
		try {

			response.setContentType("application/json");
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.setHeader("Access-Control-Allow-Headers",
					"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept,Origin ");
			response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
			String productosAutox = request.getParameter("productosAuto");

			System.out.println("in searchProducto");

			List<Product> product_list = new ArrayList();
			product_list = ProductService.SearchButon(productosAutox);

			StringBuffer productosAuto = new StringBuffer();
			productosAuto = ProductService.autocompleteProduct(product_list);
			request.setAttribute("productosAuto", productosAuto);
			request.setAttribute("product_list", product_list);

			String resp = "";
			resp = ProductService.writeFaenaCard(product_list);

			return resp;
		} catch (Exception e) {
			System.out.println(e);
			return "";
		}

	}
	
	@RequestMapping(value = "/searchProductoById", method = RequestMethod.POST)
	public @ResponseBody String searchProductoById(Model model, HttpServletRequest request,HttpServletResponse response) {
		try {

			response.setContentType("application/json");
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.setHeader("Access-Control-Allow-Headers",
					"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept,Origin ");
			response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
			
			
			String productosAutox = request.getParameter("productosAuto");

			System.out.println("in searchProducto");

			List<Product> product_list = new ArrayList();
			Product p = new Product();
			p = ProductService.FindProductById(productosAutox);
			product_list.add(p);

			StringBuffer productosAuto = new StringBuffer();
			productosAuto = ProductService.autocompleteProduct(product_list);
			request.setAttribute("productosAuto", productosAuto);
			request.setAttribute("product_list", product_list);

			String resp = "";
			resp = ProductService.writeFaenaCard(product_list);

			return resp;
		} catch (Exception e) {
			System.out.println(e);
			return "";
		}

	}

}
