package store.example.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.example.store.model.Inventory;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {
    // Custom query methods can be added here
}

