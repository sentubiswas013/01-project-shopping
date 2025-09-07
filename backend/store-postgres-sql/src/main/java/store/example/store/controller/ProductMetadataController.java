package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.ProductMetadataRepository;
import store.example.store.model.ProductMetadata;
import java.util.List;

@RestController
@RequestMapping("/api/product-metadata")
public class ProductMetadataController {
    @Autowired
    private ProductMetadataRepository productMetadataRepository;

    @GetMapping
    public List<ProductMetadata> getAll() {
        return productMetadataRepository.findAll();
    }

    @GetMapping("/{id}")
    public ProductMetadata getById(@PathVariable Long id) {
        return productMetadataRepository.findById(id).orElse(null);
    }

    @PostMapping
    public ProductMetadata create(@RequestBody ProductMetadata productMetadata) {
        return productMetadataRepository.save(productMetadata);
    }

    @PutMapping("/{id}")
    public ProductMetadata update(@PathVariable Long id, @RequestBody ProductMetadata productMetadata) {
        productMetadata.setId(id);
        return productMetadataRepository.save(productMetadata);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productMetadataRepository.deleteById(id);
    }
}

