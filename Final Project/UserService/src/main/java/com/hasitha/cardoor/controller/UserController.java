package com.hasitha.cardoor.controller;

import com.hasitha.cardoor.exceptionhandler.ResourceNotFoundException;
import com.hasitha.cardoor.model.APIResponse;
import com.hasitha.cardoor.model.User;
import com.hasitha.cardoor.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(value = "/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(value = "/user/id/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable Integer userId) throws ResourceNotFoundException {
        return userService.findUserById(userId);
    }

    @PostMapping(value = "/user")
    public APIResponse createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @PutMapping(value = "/user/{username}")
    public APIResponse updateUser(@PathVariable String username, @RequestBody User user) {
        return userService.updateUser(username, user);
    }

    @DeleteMapping(value = "/user/{username}")
    public APIResponse deleteUser(@PathVariable String username) throws ResourceNotFoundException {
        return userService.deleteUser(username);
    }

    @GetMapping(value = "/login/{username}/{password}")
    public APIResponse userLogin(@PathVariable String username, @PathVariable String password) throws ResourceNotFoundException {
        return userService.userLogin(username, password);
    }

    @GetMapping(value = "/checktoken/{username}/{accessToken}/{refreshToken}")
    public APIResponse checkAccessToken(@PathVariable String username, @PathVariable String accessToken, @PathVariable String refreshToken) {
        return userService.checkAccessToken(username, accessToken, refreshToken);
    }
}