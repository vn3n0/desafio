package cl.walmart.desafio.model;

import java.io.Serializable;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
public class Product implements Serializable {

	private static final long serialVersionUID = 1L;

	private String id, price;
	private String brand, description, image;
	private String dscto;


	public Product() {
		super();
	}

	public Product(String id, String price, String brand, String description, String image, String dscto) {
		super();
		this.id = id;
		this.price = price;
		this.brand = brand;
		this.description = description;
		this.image = image;
		this.dscto = dscto;
	}

	public String getDscto() {
		return dscto;
	}

	public void setDscto(String dscto) {
		this.dscto = dscto;
	}
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

}