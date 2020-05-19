package com.hasitha.main;

public class Application {

    public static void main(String[] args) {
        User.Builder userBuilder = new User.Builder("John");

        User user = userBuilder.lastName("Doe").age(25).address("USA").build();

        System.out.println(user);
    }
}
