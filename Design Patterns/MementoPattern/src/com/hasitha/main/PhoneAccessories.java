package com.hasitha.main;

public class PhoneAccessories {

    String accessoryName;

    public PhoneAccessories(String accessoryName) {
        this.accessoryName = accessoryName;
    }

    @Override
    public String toString() {
        return "PhoneAccessories{" +
                "accessoryName='" + accessoryName + '\'' +
                '}';
    }
}
