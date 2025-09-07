package store.example.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.example.store.model.ProductBundle;

public interface ProductBundleRepository extends JpaRepository<ProductBundle, Long> {
    // Custom query methods can be added here
}

