package fi.tuni.lazymanatees.blog.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins={ "http://localhost:3000", "http://localhost:8080" })
@RestController
public class AuthController {

    @GetMapping(path = "/basicauth")
    public AuthBean authenticate() {
        return new AuthBean("You are authenticated");
    }
}
