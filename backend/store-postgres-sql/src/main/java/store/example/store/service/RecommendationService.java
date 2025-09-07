package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.RecommendationRepository;
import store.example.store.model.Recommendation;
import java.util.List;
import java.util.Optional;

@Service
public class RecommendationService {
    @Autowired
    private RecommendationRepository recommendationRepository;

    public List<Recommendation> getAll() {
        return recommendationRepository.findAll();
    }

    public Optional<Recommendation> getById(Long id) {
        return recommendationRepository.findById(id);
    }

    public Recommendation create(Recommendation recommendation) {
        return recommendationRepository.save(recommendation);
    }

    public Recommendation update(Long id, Recommendation recommendation) {
        recommendation.setId(id);
        return recommendationRepository.save(recommendation);
    }

    public void delete(Long id) {
        recommendationRepository.deleteById(id);
    }
}

