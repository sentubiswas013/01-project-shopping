package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.AdCampaignRepository;
import store.example.store.model.AdCampaign;
import java.util.List;
import java.util.Optional;

@Service
public class AdCampaignService {
    @Autowired
    private AdCampaignRepository adCampaignRepository;

    public List<AdCampaign> getAll() {
        return adCampaignRepository.findAll();
    }

    public Optional<AdCampaign> getById(Long id) {
        return adCampaignRepository.findById(id);
    }

    public AdCampaign create(AdCampaign adCampaign) {
        return adCampaignRepository.save(adCampaign);
    }

    public AdCampaign update(Long id, AdCampaign adCampaign) {
        adCampaign.setId(id);
        return adCampaignRepository.save(adCampaign);
    }

    public void delete(Long id) {
        adCampaignRepository.deleteById(id);
    }
}

