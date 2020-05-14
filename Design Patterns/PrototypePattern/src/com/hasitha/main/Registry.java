package com.hasitha.main;

import java.util.HashMap;
import java.util.Map;

public class Registry {

    private Map<ComputerType, Computer> computerMap = new HashMap<>();

    public Registry() {
        this.initialize();
    }

    public Computer getComputer(ComputerType computerType) {
        Computer computer = null;

        try {
            computer = (Computer) computerMap.get(computerType).clone();
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }

        return computer;
    }

    private void initialize() {
        DesktopComputer desktopComputer = new DesktopComputer();
        desktopComputer.setProcessorBrandName("INTEL");
        desktopComputer.setProcessorSpeed(1.70);
        desktopComputer.setMonitorBrandName("SAMSUNG");

        LaptopComputer laptopComputer = new LaptopComputer();
        laptopComputer.setProcessorBrandName("INTEL");
        laptopComputer.setProcessorSpeed(3.50);
        laptopComputer.setBatteryBrandName("DELL");

        computerMap.put(ComputerType.DESKTOP, desktopComputer);
        computerMap.put(ComputerType.LAPTOP, laptopComputer);
    }
}
