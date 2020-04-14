package fi.tuni.lazymanatees.blog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

import javax.annotation.PostConstruct;

@RestController
@RequestMapping("/api")
public class BlogController {

    @Autowired
    DatabaseHandler blogdatabase;

    @PostConstruct
    public void init() {
        blogdatabase.save(new BlogObject("Tester 1", "Random shit", "title1"));
        blogdatabase.save(new BlogObject("Tester 2", "More random shit", "title2"));
        blogdatabase.save(new BlogObject("Tester 3", "Even more random shit", "title3"));
    }

    /**
    @RequestMapping(value = "/blogposts", method = RequestMethod.POST)
    public void newPost(@RequestParam("userName") String userName, @RequestParam("blogPost") String blogPost, @RequestParam("blogTitle") String blogTitle) {
        blogdatabase.save(new BlogObject(userName, blogPost, blogTitle));
    }
    */

    @RequestMapping(value = "/blogposts", method = RequestMethod.POST)
    public @ResponseBody BlogObject newPost(@RequestBody BlogObject blogObject) {
        blogdatabase.save(new BlogObject(blogObject.userName, blogObject.blogPost, blogObject.blogTitle));
        return blogObject;
    }

    @RequestMapping(value = "/blogposts", method = RequestMethod.GET)
    public Iterable<BlogObject> fetchAll() {
        return blogdatabase.findAll();
    }

    @RequestMapping(value = "/blogposts/{id}", method = RequestMethod.GET)
    public BlogObject fetch(@PathVariable("id") int id) {
        Optional<BlogObject> blogObject = blogdatabase.findById(id);
        return blogObject.get();
    }

    /**
    @PostMapping("/save/{uName}{blogpost}")
    private void saveBlogObject(@RequestBody BlogObject o) {
        o.saveBlogObject("uname");
    }
    */
}