package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.InventoryRepository;
import store.example.store.Repository.ProductRepository;
import store.example.store.Repository.WarehouseRepository;
import store.example.store.model.Inventory;
import java.util.List;

@RestController
@RequestMapping("/api/inventories")
public class InventoryController {
    @Autowired
    private InventoryRepository inventoryRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private WarehouseRepository warehouseRepository;

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
        if (inventory.getProduct() == null || inventory.getProduct().getProductId() == null) {
            throw new IllegalArgumentException("Product with valid ID is required for inventory");
        }
        if (inventory.getWarehouse() == null || inventory.getWarehouse().getWarehouseId() == null) {
            throw new IllegalArgumentException("Warehouse with valid ID is required for inventory");
        }
        if (inventory.getQuantityAvailable() == null) {
            throw new IllegalArgumentException("Quantity available is required for inventory");
        }
        if (!productRepository.existsById(inventory.getProduct().getProductId())) {
            throw new IllegalArgumentException("Product with ID " + inventory.getProduct().getProductId() + " does not exist");
        }
        if (!warehouseRepository.existsById(inventory.getWarehouse().getWarehouseId())) {
            throw new IllegalArgumentException("Warehouse with ID " + inventory.getWarehouse().getWarehouseId() + " does not exist");
        }
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

