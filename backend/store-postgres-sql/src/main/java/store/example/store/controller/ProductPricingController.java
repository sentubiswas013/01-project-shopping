package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.ProductPricingRepository;
import store.example.store.model.ProductPricing;
import java.util.List;

@RestController
@RequestMapping("/api/product-pricing")
public class ProductPricingController {
    @Autowired
    private ProductPricingRepository productPricingRepository;

    @GetMapping
    public List<ProductPricing> getAll() {
        return productPricingRepository.findAll();
    }

    @GetMapping("/{id}")
    public ProductPricing getById(@PathVariable Long id) {
        return productPricingRepository.findById(id).orElse(null);
    }

    @PostMapping
    public ProductPricing create(@RequestBody ProductPricing productPricing) {
        return productPricingRepository.save(productPricing);
    }

    @PutMapping("/{id}")
    public ProductPricing update(@PathVariable Long id, @RequestBody ProductPricing productPricing) {
        productPricing.setId(id);
        return productPricingRepository.save(productPricing);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productPricingRepository.deleteById(id);
    }
}

