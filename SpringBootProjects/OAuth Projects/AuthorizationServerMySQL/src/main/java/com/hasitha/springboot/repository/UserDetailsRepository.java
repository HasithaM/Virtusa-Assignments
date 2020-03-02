package com.hasitha.springboot.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hasitha.springboot.model.User;

public interface UserDetailsRepository extends JpaRepository<User, Integer> {
	
	Optional<User> findByUsername(String username);
}