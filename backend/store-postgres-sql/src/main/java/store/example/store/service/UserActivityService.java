package store.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.example.store.Repository.UserActivityRepository;
import store.example.store.model.UserActivity;
import java.util.List;
import java.util.Optional;

@Service
public class UserActivityService {
    @Autowired
    private UserActivityRepository userActivityRepository;

    public List<UserActivity> getAll() {
        return userActivityRepository.findAll();
    }

    public Optional<UserActivity> getById(Long id) {
        return userActivityRepository.findById(id);
    }

    public UserActivity create(UserActivity userActivity) {
        return userActivityRepository.save(userActivity);
    }

    public UserActivity update(Long id, UserActivity userActivity) {
        userActivity.setId(id);
        return userActivityRepository.save(userActivity);
    }

    public void delete(Long id) {
        userActivityRepository.deleteById(id);
    }
}

