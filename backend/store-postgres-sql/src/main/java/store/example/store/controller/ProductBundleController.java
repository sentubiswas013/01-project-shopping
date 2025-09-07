package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.ProductBundleRepository;
import store.example.store.model.ProductBundle;
import java.util.List;

@RestController
@RequestMapping("/api/product-bundles")
public class ProductBundleController {
    @Autowired
    private ProductBundleRepository productBundleRepository;

    @GetMapping
    public List<ProductBundle> getAll() {
        return productBundleRepository.findAll();
    }

    @GetMapping("/{id}")
    public ProductBundle getById(@PathVariable Long id) {
        return productBundleRepository.findById(id).orElse(null);
    }

    @PostMapping
    public ProductBundle create(@RequestBody ProductBundle productBundle) {
        return productBundleRepository.save(productBundle);
    }

    @PutMapping("/{id}")
    public ProductBundle update(@PathVariable Long id, @RequestBody ProductBundle productBundle) {
        productBundle.setId(id);
        return productBundleRepository.save(productBundle);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productBundleRepository.deleteById(id);
    }
}

