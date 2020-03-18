package com.hasitha.cardoor.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "user")
@Data
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "firstname")
    @NotEmpty(message = "*Please Provide Your FirstName")
    private String firstName;

    @Column(name = "lastname")
    @NotEmpty(message = "*Please Provide Your LastName")
    private String lastName;

    @Column(name = "email")
    @Email
    @NotEmpty(message = "*Please Provide Your Email")
    private String emailAddress;

    @Column(name = "username")
    @NotEmpty(message = "*Please Provide Your Username")
    private String username;

    @Column(name = "password")
    @NotEmpty(message = "*Please Provide Your Password")
    @Length(min = 8, message = "*Your Password must have at least 8 Characters")
    private String password;

    @Column(name = "phoneNumber")
    @NotEmpty(message = "*Please Provide Your Phone Number")
    @Length(min = 10, max = 10, message = "*Your Phone Number must have 10 Digits")
    private String phoneNumber;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "role_user", joinColumns = {
            @JoinColumn(name = "user_id", referencedColumnName = "id")}, inverseJoinColumns = {
            @JoinColumn(name = "role_id", referencedColumnName = "id")})
    private List<Role> roles;

    @Column(name = "dateJoined")
    private Timestamp dateJoined;
    @Column(name = "status")
    private String status; // a - active, d - deactivated

    @Column(name = "enabled")
    private boolean enabled;
    @Column(name = "accountNonExpired")
    private boolean accountNonExpired;
    @Column(name = "credentialsNonExpired")
    private boolean credentialsNonExpired;
    @Column(name = "accountNonLocked")
    private boolean accountNonLocked;

    @Transient
    private Booking[] bookings;

    @Transient
    private Payment[] payments;

    public User() {
    }

    public User(@NotEmpty(message = "*Please Provide Your FirstName") String firstName, @NotEmpty(message = "*Please Provide Your LastName") String lastName, @Email @NotEmpty(message = "*Please Provide Your Email") String emailAddress, @Email @NotEmpty(message = "*Please Provide Your Username (Email)") String username, @NotEmpty(message = "*Please Provide Your Password") @Length(min = 8, message = "*Your Password must have at least 8 Characters") String password, @NotEmpty(message = "*Please Provide Your Phone Number") @Length(min = 10, max = 10, message = "*Your Phone Number must have 10 Digits") String phoneNumber, List<Role> roles, Timestamp dateJoined, String status, boolean enabled, boolean accountNonExpired, boolean credentialsNonExpired, boolean accountNonLocked) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.username = username;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.roles = roles;
        this.dateJoined = dateJoined;
        this.status = status;
        this.enabled = enabled;
        this.accountNonExpired = accountNonExpired;
        this.credentialsNonExpired = credentialsNonExpired;
        this.accountNonLocked = accountNonLocked;
    }

    public User(@NotEmpty(message = "*Please Provide Your FirstName") String firstName, @NotEmpty(message = "*Please Provide Your LastName") String lastName, @Email @NotEmpty(message = "*Please Provide Your Email") String emailAddress, @Email @NotEmpty(message = "*Please Provide Your Username (Email)") String username, @NotEmpty(message = "*Please Provide Your Password") @Length(min = 8, message = "*Your Password must have at least 8 Characters") String password, @NotEmpty(message = "*Please Provide Your Phone Number") @Length(min = 10, max = 10, message = "*Your Phone Number must have 10 Digits") String phoneNumber, List<Role> roles, Timestamp dateJoined, String status, boolean enabled, boolean accountNonExpired, boolean credentialsNonExpired, boolean accountNonLocked, Booking[] bookings, Payment[] payments) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.username = username;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.roles = roles;
        this.dateJoined = dateJoined;
        this.status = status;
        this.enabled = enabled;
        this.accountNonExpired = accountNonExpired;
        this.credentialsNonExpired = credentialsNonExpired;
        this.accountNonLocked = accountNonLocked;
        this.bookings = bookings;
        this.payments = payments;
    }

    @JsonIgnore
    public String getPassword() {
        return password;
    }

    @JsonProperty
    public void setPassword(String password) {
        this.password = password;
    }
}