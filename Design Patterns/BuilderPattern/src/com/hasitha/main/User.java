package com.hasitha.main;

public class User {

    private final String firstName;
    private final String lastName;
    private final Integer age;
    private final String address;

    public User(Builder builder) {
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.age = builder.age;
        this.address = builder.address;
    }

    static class Builder {

        private String firstName;
        private String lastName;
        private Integer age;
        private String address;

        public User build() {
            return new User(this);
        }

        public Builder(String firstName) {
            this.firstName = firstName;
        }

        public Builder lastName(String lastName) {
            this.lastName = lastName;
            return this;
        }

        public Builder age(Integer age) {
            this.age = age;
            return this;
        }

        public Builder address(String address) {
            this.address = address;
            return this;
        }
    }

    @Override
    public String toString() {
        return "User{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", age=" + age +
                ", address='" + address + '\'' +
                '}';
    }
}
