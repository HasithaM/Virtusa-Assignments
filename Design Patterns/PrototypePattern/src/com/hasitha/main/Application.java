package com.hasitha.main;

public class Application {

    public static void main(String[] args) {
        Registry registry = new Registry();

        DesktopComputer desktopComputerOne = (DesktopComputer) registry.getComputer(ComputerType.DESKTOP);
        System.out.println(desktopComputerOne);

        desktopComputerOne.setMonitorBrandName("SONY");
        System.out.println(desktopComputerOne);

        DesktopComputer desktopComputerTwo = (DesktopComputer) registry.getComputer(ComputerType.DESKTOP);
        System.out.println(desktopComputerTwo);
    }
}
