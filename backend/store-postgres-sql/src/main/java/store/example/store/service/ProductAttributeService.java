package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.ProductAttributeRepository;
import store.example.store.model.ProductAttribute;
import java.util.List;
import java.util.Optional;

@Service
public class ProductAttributeService {
    @Autowired
    private ProductAttributeRepository productAttributeRepository;

    public List<ProductAttribute> getAll() {
        return productAttributeRepository.findAll();
    }

    public Optional<ProductAttribute> getById(Long id) {
        return productAttributeRepository.findById(id);
    }

    public ProductAttribute create(ProductAttribute productAttribute) {
        return productAttributeRepository.save(productAttribute);
    }

    public ProductAttribute update(Long id, ProductAttribute productAttribute) {
        productAttribute.setId(id);
        return productAttributeRepository.save(productAttribute);
    }

    public void delete(Long id) {
        productAttributeRepository.deleteById(id);
    }
}

