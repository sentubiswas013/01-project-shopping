package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.WarehouseRepository;
import store.example.store.model.Warehouse;
import java.util.List;

@RestController
@RequestMapping("/api/warehouses")
public class WarehouseController {
    @Autowired
    private WarehouseRepository warehouseRepository;

    @GetMapping
    public List<Warehouse> getAll() {
        return warehouseRepository.findAll();
    }

    @GetMapping("/{id}")
    public Warehouse getById(@PathVariable Long id) {
        return warehouseRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Warehouse create(@RequestBody Warehouse warehouse) {
        return warehouseRepository.save(warehouse);
    }

    @PutMapping("/{id}")
    public Warehouse update(@PathVariable Long id, @RequestBody Warehouse warehouse) {
        warehouse.setId(id);
        return warehouseRepository.save(warehouse);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        warehouseRepository.deleteById(id);
    }
}

