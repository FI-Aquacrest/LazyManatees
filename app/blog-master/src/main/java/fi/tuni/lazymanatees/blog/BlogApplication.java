package fi.tuni.lazymanatees.blog;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class BlogApplication implements CommandLineRunner {

	@Autowired
	DatabaseHandler blogdatabase;

	public static void main(String[] args) {
		SpringApplication.run(BlogApplication.class, args);
	}

	@Override
	public void run(String ... args) throws Exception {

		//Tests for terminalprint
		//blogdatabase.findAll().forEach(System.out::println);
		blogdatabase.save(new BlogObject("sda","afsaf", "title3"));
	}

	@Bean
	public CommandLineRunner instructions() {
		return (String... args) -> {
			Log logger = LogFactory.getLog(BlogApplication.class);
			logger.info("This is a test!");

		};
	}
}
