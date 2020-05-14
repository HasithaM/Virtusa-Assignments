package com.hasitha.main;

public class DesktopComputer extends Computer {

    private String monitorBrandName;

    public String getMonitorBrandName() {
        return monitorBrandName;
    }

    public void setMonitorBrandName(String monitorBrandName) {
        this.monitorBrandName = monitorBrandName;
    }

    @Override
    public String toString() {
        return "DesktopComputer{" +
                "monitorBrandName='" + monitorBrandName + '\'' +
                '}';
    }
}
