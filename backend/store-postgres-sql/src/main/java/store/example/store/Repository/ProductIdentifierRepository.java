package store.example.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.example.store.model.ProductIdentifier;

public interface ProductIdentifierRepository extends JpaRepository<ProductIdentifier, Long> {
    // Custom query methods can be added here
}

