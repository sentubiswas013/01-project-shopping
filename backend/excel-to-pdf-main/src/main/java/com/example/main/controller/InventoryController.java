package com.example.main.controller;

import com.example.main.model.Inventory;
import com.example.main.repository.InventoryRepository;
import com.example.main.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import java.util.List;

@RestController
@RequestMapping("/inventory")
public class InventoryController {
    @Autowired
    private InventoryRepository inventoryRepository;

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public ResponseEntity<List<Inventory>> getAllInventory() {
        List<Inventory> inventories = inventoryRepository.findAll();
        return ResponseEntity.ok(inventories);
    }

    @PostMapping
    public ResponseEntity<?> createOrUpdateInventory(@RequestBody Inventory inventory) {
        if (!productRepository.existsById(inventory.getProductId())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                 .body("Product ID " + inventory.getProductId() + " does not exist.");
        }
        Inventory savedInventory = inventoryRepository.save(inventory);
        return ResponseEntity.status(HttpStatus.OK).body(savedInventory);
    }

    @GetMapping("/{id}")
    public Inventory getInventoryById(@PathVariable Long id) {
        return inventoryRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Inventory updateInventory(@PathVariable Long id, @RequestBody Inventory inventory) {
        // No setId call, as Inventory does not have setId method
        return inventoryRepository.save(inventory);
    }

    @DeleteMapping("/{id}")
    public void deleteInventory(@PathVariable Long id) {
        inventoryRepository.deleteById(id);
    }
}
