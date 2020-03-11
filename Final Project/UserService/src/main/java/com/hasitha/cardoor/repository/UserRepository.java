package com.hasitha.cardoor.repository;

import com.hasitha.cardoor.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByUsername(String username);
    User findByEmailAddress(String email);
}