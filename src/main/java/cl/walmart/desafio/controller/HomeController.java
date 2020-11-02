package cl.walmart.desafio.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import cl.walmart.desafio.model.Product;
import cl.walmart.desafio.service.ProductService;

@Controller
public class HomeController {

	@RequestMapping("/")
	public ModelAndView HomeController(Model model,HttpServletRequest request) {
		System.out.println("in HomeController");
		ModelAndView mv = new ModelAndView("home");
		
		//List product_list = new ArrayList();
		List<Product> product_list = new ArrayList();
		product_list = ProductService.getAll();
		
		StringBuffer productosAuto = new StringBuffer();
		productosAuto = ProductService.autocompleteProduct(product_list);
		request.setAttribute("productosAuto", productosAuto);
		request.setAttribute("product_list", product_list);

		
		
		return mv;
	}
}