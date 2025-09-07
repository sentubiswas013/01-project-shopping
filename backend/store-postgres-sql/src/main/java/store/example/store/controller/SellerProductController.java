package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.SellerProductRepository;
import store.example.store.model.SellerProduct;
import java.util.List;

@RestController
@RequestMapping("/api/seller-products")
public class SellerProductController {
    @Autowired
    private SellerProductRepository sellerProductRepository;

    @GetMapping
    public List<SellerProduct> getAll() {
        return sellerProductRepository.findAll();
    }

    @GetMapping("/{id}")
    public SellerProduct getById(@PathVariable Long id) {
        return sellerProductRepository.findById(id).orElse(null);
    }

    @PostMapping
    public SellerProduct create(@RequestBody SellerProduct sellerProduct) {
        return sellerProductRepository.save(sellerProduct);
    }

    @PutMapping("/{id}")
    public SellerProduct update(@PathVariable Long id, @RequestBody SellerProduct sellerProduct) {
        sellerProduct.setId(id);
        return sellerProductRepository.save(sellerProduct);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        sellerProductRepository.deleteById(id);
    }
}

