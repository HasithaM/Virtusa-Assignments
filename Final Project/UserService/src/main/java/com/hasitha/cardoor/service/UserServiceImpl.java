package com.hasitha.cardoor.service;

import com.hasitha.cardoor.exceptionhandler.ResourceNotFoundException;
import com.hasitha.cardoor.model.AccessToken;
import com.hasitha.cardoor.model.APIResponse;
import com.hasitha.cardoor.model.Role;
import com.hasitha.cardoor.model.User;
import com.hasitha.cardoor.repository.RoleRepository;
import com.hasitha.cardoor.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Example;
import org.springframework.http.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.sql.Timestamp;
import java.util.*;

@Service
public class UserServiceImpl implements UserService {

    @Value("${authserver.clientid}")
    private String clientID;
    @Value("${authserver.clintsecret}")
    private String clientSecret;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private RestTemplate restTemplate;

    @Bean
    public BCryptPasswordEncoder getbCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public RestTemplate getRestTemplate() {
        return new RestTemplate();
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public List<User> getAllUsersByEmail(String email) {
        User user = new User();
        user.setEmailAddress(email);

        Example<User> userExample = Example.of(user);
        return userRepository.findAll(userExample);
    }

    @Override
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public ResponseEntity<User> getUserById(Integer userId) throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User Not Found for this ID : " + userId));

        return ResponseEntity.ok().body(user);
    }

    @Override
    public User createUser(User user) {
        Role userRole = roleRepository.findByName("ROLE_USER");

        User updateUser = new User();
        updateUser.setFirstName(user.getFirstName());
        updateUser.setLastName(user.getLastName());
        updateUser.setEmailAddress(user.getEmailAddress());
        updateUser.setUsername(user.getUsername());
        updateUser.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        updateUser.setPhoneNumber(user.getPhoneNumber());

        List<Role> roleList = new ArrayList<>();
        roleList.add(userRole);

        updateUser.setRoles(roleList);
        updateUser.setDateJoined(new Timestamp(System.currentTimeMillis()));
        updateUser.setStatus("A");
        updateUser.setEnabled(Boolean.TRUE);
        updateUser.setAccountNonExpired(Boolean.TRUE);
        updateUser.setCredentialsNonExpired(Boolean.TRUE);
        updateUser.setAccountNonLocked(Boolean.TRUE);

        return userRepository.save(updateUser);
    }

    @Override
    public ResponseEntity<User> updateUser(Integer userId, User user) {
        Optional<User> currentUser = userRepository.findById(userId);

        if (currentUser.isPresent()) {
            User updateUser = currentUser.get();
            updateUser.setFirstName(user.getFirstName());
            updateUser.setLastName(user.getLastName());
            updateUser.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            updateUser.setPhoneNumber(user.getPhoneNumber());

            User updatedUser = userRepository.save(updateUser);

            return ResponseEntity.ok(updatedUser);
        } else {
            return null;
        }
    }

    @Override
    public Map<String, Boolean> deleteUser(Integer userId) throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User Not Found for this ID : " + userId));

        userRepository.delete(user);

        Map<String, Boolean> response = new HashMap<>();
        response.put("User Deleted", Boolean.TRUE);
        return response;
    }

    @Override
    public APIResponse userLogin(String username, String password) throws ResourceNotFoundException {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);

        User dbUser = userRepository.findByUsername(username);

        if (dbUser == null) {
            throw new ResourceNotFoundException("Email or Password is Wrong!");
        } else {
            if (!bCryptPasswordEncoder.matches(password, dbUser.getPassword())) {
                throw new ResourceNotFoundException("Email or Password is Wrong!");
            } else {

                // Call and get Access Token
                String authServerURL = "http://localhost:9595/oauth/token";
                String clientCredentials = clientID + ":" + clientSecret;
                String authBasicHeaderClient = "Basic " + Base64.getEncoder().encodeToString(clientCredentials.getBytes());

                HttpHeaders httpHeaders = new HttpHeaders();
                httpHeaders.set(HttpHeaders.AUTHORIZATION, authBasicHeaderClient);
                httpHeaders.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

                MultiValueMap<String, String> multiValueMap = new LinkedMultiValueMap<>();
                multiValueMap.add("username", username);
                multiValueMap.add("password", password);
                multiValueMap.add("grant_type", "password");

                HttpEntity<MultiValueMap<String, String>> httpEntity = new HttpEntity<>(multiValueMap, httpHeaders);

                ResponseEntity<AccessToken> responseEntity = restTemplate.exchange(
                        authServerURL, HttpMethod.POST, httpEntity, AccessToken.class);

                return new APIResponse(200, "Successfull!", responseEntity.getBody());
            }
        }
    }
}