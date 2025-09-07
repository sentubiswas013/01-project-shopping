package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.ProductIdentifierRepository;
import store.example.store.model.ProductIdentifier;
import java.util.List;
import java.util.Optional;

@Service
public class ProductIdentifierService {
    @Autowired
    private ProductIdentifierRepository productIdentifierRepository;

    public List<ProductIdentifier> getAll() {
        return productIdentifierRepository.findAll();
    }

    public Optional<ProductIdentifier> getById(Long id) {
        return productIdentifierRepository.findById(id);
    }

    public ProductIdentifier create(ProductIdentifier productIdentifier) {
        return productIdentifierRepository.save(productIdentifier);
    }

    public ProductIdentifier update(Long id, ProductIdentifier productIdentifier) {
        productIdentifier.setId(id);
        return productIdentifierRepository.save(productIdentifier);
    }

    public void delete(Long id) {
        productIdentifierRepository.deleteById(id);
    }
}

