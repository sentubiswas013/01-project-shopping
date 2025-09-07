package store.example.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.example.store.model.ProductQuestion;

public interface ProductQuestionRepository extends JpaRepository<ProductQuestion, Long> {
    // Custom query methods can be added here
}

