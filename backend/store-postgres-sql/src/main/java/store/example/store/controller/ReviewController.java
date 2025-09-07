package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.ReviewRepository;
import store.example.store.model.Review;
import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {
    @Autowired
    private ReviewRepository reviewRepository;

    @GetMapping
    public List<Review> getAll() {
        return reviewRepository.findAll();
    }

    @GetMapping("/{id}")
    public Review getById(@PathVariable Long id) {
        return reviewRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Review create(@RequestBody Review review) {
        return reviewRepository.save(review);
    }

    @PutMapping("/{id}")
    public Review update(@PathVariable Long id, @RequestBody Review review) {
        review.setId(id);
        return reviewRepository.save(review);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        reviewRepository.deleteById(id);
    }
}

