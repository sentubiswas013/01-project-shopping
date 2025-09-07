package store.example.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.example.store.model.AdCampaign;

public interface AdCampaignRepository extends JpaRepository<AdCampaign, Long> {
    // Custom query methods can be added here
}

