package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.ProductAnswerRepository;
import store.example.store.model.ProductAnswer;
import java.util.List;
import java.util.Optional;

@Service
public class ProductAnswerService {
    @Autowired
    private ProductAnswerRepository productAnswerRepository;

    public List<ProductAnswer> getAll() {
        return productAnswerRepository.findAll();
    }

    public Optional<ProductAnswer> getById(Long id) {
        return productAnswerRepository.findById(id);
    }

    public ProductAnswer create(ProductAnswer productAnswer) {
        return productAnswerRepository.save(productAnswer);
    }

    public ProductAnswer update(Long id, ProductAnswer productAnswer) {
        productAnswer.setId(id);
        return productAnswerRepository.save(productAnswer);
    }

    public void delete(Long id) {
        productAnswerRepository.deleteById(id);
    }
}

