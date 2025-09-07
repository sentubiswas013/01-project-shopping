package store.example.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.example.store.model.AdClick;

public interface AdClickRepository extends JpaRepository<AdClick, Long> {
    // Custom query methods can be added here
}

