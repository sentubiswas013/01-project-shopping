package store.example.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.example.store.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    // Custom query methods can be added here
}

