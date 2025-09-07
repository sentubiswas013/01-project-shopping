package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.ProductBundleRepository;
import store.example.store.model.ProductBundle;
import java.util.List;
import java.util.Optional;

@Service
public class ProductBundleService {
    @Autowired
    private ProductBundleRepository productBundleRepository;

    public List<ProductBundle> getAll() {
        return productBundleRepository.findAll();
    }

    public Optional<ProductBundle> getById(Long id) {
        return productBundleRepository.findById(id);
    }

    public ProductBundle create(ProductBundle productBundle) {
        return productBundleRepository.save(productBundle);
    }

    public ProductBundle update(Long id, ProductBundle productBundle) {
        productBundle.setId(id);
        return productBundleRepository.save(productBundle);
    }

    public void delete(Long id) {
        productBundleRepository.deleteById(id);
    }
}

