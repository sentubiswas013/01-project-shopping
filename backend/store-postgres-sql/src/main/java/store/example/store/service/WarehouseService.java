package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.WarehouseRepository;
import store.example.store.model.Warehouse;
import java.util.List;
import java.util.Optional;

@Service
public class WarehouseService {
    @Autowired
    private WarehouseRepository warehouseRepository;

    public List<Warehouse> getAll() {
        return warehouseRepository.findAll();
    }

    public Optional<Warehouse> getById(Long id) {
        return warehouseRepository.findById(id);
    }

    public Warehouse create(Warehouse warehouse) {
        return warehouseRepository.save(warehouse);
    }

    public Warehouse update(Long id, Warehouse warehouse) {
        warehouse.setId(id);
        return warehouseRepository.save(warehouse);
    }

    public void delete(Long id) {
        warehouseRepository.deleteById(id);
    }
}

