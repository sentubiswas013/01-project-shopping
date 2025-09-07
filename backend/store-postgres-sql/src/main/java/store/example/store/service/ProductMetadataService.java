package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.ProductMetadataRepository;
import store.example.store.model.ProductMetadata;
import java.util.List;
import java.util.Optional;

@Service
public class ProductMetadataService {
    @Autowired
    private ProductMetadataRepository productMetadataRepository;

    public List<ProductMetadata> getAll() {
        return productMetadataRepository.findAll();
    }

    public Optional<ProductMetadata> getById(Long id) {
        return productMetadataRepository.findById(id);
    }

    public ProductMetadata create(ProductMetadata productMetadata) {
        return productMetadataRepository.save(productMetadata);
    }

    public ProductMetadata update(Long id, ProductMetadata productMetadata) {
        productMetadata.setId(id);
        return productMetadataRepository.save(productMetadata);
    }

    public void delete(Long id) {
        productMetadataRepository.deleteById(id);
    }
}

