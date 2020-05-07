package fi.tuni.lazymanatees.blog;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

/**
 * Starts up the database and prints instructions to the console.
 */
@SpringBootApplication
public class BlogApplication implements CommandLineRunner {

	@Autowired
	DatabaseHandler blogdatabase;

	/**
	 * Starts the spring-boot application.
	 */
	public static void main(String[] args) {
		SpringApplication.run(BlogApplication.class, args);
	}

	/**
	 * Used for debugging. No app-specific functions.
	 */
	@Override
	public void run(String ... args) throws Exception {

		//Tests for terminalprint
		//blogdatabase.findAll().forEach(System.out::println);
		//blogdatabase.save(new BlogObject("sda","afsaf", "title3"));
	}

	/**
	 * Prints instructions to the console.
	 */
	@Bean
	public CommandLineRunner instructions() {
		return (String... args) -> {
			Log logger = LogFactory.getLog(BlogApplication.class);
			logger.info("");
			logger.info("Authors: Valtteri Peltonen, Sami Pitkänen, Tero Taipalus");
			logger.info("");
			logger.info("The app is now running at http://localhost:8080/");
			logger.info("You can view the contents of the database at http://localhost:8080/api/blogposts");
			logger.info("");
			logger.info("Admin can log in using the following credentials:");
			logger.info("Username: admin");
			logger.info("Password: admin");
			logger.info("");
			logger.info("Here are some cURL commands for backend testing:");
			logger.info("curl --request GET http://localhost:8080/api/blogposts (get all blog posts)");
			logger.info("curl --user \"admin:admin\" --request DELETE http://localhost:8080/api/blogposts/3 " +
					"(delete post with an ID of 3)");
			logger.info("curl --user \"admin:admin\" --header \"Content-Type: application/json\" --request POST " +
					"--data \"{\\\"userName\\\":\\\"Author\\\",\\\"blogPost\\\":\\\"Hello World!\\\",\\\"blogTitle" +
					"\\\":\\\"A most Joyous Greeting\\\"}\" http://localhost:8080/api/blogposts " +
					"(POST command for windows)");
			logger.info("curl --user \"admin:admin\" --header \"Content-Type: application/json\" --request POST " +
					"--data '{\"userName\":\"Author\",\"blogPost\":\"Hello World!\",\"blogTitle\":\"A most Joyous " +
					"Greeting\"}' http://localhost:8080/api/blogposts (POST command for non-windows)");
			logger.info("");
		};
	}
}
