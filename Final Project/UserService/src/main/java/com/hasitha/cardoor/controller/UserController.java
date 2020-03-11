package com.hasitha.cardoor.controller;

import com.hasitha.cardoor.exceptionhandler.ResourceNotFoundException;
import com.hasitha.cardoor.model.APIResponse;
import com.hasitha.cardoor.model.User;
import com.hasitha.cardoor.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(value = "/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(value = "/user/email/{email}")
    public List<User> getUserByEmail(@PathVariable String email) {
        return userService.getUserByEmail(email);
    }

    @GetMapping(value = "/user/id/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable Integer userId) throws ResourceNotFoundException {
        return userService.getUserById(userId);
    }

    @PostMapping(value = "/user")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @PutMapping(value = "/user/{userId}")
    public ResponseEntity<User> updateUser(@PathVariable Integer userId, @RequestBody User user) {
        return userService.updateUser(userId, user);
    }

    @DeleteMapping(value = "/user/{userId}")
    public Map<String, Boolean> deleteUser(@PathVariable Integer userId) throws ResourceNotFoundException {
        return userService.deleteUser(userId);
    }

    @GetMapping(value = "/login/{username}/{password}")
    public APIResponse userLogin(@PathVariable String username, @PathVariable String password) throws ResourceNotFoundException {
        return userService.userLogin(username, password);
    }
}