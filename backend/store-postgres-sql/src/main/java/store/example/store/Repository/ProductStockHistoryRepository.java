package store.example.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.example.store.model.ProductStockHistory;

public interface ProductStockHistoryRepository extends JpaRepository<ProductStockHistory, Long> {
    // Custom query methods can be added here
}

