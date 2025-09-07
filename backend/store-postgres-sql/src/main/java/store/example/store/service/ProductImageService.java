package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.ProductImageRepository;
import store.example.store.model.ProductImage;
import java.util.List;
import java.util.Optional;

@Service
public class ProductImageService {
    @Autowired
    private ProductImageRepository productImageRepository;

    public List<ProductImage> getAll() {
        return productImageRepository.findAll();
    }

    public Optional<ProductImage> getById(Long id) {
        return productImageRepository.findById(id);
    }

    public ProductImage create(ProductImage productImage) {
        return productImageRepository.save(productImage);
    }

    public ProductImage update(Long id, ProductImage productImage) {
        productImage.setId(id);
        return productImageRepository.save(productImage);
    }

    public void delete(Long id) {
        productImageRepository.deleteById(id);
    }
}

