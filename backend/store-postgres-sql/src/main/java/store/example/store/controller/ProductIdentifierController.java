package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.ProductIdentifierRepository;
import store.example.store.model.ProductIdentifier;
import java.util.List;

@RestController
@RequestMapping("/api/product-identifiers")
public class ProductIdentifierController {
    @Autowired
    private ProductIdentifierRepository productIdentifierRepository;

    @GetMapping
    public List<ProductIdentifier> getAll() {
        return productIdentifierRepository.findAll();
    }

    @GetMapping("/{id}")
    public ProductIdentifier getById(@PathVariable Long id) {
        return productIdentifierRepository.findById(id).orElse(null);
    }

    @PostMapping
    public ProductIdentifier create(@RequestBody ProductIdentifier productIdentifier) {
        return productIdentifierRepository.save(productIdentifier);
    }

    @PutMapping("/{id}")
    public ProductIdentifier update(@PathVariable Long id, @RequestBody ProductIdentifier productIdentifier) {
        productIdentifier.setId(id);
        return productIdentifierRepository.save(productIdentifier);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productIdentifierRepository.deleteById(id);
    }
}

