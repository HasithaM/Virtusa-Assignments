package com.hasitha.cardoor.service;

import com.hasitha.cardoor.exceptionhandler.ResourceNotFoundException;
import com.hasitha.cardoor.model.APIResponse;
import com.hasitha.cardoor.model.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {

    List<User> getAllUsers();

    User findUserByUsername(String username);
    User findUserByEmail(String email);
    ResponseEntity<User> findUserById(Integer userId) throws ResourceNotFoundException;

    APIResponse createUser(User user);
    APIResponse updateUser(String username, User user);
    APIResponse deleteUser(String username) throws ResourceNotFoundException;

    APIResponse userLogin(String username, String password) throws ResourceNotFoundException;

    APIResponse refreshAccessToken(String refreshToken);
    APIResponse checkAccessToken(String username, String accessToken, String refreshToken);
}