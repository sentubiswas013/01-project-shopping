package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.ProductImageRepository;
import store.example.store.model.ProductImage;
import java.util.List;

@RestController
@RequestMapping("/api/product-images")
public class ProductImageController {
    @Autowired
    private ProductImageRepository productImageRepository;

    @GetMapping
    public List<ProductImage> getAll() {
        return productImageRepository.findAll();
    }

    @GetMapping("/{id}")
    public ProductImage getById(@PathVariable Long id) {
        return productImageRepository.findById(id).orElse(null);
    }

    @PostMapping
    public ProductImage create(@RequestBody ProductImage productImage) {
        return productImageRepository.save(productImage);
    }

    @PutMapping("/{id}")
    public ProductImage update(@PathVariable Long id, @RequestBody ProductImage productImage) {
        productImage.setId(id);
        return productImageRepository.save(productImage);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productImageRepository.deleteById(id);
    }
}

