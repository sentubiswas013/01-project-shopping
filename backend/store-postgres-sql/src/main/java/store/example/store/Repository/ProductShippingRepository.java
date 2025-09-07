package store.example.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.example.store.model.ProductShipping;

public interface ProductShippingRepository extends JpaRepository<ProductShipping, Long> {
    // Custom query methods can be added here
}

