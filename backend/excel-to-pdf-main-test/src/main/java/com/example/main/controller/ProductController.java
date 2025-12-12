package com.example.main.controller;

import com.example.main.model.Product;
import com.example.main.repository.ProductRepository;
import com.example.main.repository.SellerRepository;
import com.example.main.repository.CategoryRepository;
import com.example.main.repository.ImagesRepository;
import com.example.main.model.Seller;
import com.example.main.model.Category;
import com.example.main.model.Images;
import com.example.main.dto.ProductRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.math.BigDecimal;

@RestController
@RequestMapping("/products")
public class ProductController {
	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private SellerRepository sellerRepository;

	@Autowired
	private CategoryRepository categoryRepository;

	@Autowired
	private ImagesRepository imagesRepository;

	@GetMapping
	public List<Product> getAll() {
		return productRepository.findAll();
	}

	@PostMapping
	public Product create(@RequestBody ProductRequest req) {
		Product p = new Product();
		p.setName(req.getName());
		p.setDescription(req.getDescription());
		if (req.getPrice() != null) p.setPrice(BigDecimal.valueOf(req.getPrice()));
		p.setStockQuantity(req.getStockQuantity());
		p.setBrand(req.getBrand());
		if (req.getOldPrice() != null) p.setOldPrice(BigDecimal.valueOf(req.getOldPrice()));
		p.setStock(req.getStock());
		p.setRatingAvg(req.getRatingAvg());
		p.setReviews(req.getReviews());
		p.setSale(req.getSale());
		p.setStatus(req.getStatus());

		if (req.getSellerId() != null) {
			Seller s = sellerRepository.findById(req.getSellerId()).orElse(null);
			p.setSeller(s);
		}
		if (req.getCategoryId() != null) {
			Category c = categoryRepository.findById(req.getCategoryId()).orElse(null);
			p.setCategory(c);
		}
		if (req.getImageId() != null) {
			Images i = imagesRepository.findById(req.getImageId()).orElse(null);
			p.setImages(i);
		}

		return productRepository.save(p);
	}
}
