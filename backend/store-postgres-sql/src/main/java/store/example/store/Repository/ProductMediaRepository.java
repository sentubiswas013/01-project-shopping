package store.example.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.example.store.model.ProductMedia;

public interface ProductMediaRepository extends JpaRepository<ProductMedia, Long> {
    // Custom query methods can be added here
}

