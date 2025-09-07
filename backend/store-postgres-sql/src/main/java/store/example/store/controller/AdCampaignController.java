package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.AdCampaignRepository;
import store.example.store.model.AdCampaign;
import java.util.List;

@RestController
@RequestMapping("/api/ad-campaigns")
public class AdCampaignController {
    @Autowired
    private AdCampaignRepository adCampaignRepository;

    @GetMapping
    public List<AdCampaign> getAll() {
        return adCampaignRepository.findAll();
    }

    @GetMapping("/{id}")
    public AdCampaign getById(@PathVariable Long id) {
        return adCampaignRepository.findById(id).orElse(null);
    }

    @PostMapping
    public AdCampaign create(@RequestBody AdCampaign adCampaign) {
        return adCampaignRepository.save(adCampaign);
    }

    @PutMapping("/{id}")
    public AdCampaign update(@PathVariable Long id, @RequestBody AdCampaign adCampaign) {
        adCampaign.setId(id);
        return adCampaignRepository.save(adCampaign);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        adCampaignRepository.deleteById(id);
    }
}

