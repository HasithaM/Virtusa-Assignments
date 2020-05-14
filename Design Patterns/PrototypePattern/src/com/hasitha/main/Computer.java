package com.hasitha.main;

public abstract class Computer implements Cloneable {

    private String processorBrandName;
    private double processorSpeed;

    public String getProcessorBrandName() {
        return processorBrandName;
    }

    public void setProcessorBrandName(String processorBrandName) {
        this.processorBrandName = processorBrandName;
    }

    public double getProcessorSpeed() {
        return processorSpeed;
    }

    public void setProcessorSpeed(double processorSpeed) {
        this.processorSpeed = processorSpeed;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}
