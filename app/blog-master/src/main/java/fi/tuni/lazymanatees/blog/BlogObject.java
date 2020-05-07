package fi.tuni.lazymanatees.blog;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * Object representation of the blog objects.
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

    // Upvote count.
    public int upVote;

    // Downvote count.
    public int downVote;

    // Is the object blogpost or comment.
    public boolean comment;

    // Is the object attached to blog post.
    public int relatedPost;

    @Id
    @GeneratedValue
    public int id;

    /**
     * Default constructor.
     */
    public BlogObject() {}

    /**
     * Creates a new blog post for pre-made blog posts.
     *
     * @param uName Writer of the post.
     * @param post Content of the post.
     * @param title Title of the post.
     * @param upVote Blog posts upvotes.
     * @param downVote Blog posts downvotes.
     */
    public BlogObject(String uName, String post, String title, int upVote, int downVote) {
        this.userName = uName;
        this.blogPost = post;
        this.blogTitle = title;
        this.upVote = upVote;
        this.downVote = downVote;
        this.comment = false;
        this.relatedPost = -1;
    }

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
        this.upVote = 0;
        this.downVote = 0;
        this.comment = false;
        this.relatedPost = -1;
    }

    /**
     * Creates a new comment object from given values
     *
     * @param uName Writer of the post.
     * @param post Content of the post.
     * @param title Title of the post.
     * @param cValue Type of the object. False is blog post, true is a comment.
     * @param postID The ID of parent post that comment is attached to.
     */
    public BlogObject(String uName, String post, String title, boolean cValue, int postID) {
        this.userName = uName;
        this.blogPost = post;
        this.blogTitle = title;
        this.upVote = 0;
        this.downVote = 0;
        this.comment = cValue;
        this.relatedPost = postID;
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
     * Getter for blog title.
     *
     * @return Blog title
     */
    public String getBlogTitle() {
        return blogTitle;
    }

    /**
     * Getter for upvotes
     *
     * @return Amount of upvotes
     */
    public int getUpVote() {
        return upVote;
    }

    /**
     * Getter for downvotes.
     *
     * @return Amount of downvotes.
     */
    public int getDownVote() {
        return downVote;
    }

    /**
     * Getter object type.
     *
     * @return Object type.
     */
    public boolean isComment() {
        return comment;
    }

    /**
     * Getter for related post ID.
     *
     * @return Related post ID.
     */
    public int getRelatedPost() {
        return relatedPost;
    }

    /**
     * Setter for blog title.
     *
     * @param blogTitle Blog title.
     */
    public void setBlogTitle(String blogTitle) {
        this.blogTitle = blogTitle;
    }

    /**
     * Setter for blogpost upvotes. Only needs to add one at a time.
     */
    public void setUpVote() {
        this.upVote += 1;
    }

    /**
     * Setter for blogpost downvotes. Only needs add one at a time
     */
    public void setDownVote() {
        this.downVote += 1;
    }

    /**
     * Setter for type of object. False is a blog post, true a comment object.
     *
     * @param comment type of object.
     */
    public void setComment(boolean comment) {
        this.comment = comment;
    }

    /**
     * Setter for related post ID. Tells to which post the comment is attached to.
     *
     * @param relatedPost ID of parent blog post.
     */
    public void setRelatedPost(int relatedPost) {
        this.relatedPost = relatedPost;
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