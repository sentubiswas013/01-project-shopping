package store.example.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.example.store.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    // Custom query methods can be added here
}

