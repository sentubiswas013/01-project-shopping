package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.AdClickRepository;
import store.example.store.model.AdClick;
import java.util.List;
import java.util.Optional;

@Service
public class AdClickService {
    @Autowired
    private AdClickRepository adClickRepository;

    public List<AdClick> getAll() {
        return adClickRepository.findAll();
    }

    public Optional<AdClick> getById(Long id) {
        return adClickRepository.findById(id);
    }

    public AdClick create(AdClick adClick) {
        return adClickRepository.save(adClick);
    }

    public AdClick update(Long id, AdClick adClick) {
        adClick.setId(id);
        return adClickRepository.save(adClick);
    }

    public void delete(Long id) {
        adClickRepository.deleteById(id);
    }
}

