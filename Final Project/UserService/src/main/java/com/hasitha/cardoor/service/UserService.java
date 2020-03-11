package com.hasitha.cardoor.service;

import com.hasitha.cardoor.exceptionhandler.ResourceNotFoundException;
import com.hasitha.cardoor.model.APIResponse;
import com.hasitha.cardoor.model.User;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface UserService {

    List<User> getAllUsers();
    List<User> getUserByEmail(String email);
    ResponseEntity<User> getUserById(Integer userId) throws ResourceNotFoundException;

    User createUser(User user);
    ResponseEntity<User> updateUser(Integer userId, User user);
    Map<String, Boolean> deleteUser(Integer userId) throws ResourceNotFoundException;

    APIResponse userLogin(String email, String password) throws ResourceNotFoundException;
}