package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.ProductStockHistoryRepository;
import store.example.store.model.ProductStockHistory;
import java.util.List;
import java.util.Optional;

@Service
public class ProductStockHistoryService {
    @Autowired
    private ProductStockHistoryRepository productStockHistoryRepository;

    public List<ProductStockHistory> getAll() {
        return productStockHistoryRepository.findAll();
    }

    public Optional<ProductStockHistory> getById(Long id) {
        return productStockHistoryRepository.findById(id);
    }

    public ProductStockHistory create(ProductStockHistory productStockHistory) {
        return productStockHistoryRepository.save(productStockHistory);
    }

    public ProductStockHistory update(Long id, ProductStockHistory productStockHistory) {
        productStockHistory.setId(id);
        return productStockHistoryRepository.save(productStockHistory);
    }

    public void delete(Long id) {
        productStockHistoryRepository.deleteById(id);
    }
}

