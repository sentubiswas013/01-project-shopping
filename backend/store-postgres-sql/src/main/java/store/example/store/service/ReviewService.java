package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.ReviewRepository;
import store.example.store.model.Review;
import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    public List<Review> getAll() {
        return reviewRepository.findAll();
    }

    public Optional<Review> getById(Long id) {
        return reviewRepository.findById(id);
    }

    public Review create(Review review) {
        return reviewRepository.save(review);
    }

    public Review update(Long id, Review review) {
        review.setId(id);
        return reviewRepository.save(review);
    }

    public void delete(Long id) {
        reviewRepository.deleteById(id);
    }
}

