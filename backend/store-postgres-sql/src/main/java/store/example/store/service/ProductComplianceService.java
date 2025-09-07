package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.ProductComplianceRepository;
import store.example.store.model.ProductCompliance;
import java.util.List;
import java.util.Optional;

@Service
public class ProductComplianceService {
    @Autowired
    private ProductComplianceRepository productComplianceRepository;

    public List<ProductCompliance> getAll() {
        return productComplianceRepository.findAll();
    }

    public Optional<ProductCompliance> getById(Long id) {
        return productComplianceRepository.findById(id);
    }

    public ProductCompliance create(ProductCompliance productCompliance) {
        return productComplianceRepository.save(productCompliance);
    }

    public ProductCompliance update(Long id, ProductCompliance productCompliance) {
        productCompliance.setId(id);
        return productComplianceRepository.save(productCompliance);
    }

    public void delete(Long id) {
        productComplianceRepository.deleteById(id);
    }
}

