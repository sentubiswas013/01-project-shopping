package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.RecommendationRepository;
import store.example.store.model.Recommendation;
import java.util.List;

@RestController
@RequestMapping("/api/recommendations")
public class RecommendationController {
    @Autowired
    private RecommendationRepository recommendationRepository;

    @GetMapping
    public List<Recommendation> getAll() {
        return recommendationRepository.findAll();
    }

    @GetMapping("/{id}")
    public Recommendation getById(@PathVariable Long id) {
        return recommendationRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Recommendation create(@RequestBody Recommendation recommendation) {
        return recommendationRepository.save(recommendation);
    }

    @PutMapping("/{id}")
    public Recommendation update(@PathVariable Long id, @RequestBody Recommendation recommendation) {
        recommendation.setId(id);
        return recommendationRepository.save(recommendation);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        recommendationRepository.deleteById(id);
    }
}

