package store.example.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.example.store.model.ProductImage;

public interface ProductImageRepository extends JpaRepository<ProductImage, Long> {
    // Custom query methods can be added here
}

