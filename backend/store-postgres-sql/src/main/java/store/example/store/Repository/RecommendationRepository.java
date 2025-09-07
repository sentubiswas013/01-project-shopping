package store.example.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.example.store.model.Recommendation;

public interface RecommendationRepository extends JpaRepository<Recommendation, Long> {
    // Custom query methods can be added here
}

