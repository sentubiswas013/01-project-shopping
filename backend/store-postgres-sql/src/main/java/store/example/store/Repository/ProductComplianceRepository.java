package store.example.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.example.store.model.ProductCompliance;

public interface ProductComplianceRepository extends JpaRepository<ProductCompliance, Long> {
    // Custom query methods can be added here
}

