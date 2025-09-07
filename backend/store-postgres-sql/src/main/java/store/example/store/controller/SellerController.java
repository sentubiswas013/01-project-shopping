package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.SellerRepository;
import store.example.store.model.Seller;
import java.util.List;

@RestController
@RequestMapping("/api/sellers")
public class SellerController {
    @Autowired
    private SellerRepository sellerRepository;

    @GetMapping
    public List<Seller> getAll() {
        return sellerRepository.findAll();
    }

    @GetMapping("/{id}")
    public Seller getById(@PathVariable Long id) {
        return sellerRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Seller create(@RequestBody Seller seller) {
        if (seller.getStoreName() == null || seller.getStoreName().trim().isEmpty()) {
            throw new IllegalArgumentException("Store name is required");
        }
        if (seller.getUserId() == null) {
            throw new IllegalArgumentException("User ID is required");
        }
        return sellerRepository.save(seller);
    }

    @PutMapping("/{id}")
    public Seller update(@PathVariable Long id, @RequestBody Seller seller) {
        seller.setId(id);
        return sellerRepository.save(seller);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        sellerRepository.deleteById(id);
    }
}

