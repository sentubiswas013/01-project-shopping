package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.ProductShippingRepository;
import store.example.store.model.ProductShipping;
import java.util.List;
import java.util.Optional;

@Service
public class ProductShippingService {
    @Autowired
    private ProductShippingRepository productShippingRepository;

    public List<ProductShipping> getAll() {
        return productShippingRepository.findAll();
    }

    public Optional<ProductShipping> getById(Long id) {
        return productShippingRepository.findById(id);
    }

    public ProductShipping create(ProductShipping productShipping) {
        return productShippingRepository.save(productShipping);
    }

    public ProductShipping update(Long id, ProductShipping productShipping) {
        productShipping.setId(id);
        return productShippingRepository.save(productShipping);
    }

    public void delete(Long id) {
        productShippingRepository.deleteById(id);
    }
}

