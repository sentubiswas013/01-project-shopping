package store.example.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.example.store.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    // Custom query methods can be added here
}

