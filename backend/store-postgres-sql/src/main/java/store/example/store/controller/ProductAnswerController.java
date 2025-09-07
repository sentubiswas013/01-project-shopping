package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.ProductAnswerRepository;
import store.example.store.model.ProductAnswer;
import java.util.List;

@RestController
@RequestMapping("/api/product-answers")
public class ProductAnswerController {
    @Autowired
    private ProductAnswerRepository productAnswerRepository;

    @GetMapping
    public List<ProductAnswer> getAll() {
        return productAnswerRepository.findAll();
    }

    @GetMapping("/{id}")
    public ProductAnswer getById(@PathVariable Long id) {
        return productAnswerRepository.findById(id).orElse(null);
    }

    @PostMapping
    public ProductAnswer create(@RequestBody ProductAnswer productAnswer) {
        return productAnswerRepository.save(productAnswer);
    }

    @PutMapping("/{id}")
    public ProductAnswer update(@PathVariable Long id, @RequestBody ProductAnswer productAnswer) {
        productAnswer.setId(id);
        return productAnswerRepository.save(productAnswer);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productAnswerRepository.deleteById(id);
    }
}

