package fi.tuni.lazymanatees.blog.auth;

/**
 * Is returned if authentication with "/basicauth" is successful.
 */
public class AuthBean {
    private String message;

    /**
     * Prepares the authentication message.
     *
     * @param message of a successful authentication.
     */
    public AuthBean(String message) {
        this.message = message;
    }

    /**
     * Returns the message.
     *
     * @return message of a successful authentication.
     */
    public String getMessage() {
        return message;
    }

    /**
     * Sets the message.
     *
     * @param message of a successful authentication.
     */
    public void setMessage(String message) {
        this.message = message;
    }
}
