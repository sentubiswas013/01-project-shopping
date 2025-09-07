package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.ProductQuestionRepository;
import store.example.store.model.ProductQuestion;
import java.util.List;
import java.util.Optional;

@Service
public class ProductQuestionService {
    @Autowired
    private ProductQuestionRepository productQuestionRepository;

    public List<ProductQuestion> getAll() {
        return productQuestionRepository.findAll();
    }

    public Optional<ProductQuestion> getById(Long id) {
        return productQuestionRepository.findById(id);
    }

    public ProductQuestion create(ProductQuestion productQuestion) {
        return productQuestionRepository.save(productQuestion);
    }

    public ProductQuestion update(Long id, ProductQuestion productQuestion) {
        productQuestion.setId(id);
        return productQuestionRepository.save(productQuestion);
    }

    public void delete(Long id) {
        productQuestionRepository.deleteById(id);
    }
}

