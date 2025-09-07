package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.ProductPricingRepository;
import store.example.store.model.ProductPricing;
import java.util.List;
import java.util.Optional;

@Service
public class ProductPricingService {
    @Autowired
    private ProductPricingRepository productPricingRepository;

    public List<ProductPricing> getAll() {
        return productPricingRepository.findAll();
    }

    public Optional<ProductPricing> getById(Long id) {
        return productPricingRepository.findById(id);
    }

    public ProductPricing create(ProductPricing productPricing) {
        return productPricingRepository.save(productPricing);
    }

    public ProductPricing update(Long id, ProductPricing productPricing) {
        productPricing.setId(id);
        return productPricingRepository.save(productPricing);
    }

    public void delete(Long id) {
        productPricingRepository.deleteById(id);
    }
}

