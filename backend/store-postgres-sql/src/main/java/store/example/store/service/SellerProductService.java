package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.SellerProductRepository;
import store.example.store.model.SellerProduct;
import java.util.List;
import java.util.Optional;

@Service
public class SellerProductService {
    @Autowired
    private SellerProductRepository sellerProductRepository;

    public List<SellerProduct> getAll() {
        return sellerProductRepository.findAll();
    }

    public Optional<SellerProduct> getById(Long id) {
        return sellerProductRepository.findById(id);
    }

    public SellerProduct create(SellerProduct sellerProduct) {
        return sellerProductRepository.save(sellerProduct);
    }

    public SellerProduct update(Long id, SellerProduct sellerProduct) {
        sellerProduct.setId(id);
        return sellerProductRepository.save(sellerProduct);
    }

    public void delete(Long id) {
        sellerProductRepository.deleteById(id);
    }
}

