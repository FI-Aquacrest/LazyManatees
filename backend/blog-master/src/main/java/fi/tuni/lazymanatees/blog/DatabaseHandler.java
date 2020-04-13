package fi.tuni.lazymanatees.blog;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DatabaseHandler extends CrudRepository<BlogObject, Integer> {
    List<BlogObject> findByUserNameOrderByIdDesc(String uName);
}

