package store.example.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.example.store.Repository.UserActivityRepository;
import store.example.store.model.UserActivity;
import java.util.List;

@RestController
@RequestMapping("/api/user-activities")
public class UserActivityController {
    @Autowired
    private UserActivityRepository userActivityRepository;

    @GetMapping
    public List<UserActivity> getAll() {
        return userActivityRepository.findAll();
    }

    @GetMapping("/{id}")
    public UserActivity getById(@PathVariable Long id) {
        return userActivityRepository.findById(id).orElse(null);
    }

    @PostMapping
    public UserActivity create(@RequestBody UserActivity userActivity) {
        return userActivityRepository.save(userActivity);
    }

    @PutMapping("/{id}")
    public UserActivity update(@PathVariable Long id, @RequestBody UserActivity userActivity) {
        userActivity.setId(id);
        return userActivityRepository.save(userActivity);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        userActivityRepository.deleteById(id);
    }
}

