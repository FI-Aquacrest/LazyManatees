package fi.tuni.lazymanatees.blog;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class BlogObject implements Serializable {

    public String userName;
    public String blogPost;
    public String blogTitle;
    //

    @Id
    @GeneratedValue
    public int id;

    public BlogObject() {
    }

    public BlogObject(String uName, String post, String title) {
        this.userName = uName;
        this.blogPost = post;
        this.blogTitle = title;
    }

    //Test...
    public void saveBlogObject(String uName, String post, String title) {
        this.userName = uName;
        this.blogPost = post;
        this.blogTitle = title;
    }

    public void setTitle (String title) {
        this.blogTitle = title;
    }

    public void setUserName(String uName) {
        this.userName = uName;
    }

    public void setBlogPost(String post) {
        this.blogPost = post;
    }

    public String getTitle () {
        return blogTitle;
    }

    public String getUserName() {
        return userName;
    }

    public String getBlogPost() {
        return blogPost;
    }

    public int getId() {
        return this.id;
    }

    @Override
    public String toString() {
        return "Input{" +
                "id=" + id +
                ", Usarname : " + userName +
                ", Blog Post : " + blogPost +
                '}';
    }
}