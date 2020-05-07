package fi.tuni.lazymanatees.blog;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

/**
 * CrudRepository for the BlogObjects.
 */
public interface DatabaseHandler extends CrudRepository<BlogObject, Integer> {
    List<BlogObject> findByUserNameOrderByIdDesc(String uName);

    Optional<BlogObject> findById(int id);
}