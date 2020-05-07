package fi.tuni.lazymanatees.blog;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * Object representation of the blog posts.
 */
@Entity
public class BlogObject implements Serializable {

    // Writer of the post.
    public String userName;

    // Content of the post.
    @Column(length = 10000)
    public String blogPost;

    // Title of the post.
    public String blogTitle;

    @Id
    @GeneratedValue
    public int id;

    /**
     * Default constructor.
     */
    public BlogObject() {}

    /**
     * Creates a new blog post from the given values.
     *
     * @param uName Writer of the post.
     * @param post Content of the post.
     * @param title Title of the post.
     */
    public BlogObject(String uName, String post, String title) {
        this.userName = uName;
        this.blogPost = post;
        this.blogTitle = title;
    }

    /**
     * Setter for the post title.
     *
     * @param title New title.
     */
    public void setTitle (String title) {
        this.blogTitle = title;
    }

    /**
     * Setter for the post writer.
     *
     * @param uName New writer.
     */
    public void setUserName(String uName) {
        this.userName = uName;
    }

    /**
     * Setter for the post content.
     *
     * @param post New content.
     */
    public void setBlogPost(String post) {
        this.blogPost = post;
    }

    /**
     * Getter for the post title.
     *
     * @return The post title.
     */
    public String getTitle () {
        return blogTitle;
    }

    /**
     * Getter for the post writer.
     *
     * @return The post writer.
     */
    public String getUserName() {
        return userName;
    }

    /**
     * Getter for the post content.
     *
     * @return The post content.
     */
    public String getBlogPost() {
        return blogPost;
    }

    /**
     * Getter for the post ID.
     *
     * @return The post ID.
     */
    public int getId() {
        return this.id;
    }

    /**
     * Returns a string representation of the post.
     *
     * @return String representation of the post.
     */
    @Override
    public String toString() {
        return "Input{" +
                "id=" + id +
                ", Usarname : " + userName +
                ", Blog Post : " + blogPost +
                '}';
    }
}