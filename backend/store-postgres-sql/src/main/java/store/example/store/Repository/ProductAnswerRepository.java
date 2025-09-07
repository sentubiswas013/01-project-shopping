package store.example.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.example.store.model.ProductAnswer;

public interface ProductAnswerRepository extends JpaRepository<ProductAnswer, Long> {
    // Custom query methods can be added here
}

