package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.InventoryRepository;
import store.example.store.model.Inventory;
import java.util.List;

@RestController
@RequestMapping("/api/inventories")
public class InventoryController {
    @Autowired
    private InventoryRepository inventoryRepository;

    @GetMapping
    public List<Inventory> getAll() {
        return inventoryRepository.findAll();
    }

    @GetMapping("/{id}")
    public Inventory getById(@PathVariable Long id) {
        return inventoryRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Inventory create(@RequestBody Inventory inventory) {
        return inventoryRepository.save(inventory);
    }

    @PutMapping("/{id}")
    public Inventory update(@PathVariable Long id, @RequestBody Inventory inventory) {
        inventory.setId(id);
        return inventoryRepository.save(inventory);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        inventoryRepository.deleteById(id);
    }
}

