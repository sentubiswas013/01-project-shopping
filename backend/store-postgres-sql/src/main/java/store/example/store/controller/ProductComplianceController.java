package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.ProductComplianceRepository;
import store.example.store.model.ProductCompliance;
import java.util.List;

@RestController
@RequestMapping("/api/product-compliances")
public class ProductComplianceController {
    @Autowired
    private ProductComplianceRepository productComplianceRepository;

    @GetMapping
    public List<ProductCompliance> getAll() {
        return productComplianceRepository.findAll();
    }

    @GetMapping("/{id}")
    public ProductCompliance getById(@PathVariable Long id) {
        return productComplianceRepository.findById(id).orElse(null);
    }

    @PostMapping
    public ProductCompliance create(@RequestBody ProductCompliance productCompliance) {
        return productComplianceRepository.save(productCompliance);
    }

    @PutMapping("/{id}")
    public ProductCompliance update(@PathVariable Long id, @RequestBody ProductCompliance productCompliance) {
        productCompliance.setId(id);
        return productComplianceRepository.save(productCompliance);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productComplianceRepository.deleteById(id);
    }
}

