package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.ProductSubscriptionRepository;
import store.example.store.model.ProductSubscription;
import java.util.List;

@RestController
@RequestMapping("/api/product-subscriptions")
public class ProductSubscriptionController {
    @Autowired
    private ProductSubscriptionRepository productSubscriptionRepository;

    @GetMapping
    public List<ProductSubscription> getAll() {
        return productSubscriptionRepository.findAll();
    }

    @GetMapping("/{id}")
    public ProductSubscription getById(@PathVariable Long id) {
        return productSubscriptionRepository.findById(id).orElse(null);
    }

    @PostMapping
    public ProductSubscription create(@RequestBody ProductSubscription productSubscription) {
        return productSubscriptionRepository.save(productSubscription);
    }

    @PutMapping("/{id}")
    public ProductSubscription update(@PathVariable Long id, @RequestBody ProductSubscription productSubscription) {
        productSubscription.setId(id);
        return productSubscriptionRepository.save(productSubscription);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productSubscriptionRepository.deleteById(id);
    }
}

