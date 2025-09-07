package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.InventoryRepository;
import store.example.store.model.Inventory;
import java.util.List;
import java.util.Optional;

@Service
public class InventoryService {
    @Autowired
    private InventoryRepository inventoryRepository;

    public List<Inventory> getAll() {
        return inventoryRepository.findAll();
    }

    public Optional<Inventory> getById(Long id) {
        return inventoryRepository.findById(id);
    }

    public Inventory create(Inventory inventory) {
        return inventoryRepository.save(inventory);
    }

    public Inventory update(Long id, Inventory inventory) {
        inventory.setId(id);
        return inventoryRepository.save(inventory);
    }

    public void delete(Long id) {
        inventoryRepository.deleteById(id);
    }
}

