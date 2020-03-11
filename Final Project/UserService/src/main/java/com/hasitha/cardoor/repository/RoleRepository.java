package com.hasitha.cardoor.repository;

import com.hasitha.cardoor.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Integer> {

    Role findByName(String roleName);
}