import AxiosInstance from "./AxiosInstance";

const API_URL = 'http://localhost:8080';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

/**
 * Authenticates the user with given username and password.
 */
class AuthenticationService {

    /**
     * Connects to "/basicauth" in order to authenticate the user.
     *
     * RegisterSuccessfulLogin is called if the request is successful.
     */
    executeBasicAuthenticationService(username, password) {
        return AxiosInstance.get(`${API_URL}/basicauth`,
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

    /**
     * Creates a basic authentication token used with the HTTP request.
     */
    createBasicAuthToken(username, password) {
        // return 'Basic ' + window.btoa(username + ":" + password)
        return 'Basic ' + window.btoa(username + ":" + password);
    }

    /**
     * Adds the authentication token to the session storage.
     *
     * @param username given username
     * @param password given password
     */
    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    /**
     * Removes the authentication token from the session storage.
     */
    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    /**
     * Returns true is an authentication token exists in the session storage.
     *
     * @returns {boolean} True if admin is logged in. False otherwise.
     */
    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        return user !== null;
    }

    /**
     * Returns the username of the logged-in user. Always "admin".
     *
     * @returns {string} "admin"
     */
    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user === null) return '';
        return user
    }

    /**
     * Adds interceptors to all axios html requests.
     *
     * This means that the "authentication" header with the given credentials will be added to every request
     * until logged out.
     *
     * @param token
     */
    setupAxiosInterceptors(token) {
        AxiosInstance.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService();