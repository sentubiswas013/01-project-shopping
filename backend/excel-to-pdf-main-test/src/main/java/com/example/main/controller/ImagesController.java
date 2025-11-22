package com.example.main.controller;

import com.example.main.model.Images;
import com.example.main.repository.ImagesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/images")
public class ImagesController {
	@Autowired
	private ImagesRepository imagesRepository;

	@GetMapping
	public List<Images> getAll() {
		return imagesRepository.findAll();
	}

	@PostMapping
	public Images create(@RequestBody Images images) {
		return imagesRepository.save(images);
	}
}
