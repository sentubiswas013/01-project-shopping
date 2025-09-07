package store.example.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.example.store.model.ProductAttribute;

public interface ProductAttributeRepository extends JpaRepository<ProductAttribute, Long> {
    // Custom query methods can be added here
}

