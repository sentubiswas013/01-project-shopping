package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.AdClickRepository;
import store.example.store.model.AdClick;
import java.util.List;

@RestController
@RequestMapping("/api/ad-clicks")
public class AdClickController {
    @Autowired
    private AdClickRepository adClickRepository;

    @GetMapping
    public List<AdClick> getAll() {
        return adClickRepository.findAll();
    }

    @GetMapping("/{id}")
    public AdClick getById(@PathVariable Long id) {
        return adClickRepository.findById(id).orElse(null);
    }

    @PostMapping
    public AdClick create(@RequestBody AdClick adClick) {
        return adClickRepository.save(adClick);
    }

    @PutMapping("/{id}")
    public AdClick update(@PathVariable Long id, @RequestBody AdClick adClick) {
        adClick.setId(id);
        return adClickRepository.save(adClick);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        adClickRepository.deleteById(id);
    }
}

