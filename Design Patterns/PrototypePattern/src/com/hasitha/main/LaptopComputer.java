package com.hasitha.main;

public class LaptopComputer extends Computer {

    private String batteryBrandName;

    public String getBatteryBrandName() {
        return batteryBrandName;
    }

    public void setBatteryBrandName(String batteryBrandName) {
        this.batteryBrandName = batteryBrandName;
    }

    @Override
    public String toString() {
        return "LaptopComputer{" +
                "batteryBrandName='" + batteryBrandName + '\'' +
                '}';
    }
}
