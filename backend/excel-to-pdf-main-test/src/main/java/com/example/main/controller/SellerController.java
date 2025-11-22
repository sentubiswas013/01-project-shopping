package com.example.main.controller;

import com.example.main.model.Seller;
import com.example.main.repository.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sellers")
public class SellerController {
	@Autowired
	private SellerRepository sellerRepository;

	@GetMapping
	public List<Seller> getAll() {
		return sellerRepository.findAll();
	}

	@PostMapping
	public Seller create(@RequestBody Seller seller) {
		return sellerRepository.save(seller);
	}
}
