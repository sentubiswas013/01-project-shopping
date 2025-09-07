package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.ProductSubscriptionRepository;
import store.example.store.model.ProductSubscription;
import java.util.List;
import java.util.Optional;

@Service
public class ProductSubscriptionService {
    @Autowired
    private ProductSubscriptionRepository productSubscriptionRepository;

    public List<ProductSubscription> getAll() {
        return productSubscriptionRepository.findAll();
    }

    public Optional<ProductSubscription> getById(Long id) {
        return productSubscriptionRepository.findById(id);
    }

    public ProductSubscription create(ProductSubscription productSubscription) {
        return productSubscriptionRepository.save(productSubscription);
    }

    public ProductSubscription update(Long id, ProductSubscription productSubscription) {
        productSubscription.setId(id);
        return productSubscriptionRepository.save(productSubscription);
    }

    public void delete(Long id) {
        productSubscriptionRepository.deleteById(id);
    }
}

