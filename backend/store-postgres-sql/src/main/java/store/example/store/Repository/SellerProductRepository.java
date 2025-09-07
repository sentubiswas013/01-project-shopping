package store.example.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.example.store.model.SellerProduct;

public interface SellerProductRepository extends JpaRepository<SellerProduct, Long> {
    // Custom query methods can be added here
}

