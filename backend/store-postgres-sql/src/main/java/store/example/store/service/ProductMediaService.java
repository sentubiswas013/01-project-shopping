package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.ProductMediaRepository;
import store.example.store.model.ProductMedia;
import java.util.List;
import java.util.Optional;

@Service
public class ProductMediaService {
    @Autowired
    private ProductMediaRepository productMediaRepository;

    public List<ProductMedia> getAll() {
        return productMediaRepository.findAll();
    }

    public Optional<ProductMedia> getById(Long id) {
        return productMediaRepository.findById(id);
    }

    public ProductMedia create(ProductMedia productMedia) {
        return productMediaRepository.save(productMedia);
    }

    public ProductMedia update(Long id, ProductMedia productMedia) {
        productMedia.setId(id);
        return productMediaRepository.save(productMedia);
    }

    public void delete(Long id) {
        productMediaRepository.deleteById(id);
    }
}

