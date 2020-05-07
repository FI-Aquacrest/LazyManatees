package fi.tuni.lazymanatees.blog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;

/**
 * Controls the URL mapping and handles HTML requests.
 *
 * Cross-origin requests not working.
 */
@CrossOrigin(origins={ "http://localhost:8080", "http://localhost:3000" })
@RestController
@RequestMapping("/api")
public class BlogController {

    @Autowired
    DatabaseHandler blogdatabase;

    /**
     * Fills the database with pre-made blog posts.
     */
    @PostConstruct
    public void init() {
        blogdatabase.save(new BlogObject("xXx_Comrade_xXX", "Join the Glorius Revolution!" + "\n" + "All members of the working classes must seize the means of production.", "Call for all Comrades"));

        blogdatabase.save(new BlogObject("Lenin", "The question of the state is now acquiring particular importance both in theory and in practical politics. The imperialist war has immensely accelerated and intensified the process of transformation of monopoly capitalism into state-monopoly capitalism. The monstrous oppression of the working people by the state, which is merging more and more with the all-powerful capitalist associations, is becoming increasingly monstrous. The advanced countries - we mean their hinterland - are becoming military convict prisons for the workers.\n" + "\n" + "The unprecedented horrors and miseries of the protracted war are making the people's position unbearable and increasing their anger. The world proletarian revolution is clearly maturing. The question of its relation to the state is acquiring practical importance.", "The State and Revolution pt1"));
        blogdatabase.save(new BlogObject("Lenin", "The elements of opportunism that accumulated over the decades of comparatively peaceful development have given rise to the trend of social-chauvinism which dominated the official socialist parties throughout the world. This trend - socialism in words and chauvinism in deeds is conspicuous for the base, servile adaptation of the \"leaders of socialism\" to the interests not only of \"their\" national bourgeoisie, but of \"their\" state, for the majority of the so-called Great Powers have long been exploiting and enslaving a whole number of small and weak nations. And the imperialist war is a war for the division and redivision of this kind of booty. The struggle to free the working people from the influence of the bourgeoisie in general, and of the imperialist bourgeoisie in particular, is impossible without a struggle against opportunist prejudices concerning the \"state\".", "The State and Revolution pt2"));
        blogdatabase.save(new BlogObject("Lenin", "First of all we deal specially with the one who is chiefly responsible for these distortions, Karl Kautsky, the best-known leader of the Second International (1889-1914), which has met with such miserable bankruptcy in the present war. Lastly, we sum up the main results of the experience of the Russian revolutions of 1905 and particularly of 1917. Apparently, the latter is now (early August 1917) completing the first stage of its development; but this revolution as a whole can only be understood as a link in a chain of socialist proletarian revolutions being caused by the imperialist war. The question of the relation of the socialist proletarian revolution to the state, therefore, is acquiring not only practical political importance, but also the significance of a most urgent problem of the day, the problem of explaining to the masses what they will have to do before long to free themselves from capitalist tyranny.", "The State and Revolution pt3"));

        blogdatabase.save(new BlogObject("Karl Marx", "Freeman and slave, patrician and plebeian, lord and serf, guildmaster and journeyman, in a word, oppressor and oppressed, stood in constant opposition to one another, carried on an uninterrupted, now hidden, now open fight, that each time ended, either in the revolutionary reconstitution of society at large, or in the common ruin of the contending classes.", "The Communist Manifesto pt1"));
        blogdatabase.save(new BlogObject("Karl Marx", "The bourgeoisie, wherever it has got the upper hand, has put an end to all feudal, patriarchal, idyllic relations. It has pitilessly torn asunder the motley feudal ties that bound man to his 'natural superiors,' and has left remaining no other nexus between man and man than naked self-interest, callous 'cash payment.' It has drowned the most heavenly ecstasies of religious fervor, of chivalrous enthusiasm, of philistine sentimentalism, in the icy water of egotistical calculation. It has resolved personal worth into exchange value, and in place of the numberless indefeasible chartered freedoms, has set up that single, unconscionable freedom—Free Trade. In one word, for exploitation, veiled by religious and political illusions, it has substituted naked, shameless, direct, brutal exploitation.", "The Communist Manifesto pt2"));
        blogdatabase.save(new BlogObject("Karl Marx", "The bourgeoisie has stripped of its halo every occupation hitherto honored and looked up to with reverent awe. It has converted the physician, the lawyer, the priest, the poet, the man of science, into its paid wage laborers." + "\n" + "The bourgeoisie has torn away from the family its sentimental veil, and has reduced the family relation to a mere money relation." + "\n" + "Let the ruling classes tremble at a Communistic revolution. The proletarians have nothing to lose but their chains. They have a world to win." + "\n" + "Workingmen of all countries unite!", "The Communist Manifesto pt3"));
    }

    /**
     * Saves the received blogObject to the database.
     *
     * @param blogObject Blog post received as JSON input.
     * @return The saves blogObject for debugging purposes.
     */
    @RequestMapping(value = "/blogposts", method = RequestMethod.POST)
    public @ResponseBody BlogObject newPost(@RequestBody BlogObject blogObject) {
        blogdatabase.save(new BlogObject(blogObject.userName, blogObject.blogPost, blogObject.blogTitle));
        return blogObject;
    }

    /**
     * Returns all blog posts from the database.
     *
     * @return list containing all blog objects.
     */
    @RequestMapping(value = "/blogposts", method = RequestMethod.GET)
    public Iterable<BlogObject> fetchAll() {
        return blogdatabase.findAll();
    }

    /**
     * Returns the blog post with the given ID.
     *
     * @param id of the blog post to be returned.
     * @return The requested blog post.
     */
    @RequestMapping(value = "/blogposts/{id}", method = RequestMethod.GET)
    public BlogObject get(@PathVariable("id") int id) {
        return blogdatabase.findById(id).get();
    }

    /**
     * Updates a blog post in the database based on ID.
     *
     * @param blogObject Updated blog post that will replace the old post with the same ID.
     * @return The updated blog post for debugging purposes.
     */
    @RequestMapping(value = "/blogposts", method = RequestMethod.PUT)
    public BlogObject update(@RequestBody BlogObject blogObject) {
        blogdatabase.save(blogObject);
        return blogObject;
    }

    /**
     * Deleted the blog post given as a parameter from the database.
     *
     * @param blogObject To delete from the database.
     */
    @RequestMapping(value = "/blogposts", method = RequestMethod.DELETE)
    public @ResponseBody void delete(@RequestBody BlogObject blogObject) {
        blogdatabase.delete(blogObject);
    }

    /**
     * Deletes a blog object with the given ID from the database.
     *
     * @param id of the post to delete.
     */
    @RequestMapping(value = "/blogposts/{id}", method = RequestMethod.DELETE)
    public @ResponseBody void delete(@PathVariable("id") int id) {
        blogdatabase.deleteById(id);
    }
}
