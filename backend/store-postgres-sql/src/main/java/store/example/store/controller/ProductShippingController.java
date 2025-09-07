package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.ProductShippingRepository;
import store.example.store.model.ProductShipping;
import java.util.List;

@RestController
@RequestMapping("/api/product-shipping")
public class ProductShippingController {
    @Autowired
    private ProductShippingRepository productShippingRepository;

    @GetMapping
    public List<ProductShipping> getAll() {
        return productShippingRepository.findAll();
    }

    @GetMapping("/{id}")
    public ProductShipping getById(@PathVariable Long id) {
        return productShippingRepository.findById(id).orElse(null);
    }

    @PostMapping
    public ProductShipping create(@RequestBody ProductShipping productShipping) {
        return productShippingRepository.save(productShipping);
    }

    @PutMapping("/{id}")
    public ProductShipping update(@PathVariable Long id, @RequestBody ProductShipping productShipping) {
        productShipping.setId(id);
        return productShippingRepository.save(productShipping);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productShippingRepository.deleteById(id);
    }
}

