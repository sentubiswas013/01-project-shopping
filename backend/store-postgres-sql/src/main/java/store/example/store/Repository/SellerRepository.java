package store.example.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.example.store.model.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {
    // Custom query methods can be added here
}

