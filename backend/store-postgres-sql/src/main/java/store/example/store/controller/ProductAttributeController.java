package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.ProductAttributeRepository;
import store.example.store.model.ProductAttribute;
import java.util.List;

@RestController
@RequestMapping("/api/product-attributes")
public class ProductAttributeController {
    @Autowired
    private ProductAttributeRepository productAttributeRepository;

    @GetMapping
    public List<ProductAttribute> getAll() {
        return productAttributeRepository.findAll();
    }

    @GetMapping("/{id}")
    public ProductAttribute getById(@PathVariable Long id) {
        return productAttributeRepository.findById(id).orElse(null);
    }

    @PostMapping
    public ProductAttribute create(@RequestBody ProductAttribute productAttribute) {
        if (productAttribute.getProduct() == null) {
            throw new IllegalArgumentException("Product is required for product attribute");
        }
        return productAttributeRepository.save(productAttribute);
    }

    @PutMapping("/{id}")
    public ProductAttribute update(@PathVariable Long id, @RequestBody ProductAttribute productAttribute) {
        productAttribute.setId(id);
        return productAttributeRepository.save(productAttribute);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productAttributeRepository.deleteById(id);
    }
}

