package store.example.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.example.store.model.ProductSubscription;

public interface ProductSubscriptionRepository extends JpaRepository<ProductSubscription, Long> {
    // Custom query methods can be added here
}

