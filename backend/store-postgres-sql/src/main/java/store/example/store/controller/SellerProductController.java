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
        if (sellerProduct.getSeller() == null) {
            throw new IllegalArgumentException("Seller is required for seller product");
        }
        if (sellerProduct.getProduct() == null) {
            throw new IllegalArgumentException("Product is required for seller product");
        }
        if (sellerProduct.getPrice() == null) {
            throw new IllegalArgumentException("Price is required for seller product");
        }
        if (sellerProduct.getStock() == null) {
            throw new IllegalArgumentException("Stock is required for seller product");
        }
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

