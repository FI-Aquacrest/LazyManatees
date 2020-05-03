package fi.tuni.lazymanatees.blog;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
public class WebConfig extends WebSecurityConfigurerAdapter implements WebMvcConfigurer {
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.httpBasic()
				.and()
			.csrf().disable()
			.authorizeRequests()
				.antMatchers(HttpMethod.GET, "/api/blogposts/**").permitAll()
				.antMatchers(HttpMethod.POST, "/api/blogposts").authenticated()
				.antMatchers(HttpMethod.PUT, "/api/blogposts").authenticated()
				.antMatchers(HttpMethod.DELETE, "/api/blogposts").authenticated();
	}

	@Bean
	@Override
	public UserDetailsService userDetailsService() {
		UserDetails admin =
			 User.withDefaultPasswordEncoder()
				.username("admin")
				.password("admin")
				.roles("ADMIN")
				.build();

		return new InMemoryUserDetailsManager(admin);
	}

	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/{spring:\\w+}")
				.setViewName("forward:/");
	}
}