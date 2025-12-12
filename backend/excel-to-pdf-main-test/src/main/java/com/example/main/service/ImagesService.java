package com.example.main.service;

import com.example.main.model.Images;
import com.example.main.repository.ImagesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImagesService {
	private final ImagesRepository imagesRepository;

	public ImagesService(ImagesRepository imagesRepository) {
		this.imagesRepository = imagesRepository;
	}

	public List<Images> getAll() {
		return imagesRepository.findAll();
	}

	public Images create(Images images) {
		return imagesRepository.save(images);
	}
}
