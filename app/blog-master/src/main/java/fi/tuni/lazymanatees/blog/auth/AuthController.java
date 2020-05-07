package fi.tuni.lazymanatees.blog.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Authenticates the user.
 *
 * CrossOrigin requests do not work despite the annotation.
 */
@CrossOrigin(origins={ "http://localhost:8080", "http://localhost:3000" })
@RestController
public class AuthController {

    /**
     * Authenticates the user.
     *
     * @return AuthBean signaling a successful authentication.
     */
    @GetMapping(path = "/basicauth")
    public AuthBean authenticate() {
        return new AuthBean("You are authenticated");
    }
}
