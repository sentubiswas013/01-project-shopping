package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.SellerRepository;
import store.example.store.model.Seller;
import java.util.List;
import java.util.Optional;

@Service
public class SellerService {
    @Autowired
    private SellerRepository sellerRepository;

    public List<Seller> getAll() {
        return sellerRepository.findAll();
    }

    public Optional<Seller> getById(Long id) {
        return sellerRepository.findById(id);
    }

    public Seller create(Seller seller) {
        return sellerRepository.save(seller);
    }

    public Seller update(Long id, Seller seller) {
        seller.setId(id);
        return sellerRepository.save(seller);
    }

    public void delete(Long id) {
        sellerRepository.deleteById(id);
    }
}

