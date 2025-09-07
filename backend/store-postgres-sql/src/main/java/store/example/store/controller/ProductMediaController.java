package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.ProductMediaRepository;
import store.example.store.model.ProductMedia;
import java.util.List;

@RestController
@RequestMapping("/api/product-media")
public class ProductMediaController {
    @Autowired
    private ProductMediaRepository productMediaRepository;

    @GetMapping
    public List<ProductMedia> getAll() {
        return productMediaRepository.findAll();
    }

    @GetMapping("/{id}")
    public ProductMedia getById(@PathVariable Long id) {
        return productMediaRepository.findById(id).orElse(null);
    }

    @PostMapping
    public ProductMedia create(@RequestBody ProductMedia productMedia) {
        return productMediaRepository.save(productMedia);
    }

    @PutMapping("/{id}")
    public ProductMedia update(@PathVariable Long id, @RequestBody ProductMedia productMedia) {
        productMedia.setId(id);
        return productMediaRepository.save(productMedia);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productMediaRepository.deleteById(id);
    }
}

