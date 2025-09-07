package store.example.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.example.store.model.UserActivity;

public interface UserActivityRepository extends JpaRepository<UserActivity, Long> {
    // Custom query methods can be added here
}

