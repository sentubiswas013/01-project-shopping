package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.ProductStockHistoryRepository;
import store.example.store.model.ProductStockHistory;
import java.util.List;

@RestController
@RequestMapping("/api/product-stock-history")
public class ProductStockHistoryController {
    @Autowired
    private ProductStockHistoryRepository productStockHistoryRepository;

    @GetMapping
    public List<ProductStockHistory> getAll() {
        return productStockHistoryRepository.findAll();
    }

    @GetMapping("/{id}")
    public ProductStockHistory getById(@PathVariable Long id) {
        return productStockHistoryRepository.findById(id).orElse(null);
    }

    @PostMapping
    public ProductStockHistory create(@RequestBody ProductStockHistory productStockHistory) {
        return productStockHistoryRepository.save(productStockHistory);
    }

    @PutMapping("/{id}")
    public ProductStockHistory update(@PathVariable Long id, @RequestBody ProductStockHistory productStockHistory) {
        productStockHistory.setId(id);
        return productStockHistoryRepository.save(productStockHistory);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productStockHistoryRepository.deleteById(id);
    }
}

