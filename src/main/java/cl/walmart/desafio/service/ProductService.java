package cl.walmart.desafio.service;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.IntStream;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.MongoSocketOpenException;

import cl.walmart.desafio.factory.MongoFactory;
import cl.walmart.desafio.model.Product;

@Service("productService")
@Transactional
public class ProductService {

	static String db_name = "products", db_collection = "promotions";
	// private static Logger log = Logger.getLogger(UserService.class);

	public static List<Product> SearchButon(String like) {
		try {
			List product_list = new ArrayList();
			DBCollection coll = MongoFactory.getCollection(db_name, db_collection);

			BasicDBObject query = new BasicDBObject();
			// query.put("brand", java.util.regex.Pattern.compile(like));
			Pattern regex = Pattern.compile(like);
			query.put("brand", regex);
			DBCursor cursor = coll.find(query);

			
			while (cursor.hasNext()) {
				
				Product p = new Product();
				DBObject dbObject = cursor.next();

				p.setId(dbObject.get("id").toString());
				p.setBrand(dbObject.get("brand").toString());
				p.setDescription(dbObject.get("description").toString());
				p.setImage(dbObject.get("image").toString());
				p.setPrice(dbObject.get("price").toString());
				
				if (isPalindrome(p.getId()) || isPalindrome(p.getBrand()) || isPalindrome(p.getDescription())) {

					p.setDscto("S");
				} else {
					p.setDscto("N");
				}
				product_list.add(p);
			}
			return product_list;

		} catch (MongoSocketOpenException e) {
			System.out.println(e.toString());
			return null;
		}

	}

	public static List getAll() {

		List<Product> product_list = new ArrayList();

		DBCollection coll = MongoFactory.getCollection(db_name, db_collection);


		DBCursor cursor = coll.find();
		while (cursor.hasNext()) {
			DBObject dbObject = cursor.next();

			Product p = new Product();

			p.setId(dbObject.get("id").toString());
			p.setBrand(dbObject.get("brand").toString());
			p.setDescription(dbObject.get("description").toString());
			p.setImage(dbObject.get("image").toString());
			p.setPrice(dbObject.get("price").toString());

			if (isPalindrome(p.getId()) || isPalindrome(p.getBrand()) || isPalindrome(p.getDescription())) {

				p.setDscto("S");
			} else {
				p.setDscto("N");
			}

			product_list.add(p);
		}

		// user_list.size());
		return product_list;
	}

	public static Product FindProductById(String id) {
		try {
			List product_list = new ArrayList();
			DBCollection coll = MongoFactory.getCollection(db_name, db_collection);

			DBObject query = new BasicDBObject("id", Integer.valueOf(id));
			DBCursor cursor = coll.find(query);
			DBObject jo = cursor.one();

			Product p = new Product();
			while (cursor.hasNext()) {
				DBObject dbObject = cursor.next();

				p.setId(dbObject.get("id").toString());
				p.setBrand(dbObject.get("brand").toString());
				p.setDescription(dbObject.get("description").toString());
				p.setImage(dbObject.get("image").toString());
				p.setPrice(dbObject.get("price").toString());

				if (isPalindrome(p.getId()) || isPalindrome(p.getBrand()) || isPalindrome(p.getDescription())) {

					p.setDscto("S");
				} else {
					p.setDscto("N");
				}

			}

			return p;

		} catch (MongoSocketOpenException e) {
			System.out.println(e.toString());
			return null;
		}

	}

	
	public static StringBuffer autocompleteProduct(List<Product> product_list) {

		StringBuffer sb = new StringBuffer();

		for (int i = 0; i < product_list.size(); i++) {
			if (i == 0) {
				sb.append("'" + product_list.get(i).getBrand() + "'");
			}
			if (i > 0) {
				sb.append(",");
				sb.append("'" + product_list.get(i).getBrand() + "'");
			}

		}

		for (int a = 0; a < product_list.size(); a++) {
			sb.append(",");
			sb.append("'" + product_list.get(a).getDescription() + "'");

		}

		return sb;
	}

	public static boolean isPalindrome(String text) {
		String clean = text.replaceAll("\\s+", "").toLowerCase();
		int length = clean.length();
		int forward = 0;
		int backward = length - 1;
		while (backward > forward) {
			char forwardChar = clean.charAt(forward++);
			char backwardChar = clean.charAt(backward--);
			if (forwardChar != backwardChar)
				return false;
		}
		return true;
	}

	public static String writeFaenaCard(List<Product> product_list) {

		if (product_list == null) {
			return "";
		}

		StringBuffer responseTab = new StringBuffer("");

		try {

			for (int i = 0; i < product_list.size(); i++) {

				responseTab.append("<div class=\"col-sm-2 border-dark mb-3\">");
				responseTab.append("<div class=\"card\" style=\"width: 18rem;\">");

				
				responseTab.append("<object type=\"image/svg+xml\" data=\"https://"+product_list.get(i).getImage()+"\">");
				responseTab.append("<img href=\"aple.png\" alt=\"lamanz\">");
				responseTab.append("</object>");
				  

				responseTab.append("<div class=\"card-body\">");

				responseTab.append(
						"<h5 class=\"card-title\">Producto Marca - " + product_list.get(i).getBrand() + " </h5>");
				responseTab.append(
						"<p class=\"card-text\">Descripcion - " + product_list.get(i).getDescription() + "</p>");
				responseTab.append("<p class=\"card-text preciofont\">Precio $ " + product_list.get(i).getPrice() + " </p>");

				if (product_list.get(i).getDscto().equals("S")) {
					responseTab.append("<p class=\"card-text\">50% de descuento</p>");
				}

				responseTab.append("<a href=\"#\" class=\"btn btn-primary\">Comprar</a>");
				responseTab.append("</div>");
				responseTab.append("</div>");
				responseTab.append("</div>");
			}

		} catch (Exception e) {
			System.out.println(e);
			responseTab = null;
		}

		return responseTab.toString();
	}
}
