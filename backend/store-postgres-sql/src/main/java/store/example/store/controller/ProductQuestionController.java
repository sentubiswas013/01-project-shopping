package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.ProductQuestionRepository;
import store.example.store.model.ProductQuestion;
import java.util.List;

@RestController
@RequestMapping("/api/product-questions")
public class ProductQuestionController {
    @Autowired
    private ProductQuestionRepository productQuestionRepository;

    @GetMapping
    public List<ProductQuestion> getAll() {
        return productQuestionRepository.findAll();
    }

    @GetMapping("/{id}")
    public ProductQuestion getById(@PathVariable Long id) {
        return productQuestionRepository.findById(id).orElse(null);
    }

    @PostMapping
    public ProductQuestion create(@RequestBody ProductQuestion productQuestion) {
        if (productQuestion.getProduct() == null) {
            throw new IllegalArgumentException("Product is required for product question");
        }
        if (productQuestion.getUserId() == null) {
            throw new IllegalArgumentException("User ID is required for product question");
        }
        if (productQuestion.getQuestion() == null || productQuestion.getQuestion().trim().isEmpty()) {
            throw new IllegalArgumentException("Question text is required for product question");
        }
        return productQuestionRepository.save(productQuestion);
    }

    @PutMapping("/{id}")
    public ProductQuestion update(@PathVariable Long id, @RequestBody ProductQuestion productQuestion) {
        productQuestion.setId(id);
        return productQuestionRepository.save(productQuestion);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productQuestionRepository.deleteById(id);
    }
}

