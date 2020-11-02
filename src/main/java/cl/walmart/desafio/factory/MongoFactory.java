package cl.walmart.desafio.factory;

//import org.apache.log4j.Logger;

import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.MongoException;
import com.mongodb.MongoSocketOpenException;
import com.mongodb.client.MongoDatabase;

@SuppressWarnings("deprecation")
public class MongoFactory {

	// private static Logger log = Logger.getLogger(MongoFactory.class);

	private static Mongo mongo;

	private MongoFactory() {
	}

	// Returns a mongo instance.
	public static Mongo getMongo() {
		int port_no = 27017;
		String hostname = "[::1]";
		if (mongo == null) {
			try {
				mongo = new Mongo(hostname, port_no);
			} catch (MongoException ex) {
				// log.error(ex);
				System.out.println(ex.toString());
			}
		}
		return mongo;
	}

	// Fetches the mongo database.
	public static DB getDB(String db_name) {
		return getMongo().getDB(db_name);
	}

	// Fetches the collection from the mongo database.
	public static DBCollection getCollectionOLD(String db_name, String db_collection) {
		return getDB(db_name).getCollection(db_collection);
	}

	public static DBCollection getCollection(String db_name, String db_collection) {

		try {
			/*String connection = String.format("mongodb://%s:%s@%s/%s", "productListUser", "productListPassword",
					"[::1]:27017", "admin");

			MongoClientURI MongoClientURI = new MongoClientURI(connection);

			MongoClient mongoClient = new MongoClient(MongoClientURI);

			DB database = mongoClient.getDB(db_collection);
			DBCollection collection = database.getCollection(db_name);*/
			

			MongoClientURI uri = new MongoClientURI(
			    "mongodb+srv://productListUser:productListPassword@cluster0.zwka8.mongodb.net/<dbname>?retryWrites=true&w=majority");
			
			MongoClient mongoClient = new MongoClient(uri);
			DB database = mongoClient.getDB(db_collection);
			DBCollection collection = database.getCollection(db_name);


			return collection;
		} catch (MongoSocketOpenException e) {
			System.out.println(e.toString());
			return null;
		}

	}
}