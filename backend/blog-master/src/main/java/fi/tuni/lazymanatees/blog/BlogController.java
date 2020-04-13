package fi.tuni.lazymanatees.blog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(value = "/blogposts", method = RequestMethod.GET)
    public Iterable<BlogObject> fetch() {
        return blogdatabase.findAll();
    }

    /**
    @PostMapping("/save/{uName}{blogpost}")
    private void saveBlogObject(@RequestBody BlogObject o) {
        o.saveBlogObject("uname");
    }
    */
}
