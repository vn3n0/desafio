package cl.walmart.desafio.test;

import static org.hamcrest.MatcherAssert.assertThat;

import java.net.UnknownHostException;

import static org.hamcrest.CoreMatchers.*;

import org.junit.Before;
import org.junit.Test;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

import cl.walmart.desafio.model.Product;

import static org.hamcrest.CoreMatchers.is;

public class ProductServiceTest {

	@Test
	public void shouldCreateANewMongoClientConnectedToLocalhost() throws Exception {
		MongoClient mongoClient = null;

		assertThat(mongoClient, is(notNullValue()));
	}

	@Test
	public void shouldGetACollectionFromTheDatabase() throws Exception {
		DBCollection collection = null;

		assertThat(collection, is(notNullValue()));
	}

	@Test(expected = Exception.class)
	public void shouldNotBeAbleToUseMongoClientAfterItHasBeenClosed() throws UnknownHostException {
		MongoClient mongoClient = new MongoClient();
		mongoClient.getDB("products").getCollection("promotions").insert(new BasicDBObject("field", "value"));
	}

	@Before
	public void setUp() throws UnknownHostException {
		/*
		 * MongoClient mongoClient = new MongoClient(new
		 * MongoClientURI("mongodb://localhost:27017")); database =
		 * mongoClient.getDB("Examples"); collection = database.getCollection("people");
		 */

		String connection = String.format("mongodb://%s:%s@%s/%s", "productListUser", "productListPassword",
				"[::1]:27017", "admin");

		MongoClientURI MongoClientURI = new MongoClientURI(connection);

		MongoClient mongoClient = new MongoClient(MongoClientURI);

		DB database = mongoClient.getDB("products");
		DBCollection collection = database.getCollection("promotions");
	}

}